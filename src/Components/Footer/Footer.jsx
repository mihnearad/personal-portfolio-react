import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/MRLogo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2024 Rad Limited. All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Legal</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
