import React, { useState } from "react";
import Navbar from "../../Components/Navbar_login/Navbar";
import About from "./About";
import { useDispatch } from "react-redux";
import "./CompanyAuth.css";
import { useNavigate } from "react-router-dom";
import { logIn, signUp } from "../../api/auth";

const CompanyAuth = () => {
  let [isSignUp, setSignUp] = useState(false);
  let [login, setLogin] = useState(true);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Enter Email and Password");

    if (isSignUp) {
      if (!name) return alert("Enter a Name to continue");
      let data = { name, email, password };
      signUp(data, (err, res) => {
        if (err) return alert(err?.response?.data?.message);
        dispatch({ type: "SET_USER_DATA", data: res.data });
        navigate("/explore");
      });
    } else {
      let data = { email, password };
      logIn(data, (err, res) => {
        if (err) return alert(err?.response?.data?.message);
        dispatch({ type: "SET_USER_DATA", data: res.data });
        navigate("/explore");
      });
    }
  };

  const handleClick = () => {
    if (!isSignUp) {
      setSignUp(!isSignUp);
      setLogin(!login);
    } else {
      setSignUp(!isSignUp);
      setLogin(!login);
    }
  };

  return (
    <div>
      <Navbar login={login} handleClick={handleClick} />
      <div className="container">
        <div className="left1">
          <About />
        </div>
        <div className="right1">
          <h2 className="login-heading">{login ? "LOG IN" : "SIGN UP"} HERE</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div>
                <label htmlFor="Display">
                  <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="FULL NAME"
                    autoComplete="off"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </label>
              </div>
            )}
            <div>
              <label htmlFor="email">
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                <input
                  className="input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="PASSWORD"
                  autoComplete="off"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </label>
              <p onClick={handleClick} className="dont p22">
                {login
                  ? "Don't have an account ?"
                  : "Already have an account ?"}
              </p>
            </div>
            <div>
              <button type="submit" className="btn">
                {login ? "Log In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyAuth;
