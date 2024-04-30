import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { markupText } from "../../utils";
import UserProject from "./userPostedProject/userProjectHome";
import RequestedProject from "./RequestedProjects/RequestedProject";
import dashBgImg from "../../assets/dashboard images/dashboard-background-img.png";
import DBprofileIcon from "../../assets/dashboard images/DB-profile-icon.png"

const PersonalDashboard = () => {
  // useSelector Hook se mill jayega sb

  const { data } = useSelector((state) => state.authReducer);
  console.log(data)
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/editdiscription");
  };

  return (
    <div className="main-bar1" style={{width : "100%"}}>
      {data === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="user-details">
            <div className="Bb-img-container" style={{width : "100%",height : "180px", marginBottom :"80px" , position : "relative",backgroundColor:'#58D5DA',borderRadius : "20px"}}>
              <img src={dashBgImg} style={{width : "100%",height : "100%", objectFit : "cover",borderRadius: "20px", opacity:"0.6" }} alt="dashboard background image" />
              <div className="profileIcon" style={{width :"150px",height:"150px", position:"absolute", left :"3%",bottom:"-35%", border :"5px solid rgba(88,213,218)", borderRadius : "50%", background :"#001D1E", borderTop:"2px solid rgba(88, 213, 218, 1)", margin :"-4px", padding:"20px"}}>
                <img src ={DBprofileIcon} style={{width :"100%", height:"100%", objectFit:"contain"}} alt="DB-profile-logo"/>
              </div>
              <div className="Name-Email" style={{width:"80%",background :"rgba(0, 29, 30, 1)",boxShadow: "0 5px 15px #58D5DA", position:"absolute", left :"18%",right : "20%", bottom:"-23%", backdropFilter:"blur",borderRadius:'20px',}}>
                <p className="client-name" style={{margin :"5px 0px 1px 40px", fontSize:"20px"}}>
                {data?.result?.loginAs} Name : <span>{data?.result?.name}</span>
                </p>
                <p className="mail-address" style={{margin :"1px 0px 5px 40px",fontSize:"20px"}}>
                {data?.result?.loginAs} Email : <span>{data?.result?.email}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="dashDescription">
            <div className="desedit">
              <h2>{data?.result?.loginAs} Description :</h2>
              <button onClick={handleEditClick} className="Review-btn edit">
                Edit
              </button>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: markupText(data?.result?.Description, "\n", "br"),
              }}
            ></p>
          </div>
          <UserProject />
        </>
      )}
    </div>
  );
};

export default PersonalDashboard;
