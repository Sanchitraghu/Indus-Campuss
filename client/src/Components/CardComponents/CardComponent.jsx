import React from "react";
import { Link } from "react-router-dom";
import './CardComponent.css'

const CardComponent = ({ profileImg, heading, paragraph,setUserType }) => {
  return (
    <Link className="profile-card" style={{textDecoration :" none"}} onClick={() => setUserType(heading)}>
      <div>
        <div className="profile-card-img">
        <img  src={profileImg} 
        style={{
          width :"100%",
          height :"100%",
          objectFit :"fill"
        }} alt="profile-img" />
        </div>
        <h2 className="card-heading1">{heading}</h2>
        <p className="p-card1" style ={{
    paddingLeft :"30px",
    textAlign  : "centre",
    width : "100%"
}}>{paragraph}</p>
      </div>
    </Link>
  );
};

export default CardComponent;
