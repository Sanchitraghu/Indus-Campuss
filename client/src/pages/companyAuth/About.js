import React from 'react'
import image from "../../assets/login.png"
import "../companyAuth/CompanyAuth.css"

const About = () => {
  return (
    <div style={{margin:'auto', justifyContent: 'center'}}>
         <h2 className='h22'>
              Welcome To Our Community
           </h2>
           <p className='p22'>
              A Whole New Productive Journey Starts Here
           </p>
           <div className='img-login-container'>
           <img   src={image} alt="img" />
           </div>
           
    </div>
  )
}

export default About
