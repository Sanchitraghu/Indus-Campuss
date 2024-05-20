import React from 'react'
import Navbar from "../Navbar_default/Navbar";
import image from "../../assets/front.png";
import { useNavigate } from 'react-router-dom';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import "./Home.css"

const Home = () => {
  const navigate = useNavigate();

  const navigatGetButton=()=>{
      navigate("/auth");
  }

  const [text] = useTypewriter({
    words :['& Hire Perfect Solution for Your Project','Real-World Challenges Tailored to Your Skills'],
    loop : 0,
    // typeSpeed : 40,
    // deleteSpeed : 20,
    deplaySpeed : 2000,
  });

  return (
    <div>
      <Navbar/>
      <div className="container-1">
          <div className="left">
            <div style={{height:"40vh"}}>
              <h1>
              Find {' '}{text}
                <span>
                  <Cursor cursorColor='#fff' />
                </span>
              </h1>
            </div>
              
              <p>
              Join us today to be a part of the solution-driven community that drives innovation and growth. Transform your ideas into impactful solutions and kickstart your career with Indus Campus.
              </p>
              <button onClick={navigatGetButton} className='get-btn' style={{marginTop:"15px"}} >
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
