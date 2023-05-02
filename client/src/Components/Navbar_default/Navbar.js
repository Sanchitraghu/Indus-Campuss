import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("Profile"));
    if (!localData) return;
    dispatch({ type: "SET_USER_DATA", data: localData });
  }, []);

  let { data } = useSelector((state) => state.authReducer);

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/explore");
  };

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <Link className="nav-item nav-btn" to="/explore">
          Explore
        </Link>
        <Link className="nav-item nav-btn" to="/about">
          About Us
        </Link>
        <Link className="nav-item nav-btn" to="/howitworks">
          How It Works
        </Link>

        {!data || data === null ? (
          <Link className="nav-item nav-links company-btn" to="/companyauth">
            Join As Company
          </Link>
        ) : (
          <>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <Avatar
                character={data.result.name.charAt(0).toUpperCase()}
                py="5px"
                px="13px"
                backgroundColor="#58D5DA"
                radius="50%"
                marginLeft="250px"
                marginTop="5px"
                border="3px solid #58D5DA"
                color="#001D1E"
                fontsize="1rem"
                cursor="pointer"
              />
            </Link>
            <button onClick={handleLogOut} className="log-out-btn">
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
