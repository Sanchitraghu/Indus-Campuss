import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import deleteImg from "../../../assets/delete.png";
import {
  deleteProject,
  getAllProjects,
  getUserProjects,
} from "../../../api/project";
import { useDispatch, useSelector } from "react-redux";
import "./userProject.css";

const UserPostedProject = ({ project }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.authReducer);
  const [showModal, setModal] = useState(false);
  const _id = User?.data?.result?._id;

  const Modal = () => {
    return (
      <>
        <div className="Modal">
          <h2>Delete Project</h2>
          <p>Are you sure to delete {project.projectTitle} project?</p>
          <button className="confirm-delete" onClick={(e) => handleDelete(e)}>
            Confirm
          </button>
          <button className="log-out-btn" onClick={() => setModal(false)}>
            Cancle
          </button>
        </div>
      </>
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteProject(project._id, (err, res) => {
      if (err) return;
      getAllProjects((err, res) => {
        if (err) return console.log(err);
        dispatch({ type: "FETCH_ALL_PROJECTS", payload: res.data });
      });
      getUserProjects(_id, (err, res) => {
        if (err) return;
        dispatch({ type: "USER_POSTED_PROJECT", payload: res.data });
      });
    });
  };
  return (
    <div className="display-question-container userProject" style={{display :"flex",flexDirection:"column"}}>
      <div className="display-question-details">
        <Link to={`/project/${project._id}`} className="question-title-link">
          {project.projectTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {project?.projectTags?.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <div>
            <img
              className="deleteImg"
              style={{ width: "90px", paddingLeft: "55px", marginBottom:"10px" }}
              src={deleteImg}
              alt="Delete"
              onClick={() => setModal(true)}
            />
            <p className="display-time">
              Posted on {moment(project.postedOn).format("MMMM D YYYY")}
            </p>
          </div>
        </div>
        {showModal && <Modal />}
      </div>
      <div className="display-votes-ans" style={{width:"100%"}}>
        <p style={{display:"inline",paddingLeft:"5px", marginBottom : "10px"}}>{project.jobType}</p>
        <p style={{display:"inline", marginBottom : "10px"}}>  Benefit</p>
      </div>
    </div>
  );
};

export default UserPostedProject;
