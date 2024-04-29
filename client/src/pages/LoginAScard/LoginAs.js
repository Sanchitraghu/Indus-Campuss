import React, { useState } from "react";
import CardComponent from "../../Components/CardComponents/CardComponent";
import College from "../../assets/LogincardImg/collegeLogo.png";
import Student from "../../assets/LogincardImg/studentLogo.png";
import Company from "../../assets/LogincardImg/companyLogo.png";
import Navbar from "../../Components/Navbar_default/Navbar";
import "../../Components/CardComponents/CardComponent.css"

const LoginAs = ({setUser}) => {
  let cardsDetails = [
    {
      profileImg: Student,
      heading: "Student",
      paragraph: "Click here if you are a student",
    },
    {
      profileImg: College,
      heading: "College",
      paragraph: "Click here if you are a College/university admin",
    },
    {
      profileImg: Company,
      heading: "Company",
      paragraph: "Click here if you are a Company",
    },
  ];
  return (
    <>
    <Navbar />
    <div className="card--container">
      {cardsDetails.map((card) => {
        return <CardComponent key={card.heading} setUserType={setUser} {...card} />;
      })}
    </div>
      </>
  );
};
export default LoginAs;
