import React from "react";
import { Link } from "react-router-dom";
import twitterImg from "../../assets/Icons/img1.png";
import instagramImg from "../../assets/Icons/img2.png";
import facebookImg from "../../assets/Icons/img3.png";
import linkdinImg from "../../assets/Icons/img4.png";
import messageImg from "../../assets/Icons/img5.png";
import callImg from "../../assets/Icons/img6.png";
import logo from "../../assets/logo1.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <hr style={{ width: "95%", textAlign: "center", marginLeft: "45px" }} />
      <div className="footer-container">
        <div className="logo">
          <img
            style={{ width: "300px", marginTop: "-16px" }}
            src={logo}
            alt="logo"
          />
        </div>

        <div className="icons">
          <a
            href="https://twitter.com/CampusIndus?t=D3i4xzyvibpPAo5ZnauG9A&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icons" src={twitterImg} alt="twitterImg" />
          </a>

          <a
            href="https://www.instagram.com/indus_campus/?__coig_restricted=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-icons"
              src={instagramImg}
              alt="instagramImg"
            />
          </a>

          <a
            href="https://www.facebook.com/people/Indus-Campus/pfbid0MotMHYqv27euoA2BSDuFn9uh6yUfYSXyQVXoVtgTjsm3dySH6Yn2phxMzVuZKc8Tl/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icons" src={facebookImg} alt="facebookImg" />
          </a>

          <a
            href="https://www.linkedin.com/in/induscampus-9047b526b/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="footer-icons" src={linkdinImg} alt="linkdinImg" />
          </a>
        </div>

        <div className="details">
          <input className="email-subs" type="email" placeholder="Your Email" />
          <Link className="log-out-btn subscribe" to="/explore">
            Subscribe
          </Link>
          <div className="contact-footer">
            <img className="x" src={messageImg} alt="messageImg" />
            <p style={{ marginTop: "26px", marginRight: "100px" }}>
              IndusC@gmail.com
            </p>
          </div>
          <div className="contact-footer">
            <img className="x" src={callImg} alt="callImg" />
            <p style={{ marginTop: "26px", marginRight: "150px" }}>
              9302792544
            </p>
          </div>
        </div>
      </div>

      <hr style={{ width: "95%", textAlign: "center", marginLeft: "45px" }} />

      <h3 style={{ marginLeft: "970px", color: "#ffffff" }}>
        All rights are reserved @ Indus-Campus{" "}
        <span style={{ marginLeft: "30px" }} />
        privacy Policy
      </h3>
    </div>
  );
};

export default Footer;
