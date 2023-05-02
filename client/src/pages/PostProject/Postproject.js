import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar_default/Navbar";
// import { postProject } from "../../actions/project";
import "./postProject.css";
import { getAllProjects, postNewProject } from "../../api/project";

const Postproject = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectBody, setProjectBody] = useState("");
  const [projectTags, setProjectTags] = useState("");
  const [job, setJob] = useState("Job");

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let projectData = {
      projectTitle,
      projectBody,
      projectTags,
      jobType: job,
      userPosted: data.result.name,
      email: data.result.email,
      userId: data.result._id,
    };
    postNewProject(projectData, (err, res) => {
      if (err) return console.log(err);
      getAllProjects((err, res) => {
        if (err) return console.log(err);
        dispatch({ type: "FETCH_ALL_PROJECTS", payload: res.data });
      });
      navigate("/explore");
    });
  };

  const styleButton = {
    backgroundColor: "#58D5DA",
    color: "#001D1E",
  };

  const [buttonJobStyle, setJobButtonStyle] = useState(styleButton);
  const [buttonInternStyle, setinternButtonStyle] = useState({
    backgroundColor: "#001D1E",
    color: "#58D5DA",
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setProjectBody(projectBody + "\n");
    }
  };

  const handleClickJobButton = (e) => {
    e.preventDefault();
    setJob("Job");
    if (buttonJobStyle === styleButton) {
      setJobButtonStyle(styleButton);
      setinternButtonStyle({ backgroundColor: "#001D1E", color: "#58D5DA" });
    } else {
      setJobButtonStyle(styleButton);
      setinternButtonStyle({ backgroundColor: "#001D1E", color: "#58D5DA" });
    }
  };

  const handleClickInternButton = (e) => {
    e.preventDefault();
    setJob("Intern");
    if (buttonInternStyle !== styleButton) {
      setinternButtonStyle(styleButton);
      setJobButtonStyle({ backgroundColor: "#001D1E", color: "#58D5DA" });
    }
  };

  // console.log(job);

  return (
    <div className="ask-question">
      <Navbar />
      <div className="ask-ques-container">
        <h1 style={{ color: "#58D5DA" }}>Post Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4 className="h444">Project Title</h4>
              <p>Be specific about your project title</p>
              <input
                type="text"
                id="ask-ques-title"
                placeholder="e.g. Build a Freelancing website"
                autoComplete="off"
                onChange={(e) => {
                  setProjectTitle(e.target.value);
                }}
              />
            </label>
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
                onKeyDown={handleKeyPress}
                onChange={(e) => {
                  setProjectBody(e.target.value);
                }}
              ></textarea>
            </label>

            <label htmlFor="ask-ques-tags">
              <h4 className="h444">Job Type</h4>
              <p>
                Write after completing your project what you are going to offer
              </p>
              <button
                style={buttonJobStyle}
                onClick={(e) => handleClickJobButton(e)}
                className="log-out-btn subscribe job"
              >
                JOB
              </button>
              <button
                style={buttonInternStyle}
                onClick={(e) => handleClickInternButton(e)}
                className="log-out-btn subscribe job"
              >
                INTERNSHIP
              </button>
            </label>

            <label htmlFor="ask-ques-tags">
              <h4 className="h444">Skills</h4>
              <p>
                Add up to 5 skills that is needed for this project by giving
                single space
              </p>
              <input
                type="text"
                id="ask-ques-tags"
                placeholder="e.g. ( HTML css javascript )"
                autoComplete="off"
                onChange={(e) => {
                  setProjectTags(e.target.value.split(" "));
                }}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Post your project"
            className="Review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default Postproject;
