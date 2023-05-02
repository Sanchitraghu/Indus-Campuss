import React from 'react'
import Navbar from '../Navbar_default/Navbar'
import "./How_it_works.css"
import image from "../../assets/explore.png"
import createImg from "../../assets/create.png"
import profileImg from "../../assets/profile.png"
import collabImg from "../../assets/collab.png"
import searchImg from "../../assets/search.png"
import comImg1 from "../../assets/company/img1.png";
import comImg2 from "../../assets/company/img2.png";
import comImg3 from "../../assets/company/img3.png";
import comImg4 from "../../assets/company/img4.png";
import comImg5 from "../../assets/company/img5.png";
import comImg6 from "../../assets/company/img6.png";
import comImg7 from "../../assets/company/img7.png";
import Footer from "../Footer/Footer"
import { Link } from 'react-router-dom'

const How_it_Works = () => {

  const User = "sdfd";

  return (
    <div>
      <Navbar/>
    <img className='ex-img' src={image} alt="explore-img" />
    <h1 className='h111'>How To Start</h1>
    <div className="how-to-explore">
      <div className="card">
            <img className='card-img' src={createImg} alt="create" />
            <h2 className='card-heading'>Create Account</h2>
            <p className='p-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla quis repellendus!</p>
      </div>
      <div className="card">
      <img className='card-img' src={profileImg} alt="profile-img" />
            <h2 className='card-heading'>Complete Profile</h2>
            <p className='p-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla quis repellendus!</p>
      </div>
      <div className="card">
      <img className='card-img' src={searchImg} alt="search-img" />
            <h2 className='card-heading'>Find Each Other</h2>
            <p className='p-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla quis repellendus!</p>
      </div>
      <div className="card">
      <img className='card-img' src={collabImg} alt="collab" />
            <h2 className='card-heading'>Collaborate</h2>
            <p className='p-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla quis repellendus!</p>
      </div>
    </div>

    {
      User===null ?
    <div className='ex-join'>
    <Link className="nav-item link-join nav-links company-btn" to="/companyauth">Join Now</Link> 
    </div>
    :
    <></>
    }
    <h1 className='h111'>
    Companies Which Are Available On Our Platform
    </h1>
  
        <div className="exp-company-name">
              <div className="p1">
                <img className='company-img' src={comImg1} alt="img1" />
                <img className='company-sedan-img' src={comImg2} alt="img2" />
                <img className='company-sedan-img' src={comImg3} alt="img3" />
                <img className='company-sedan-img' src={comImg4} alt="img4" />
              </div>
              <div className="p1">
                <img className='company-sedan2-img company-mar1' src={comImg5} alt="img5" />
                <img className='company-sedan2-img' src={comImg6} alt="img6" />
                <img className='company-sedan2-img company-mar2' src={comImg7} alt="img7" />
              </div>
        </div>
  <Footer />
    </div>
  )
}

export default How_it_Works
