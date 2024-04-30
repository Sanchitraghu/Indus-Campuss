import React from "react";
import { approveOrRejectRequestedProject } from "../../../api/project";
import Accepted from "../../../assets/dashboard images/Accepted_Request.png";
import Rejected from "../../../assets/dashboard images/Rejected_Request.png"
import { useNavigate } from "react-router-dom";

const RequestedProject = (props) => {
   const navigate = useNavigate()
  function handleClick(e) {
    let btn = e.target.innerText;
    let obj = {
      id: props.pId,
      universityId: props.universityId,
      updatedProjectId : props._id
    };
    if (btn === "Approve") {
      obj.state = "Accepted";
      approveOrRejectRequestedProject(obj, (err, res) => {
        if (err) {
          alert("Not Able to Approve Request");
          return;
        }
        alert("Request of "+props.universityEmail+" is Approved");
        navigate("/explore")
      });
    } else if (btn === "Reject") {
      obj.state = "Rejected";
      approveOrRejectRequestedProject(obj, (err, res) => {
        if (err) {
          alert("Not Able to Reject Request");
          return;
        }

        alert("Request of "+props.universityEmail+" is Rejected");
        navigate("/explore")
      });
    }
  }

  return (
    <div className="my-4">
      <p className=" fs-4">
        <span className="text-info">Requested Project Name :</span>{" "}
        {props.projectName}
      </p>
  {props.render}
      <p className=" fs-4">
        <span className="text-info">Requested By : </span>
        {props.universityEmail}
      </p>
      {props.state === "pending" ? (
        <div className="d-flex gap-5" onClick={handleClick}>
          <button className="btn text-center">Approve</button>
          <button className="btn text-center">Reject</button>
        </div>
      ) : (
       <img style={{width:"260px"}} src={props.state ==="Accepted" ? Accepted : Rejected} alt="accepeted" />
      )}
      <br />
    </div>
  );
};

export default RequestedProject;
