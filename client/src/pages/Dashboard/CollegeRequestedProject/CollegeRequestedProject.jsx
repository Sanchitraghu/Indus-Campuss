import React from 'react'
import Accepted from "../../../assets/dashboard images/Accepted_Request.png";
import Rejected from "../../../assets/dashboard images/Rejected_Request.png"
import Pending from "../../../assets/dashboard images/Pending.png";

const CollegeRequestedProject = (props) => {
    console.log(props)
    return (
      <div className="my-4">
        <p className=" fs-4">
          <span className="text-info">Requested Project Name :</span>
          {props.projectName}
        </p>
    {props.render}
        <p className=" fs-4">
          <span className="text-info">Requested By : </span>
          {props.universityEmail}
        </p>
        {props.state === "pending" ? (
          <div>
              <img style={{width:"260px"}} src={Pending} alt="pending" />
          </div>
        ) : (
         <img style={{width:"260px"}} src={props.state ==="Accepted" ? Accepted : Rejected} alt="accepeted" />
        )}
        <br />
      </div>
    );
}

export default CollegeRequestedProject
