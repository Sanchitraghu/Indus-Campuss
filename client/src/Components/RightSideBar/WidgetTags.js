import React from 'react'
import "./RightSideBar.css"
import pen from "../../assets/Icons/question.svg"
import message from "../../assets/Icons/answer.svg"

const WidgetTags = () => {
    return (
        <div className='widget'>
    
        <h4>Job Opportunity</h4>
    
        <div className='right-sideBar-div-1'>
    
            <div className='right-sideBar-div-2'>
                <img src={pen} alt="pen" className='img-width'/>
                <p>Can companies post internship opportunities on IndusCampus?</p>
            </div>
    
            <div className='right-sideBar-div-2'>
                <img src={message} alt="pen" className='img-width'/>
                <p>Yes, companies can post internship opportunities on IndusCampus. These can be a great way for students to gain valuable work experience and build their skills.</p>
            </div>
    </div>
    
    
         <h4>Security</h4>
    
    <div className='right-sideBar-div-1'>
    
            <div className='right-sideBar-div-2'>
                <img src={pen} alt="message" className='img-width'/>
                <p>Is my personal information secure on IndusCampus?</p>
            </div>
    
            <div className='right-sideBar-div-2'>
                <img src={message} alt="message" className='img-width'/>
                <p> Yes, IndusCampus takes the privacy and security of user data very seriously and employs a range of measures to protect user information from unauthorized access or disclosure.</p>
            </div>
    
        </div>
    
         <h4>Build Connections</h4>
    
    <div className='right-sideBar-div-1'>
    
            <div className='right-sideBar-div-2'>
            <img src={pen} alt="message" className='img-width'/>
                <p>Can students connect with professionals on IndusCampus?</p>
            </div>
    
            <div className='right-sideBar-div-2'>
            <img src={message} alt="message" className='img-width'/>
                <p>Yes, students can connect with professionals on IndusCampus through the networking features. </p>
            </div>
    
        </div>
    
        </div>
      )
}

export default WidgetTags
