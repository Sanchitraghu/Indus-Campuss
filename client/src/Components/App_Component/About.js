import React from "react";
import Navbar from "../Navbar_default/Navbar";
import firstImg from "../../assets/team.png";
import sanchitImg from "../../assets/Team/img1.jpg";
import swapnilImg from "../../assets/Team/img2.jpg";
import shobhitImg from "../../assets/Team/img3.png";
import sahilImg from "../../assets/Team/img4.JPG";
import Footer from "../Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <img className="first-img" src={firstImg} alt="first-img" />
      <h1 className="about-h1">OUR STORY</h1>
      <p className="about-p">
        Back in February 2023, Dr. Divya Rishi Sahu, one of our professors,
        spoke with a small group of us during a general discussion about how
        companies struggle to find cost-effective solutions to their problems,
        while many students struggle to find opportunities to apply their skills
        and gain practical experience.
        <br />
        A few days later, after some brainstorming, we came up with the idea of
        creating a platform to bridge these two worlds that benefits both
        students and companies.
        <br />
        We pitched the idea to the professor, who was enthusiastic about it, and
        we requested him to be our mentor. Under his supervision, we spent
        several weeks refining the idea and developing our website, and finally
        launched IndusCampus.
      </p>

      <div className="team">
        <img className="team-img" src={sanchitImg} alt="sanchit" />
        <div className="teammate">
          <h1 className="hu">SANCHIT RAGHUWANSHI (Full Stack Developer)</h1>
          <p className="about-p team-p">
            He is an experienced web developer who has a comprehensive
            understanding of both front-end and back-end development of websites
            and is skilled in using technologies like HTML, CSS, JavaScript,
            React ,Nodejs, MongoDB, etc.
          </p>
        </div>
      </div>

      <div className="team">
        <div className="teammate">
          <h1 className="hu">SWAPNIL PAWAR (Frontend Developer)</h1>
          <p className="about-p team-p">
            He is a skilled front-end developer & web content writer who combines creativity,
            technological know-how, and strategic thinking in a unique way. Has
            as a good understanding of how to create engaging and persuasive
            content that appeals to the target audience.
          </p>
        </div>
        <img className="team-img" src={swapnilImg} alt="swapnil" />
      </div>

      <div className="team">
        <img className="team-img" src={shobhitImg} alt="shobhit" />
        <div className="teammate">
          <h1 className="hu">SHOBHIT RAGHUWANSHI (UI/UX Designer)</h1>
          <p className="about-p team-p">
          He is a talented UI/UX designer, significantly contributed to the project by creating intuitive and engaging user interfaces.He skillfully combined user research, wireframes, and visual design to enhance user experience, ensuring seamless navigation and aesthetic appeal. Their expertise made the product both user-friendly and visually compelling.  
          </p>
        </div>
      </div>


      <div className="team">
        <div className="teammate">
          <h1 className="hu">SAHIL KHEDA (UI/UX Designer)</h1>
          <p className="about-p team-p">
          As a skilled UI/UX designer, He played a crucial role in the project's success. They focused on user research, crafted wireframes, and designed visually appealing interfaces, which improved the overall user experience. Their work ensured that the product was intuitive, easy to navigate, and aesthetically pleasing.
          </p>
        </div>
        <img className="team-img" src={sahilImg} alt="sahil" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
