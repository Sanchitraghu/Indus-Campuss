import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ profileImg, heading, paragraph,setUserType }) => {
  return (
    <Link onClick={() => setUserType(heading)}>
      <div className="">
        <img className="card-img" src={profileImg} alt="profile-img" />
        <h2 className="card-heading">{heading}</h2>
        <p className="p-card">{paragraph}</p>
      </div>
    </Link>
  );
};

export default CardComponent;
