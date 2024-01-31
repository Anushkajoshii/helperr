import React from "react";
import "./Footer.scss";

const Footer=()=>{
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>HouseKeeping</span>
            <span>Plumber</span>
            <span>BabySitter</span>
            <span> Driver</span>
            <span>Watchman</span>
            <span>House Help</span>
            <span>Carpenter</span>
            <span>Electrician</span>
          </div>
          
          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Partnership</span>
            <span>Privacy Policy</span>
            <span> Terms of Service</span>
            <span>Intellectual Property Claims</span>
           
          </div>
          <div className="item">
            <h2>Support and Education</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Working on Helperr</span>
            <span> Hiring on Helperr</span>
            <span>Helperr Guides</span>
            <span>Helperr Workspace</span>
            <span>Learn</span>
            
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Events</span>
            <span> Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Become a Helping Hand</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>Helperr Business</h2>
            <span>Grow your business</span>
            <span>Business Analyst</span>
            <span>Programming & Tech</span>
            <span> Video and Animation</span>
            <span>Digital Marketing</span>
            <span>Enterprise</span>
            <span>Designing</span>
            <span>Lifestyle</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>helperr</h2>
            <span>© Helperr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="img/facebook.png" alt="" />
              <img src="img/linkedin.png" alt="" />
              <img src="img/pinterest.png" alt="" />
              <img src="img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="./img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="./img/coin.png" alt="" />
              <span>INR</span>
            </div>
            <img src="./img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
