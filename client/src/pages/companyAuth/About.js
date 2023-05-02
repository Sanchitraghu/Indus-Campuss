import React from 'react'
import image from "../../assets/login.png"
import "../companyAuth/CompanyAuth.css"

const About = () => {
  return (
    <div>
         <h1 className='h22'>
              Welcome To Our Community
           </h1>
           <p className='p22'>
              A Whole New Productive Journey Starts Here
           </p>
           <img className='img-login' src={image} alt="img" />
    </div>
  )
}

export default About
