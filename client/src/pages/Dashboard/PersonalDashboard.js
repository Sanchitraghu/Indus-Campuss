import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { markupText } from "../../utils";
import UserProject from "./userPostedProject/userProjectHome";

const PersonalDashboard = () => {
  // useSelector Hook se mill jayega sb

  const { data } = useSelector((state) => state.authReducer);

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/editdiscription");
  };

  return (
    <div className="main-bar">
      {data === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="user-details">
            <h4>
              Company Name : <p>{data?.result?.name}</p>
            </h4>
            <h4>
              Company Email : <p>{data?.result?.email}</p>
            </h4>
          </div>
          <div className="dashDescription">
            <div className="desedit">
              <h2>Company Description :</h2>
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
