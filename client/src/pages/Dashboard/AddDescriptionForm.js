import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar_default/Navbar";
import "../../pages/PostProject/postProject.css";
import { useNavigate } from "react-router-dom";
import { getUserDetail, updateUserDescription } from "../../api/auth";

const AddDescriptionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.authReducer);
  const [description, setDiscription] = useState(data?.result?.Description);

  // Here patch function of data base will triggred to edit a project on submitting the form

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || description === "")
      return alert("Please Write Your Description");

    updateUserDescription(
      { id: data?.result?._id, newDescription: description },
      (err, res) => {
        if (err) return console.log(err);
        getUserDetail(res.data._id, (err, res) => {
          if (err) return;
          dispatch({
            type: "SET_USER_DATA",
            data: { ...data, result: res.data },
          });
          navigate("/dashboard");
        });
      }
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setDiscription(description + "\n");
    }
  };

  return (
    <div className="ask-question">
      <Navbar />
      <div className="ask-ques-container">
        <h1 style={{ color: "#58D5DA" }}>Edit Description</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-body">
              <h4 className="h444">Description of project</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                cols="30"
                rows="10"
                autoComplete="off"
                value={description}
                onKeyDown={handleKeyPress}
                onChange={(e) => setDiscription(e.target.value)}
              ></textarea>
            </label>
          </div>
          <input
            type="submit"
            value="Save Description"
            className="Review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDescriptionForm;
