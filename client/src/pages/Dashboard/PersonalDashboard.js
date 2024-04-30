import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { markupText } from "../../utils";
import UserProject from "./userPostedProject/userProjectHome";
import RequestedProject from "./RequestedProjects/RequestedProject";

const PersonalDashboard = () => {
  // useSelector Hook se mill jayega sb

  const { data } = useSelector((state) => state.authReducer);
  console.log(data)
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/editdiscription");
  };

  return (
    <div className="main-bar">
      {data === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="user-details">
            <h4>
              {data?.result?.loginAs} Name : <p>{data?.result?.name}</p>
            </h4>
            <h4>
              {data?.result?.loginAs} Email : <p>{data?.result?.email}</p>
            </h4>
          </div>
          <div className="dashDescription">
            <div className="desedit">
              <h2>{data?.result?.loginAs} Description :</h2>
              <button onClick={handleEditClick} className="Review-btn edit">
                Edit
              </button>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: markupText(data?.result?.Description, "\n", "br"),
              }}
            ></p>
          </div>
          <UserProject />
        </>
      )}
    </div>
  );
};

export default PersonalDashboard;
