import React from 'react'
import Navbar from "../Navbar_default/Navbar";
import image from "../../assets/front.png";
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  const navigate = useNavigate();

  const navigatGetButton=()=>{
      navigate("/explore");
  }
  return (
    <div>
      <Navbar/>
      <div className="container-1">
          <div className="left">
              <h1>
              Find & Hire perfect solution for your project 
              </h1>
              <p>
              Join us today to be a part of the solution-driven community that drives innovation and growth. Transform your ideas into impactful solutions and kickstart your career with IndusCampus.
              </p>
              <button onClick={navigatGetButton} className='get-btn' >
                Get Started
              </button>
          </div>
          <div className="right">
                  <img className='image' src={image} alt="img" />
          </div>
      </div>
      
    </div>
  )
}

export default Home
