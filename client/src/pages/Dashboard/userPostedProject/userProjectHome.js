import React, { useEffect } from "react";
import UserPostedProject from "./userPostedProject";
import { useDispatch, useSelector } from "react-redux";
import { getUserProjects } from "../../../api/project";

const UserProject = () => {
  const User = useSelector((state) => state.authReducer);
  const projectList = useSelector((state) => state.userprojectReducer);
  const dispatch = useDispatch();
  const _id = User.data.result._id;

  useEffect(() => {
    getUserProjects(_id, (err, res) => {
      if (err) return;
      dispatch({ type: "USER_POSTED_PROJECT", payload: res.data });
    });
  }, []);

  return (
    <div>
      <div className="main-bar userPotedProject">
        <div>
          {projectList.data === null ? (
            <h1 style={{ color: "#58D5DA" }}>Loading...</h1>
          ) : (
            <>
              <div className="dashDescription">
                <h2>Your Projects :</h2>
              </div>
              <p>{projectList.data.length} Projects</p>
              {projectList.data.map((project) => (
                <UserPostedProject key={project._id} project={project} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProject;
