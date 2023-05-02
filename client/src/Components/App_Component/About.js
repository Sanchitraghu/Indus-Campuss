import React from "react";
import Navbar from "../Navbar_default/Navbar";
import firstImg from "../../assets/team.png";
import sanchitImg from "../../assets/Team/img1.jpg";
import swapnilImg from "../../assets/Team/img2.jpg";
import shobhitImg from "../../assets/Team/img3.png";
import sahilImg from "../../assets/Team/img4.JPG";
import sawiImg from "../../assets/Team/img5.jpg";
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
          <h1 className="hu">SANCHIT RAGHUWANSHI (Web Developer)</h1>
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
          <h1 className="hu">SAWI CHOUKIKAR (UI/UX Designer)</h1>
          <p className="about-p team-p">
            She is a skilled UI/UX designer who specializes in creating
            intuitive and engaging user interfaces for web and mobile
            applications and is proficient in using tools such as Sketch &
            Figma.
          </p>
        </div>
        <img className="team-img" src={sawiImg} alt="sawi" />
      </div>

      <div className="team">
        <img className="team-img" src={shobhitImg} alt="shobhit" />
        <div className="teammate">
          <h1 className="hu">SHOBHIT RAGHUWANSHI (Project Manager)</h1>
          <p className="about-p team-p">
            He is passionate about art and design and uses his expertise in user
            interface design, and user experience design to create websites that
            are user centric, visually appealing and easy to navigate.
          </p>
        </div>
      </div>

      <div className="team">
        <div className="teammate">
          <h1 className="hu">SWAPNIL PAWAR (Web Content Writer)</h1>
          <p className="about-p team-p">
            He is a skilled web content writer who combines creativity,
            technological know-how, and strategic thinking in a unique way. Has
            as a good understanding of how to create engaging and persuasive
            content that appeals to the target audience.
          </p>
        </div>
        <img className="team-img" src={swapnilImg} alt="swapnil" />
      </div>

      <div className="team">
        <img className="team-img" src={sahilImg} alt="sahil" />
        <div className="teammate">
          <h1 className="hu">SAHIL KHEDA (Social media manager)</h1>
          <p className="about-p team-p">
            He possesses a good understanding of the latest trends in social
            media platforms and algorithms and is committed to delivering
            high-quality content that reflects the personality and values of
            indusCampus.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
