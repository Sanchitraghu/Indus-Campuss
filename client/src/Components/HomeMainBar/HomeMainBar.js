import React from "react";
import PostProject from "./PostedProject";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainBar.css";
import { useSelector } from "react-redux";

const HomeMainBar = () => {
  const location = useLocation();
  const { data } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const projectList = useSelector((state) => state.projectReducer);
  const { data: User } = useSelector((state) => state.authReducer);
  const check = () => {
    if (data === null) {
      alert("First login and signup before posting project");
      navigate("/auth");
    } else {
      navigate("/postproject");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Projects</h1>
        ) : (
          <h1>All Projects</h1>
        )}
     {
    User?.result?.loginAs ==="Company" &&
     <button
          style={{ marginTop: "64px" }}
          onClick={check}
          className="Review-btn"
        >
          Post Project
        </button>
     }   
      </div>

      <div>
        {projectList.data === null ? (
          <h1 style={{ color: "#58D5DA" }}>Loading...</h1>
        ) : (
          <>
            <p>{projectList.data.length} Projects</p>
            {projectList.data.map((project) => (
              <PostProject key={project._id} project={project} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
