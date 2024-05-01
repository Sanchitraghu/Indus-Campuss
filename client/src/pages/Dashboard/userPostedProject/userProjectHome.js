import React, { useEffect, useState } from "react";
import UserPostedProject from "./userPostedProject";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, getUserProjects } from "../../../api/project";
import RequestedProject from "../RequestedProjects/RequestedProject";
import CollegeRequestedProject from "../CollegeRequestedProject/CollegeRequestedProject";

const UserProject = () => {
  const User = useSelector((state) => state.authReducer);
  const projectList = useSelector((state) => state.userprojectReducer);
  const dispatch = useDispatch();
  const _id = User.data.result._id;
  const loginAs = User.data.result.loginAs;
  useEffect(() => {
    if (loginAs === "College") {
      getAllProjects((err, res) => {
        if (err) return;
        const collegeProject = res?.data
          ?.map((project) => {
            return project?.companyRequestedProject;
          })
          ?.map((item) => {
            return item?.filter((reqestedProject) => {
              return reqestedProject.universityId === _id;
            });
          });
        const collegeRequestedProject = collegeProject.flat(Infinity);
        dispatch({
          type: "USER_POSTED_PROJECT",
          payload: collegeRequestedProject,
        });
      });
    } else {
      getUserProjects(_id, (err, res) => {
        if (err) return;
        dispatch({ type: "USER_POSTED_PROJECT", payload: res.data });
      });
    }
  }, []);

  useEffect(() => {
    if (loginAs === "College") {
      getAllProjects((err, res) => {
        if (err) return;
        const collegeProject = res?.data
          ?.map((project) => {
            return project?.companyRequestedProject;
          })
          ?.map((item) => {
            return item?.filter((reqestedProject) => {
              return reqestedProject.universityId === _id;
            });
          });
        const collegeRequestedProject = collegeProject.flat(Infinity);
        dispatch({
          type: "USER_POSTED_PROJECT",
          payload: collegeRequestedProject,
        });
      });
    }
  }, []);

  return (
    <div>
      <div className="main-bar userPotedProject">
        <div>
          {projectList?.data === null ? (
            <h1 style={{ color: "#58D5DA" }}>Loading...</h1>
          ) : (
            <>
              {loginAs !== "College" && (
                <>
                  <div className="dashDescription">
                    <h2>
                      {loginAs === "College" ? "Requested" : "Posted"} Projects
                      :
                    </h2>
                  </div>
                  <p>{projectList?.data?.length} Projects</p>
                  {projectList?.data?.map((project) => (
                    <UserPostedProject key={project._id} project={project} />
                  ))}
                </>
              )}
              <>
                <div className="dashDescription">
                  <h2 className="fs-2 mb-4">Requested Projects :</h2>
                </div>
                {loginAs === "College"
                  ? projectList?.data?.map((data) => {
                      return <CollegeRequestedProject {...data} />;
                    })
                  : projectList?.data
                      ?.map((project) => {
                        return project.companyRequestedProject;
                      })
                      ?.map((item) => {
                        return item?.map((reqestedProject) => {
                          return <RequestedProject {...reqestedProject} />;
                        });
                      })}
              </>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProject;
