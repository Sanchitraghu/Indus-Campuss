import React from "react";
import { Link } from "react-router-dom";
import "./HomeMainBar.css";
import moment from "moment";

const PostedProject = ({ project }) => {
  return (
    <div className="display-question-container">
      {/* <div className="display-votes-ans">
        <p>{project.jobType}</p>
        <p>Benefit</p>
      </div> */}
      <div className="display-question-details" style={{rowGap:"50px"}}>
        <Link to={`/project/${project._id}`} className="question-title-link">
          {project.projectTitle}
        </Link>
        <div className="display-tags-time" style={{padding:"15px 0px"}}>
          <div className="display-tags" style={{ width : "50%",display:"flex", flexDirection:"row",flexWrap:"wrap", rowGap:"10px"}}>
            {project.projectTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">
            Posted on {moment(project.postedOn).format("MMMM D YYYY")} - By{" "}
            <strong>{project.userPosted}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostedProject;
