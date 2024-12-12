import React from 'react';
import logo from '../assets/images/Logo_bianco.png';

const Footer = () => {
  return (
    <div className="footer_area minimal">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="coppyright">
              <div className="footer_logo">
              <img src={logo} alt="msuzan" />
              </div>
              <div className="copy-right-text">
                {/* You can add footer text or comments here */}
                {/* <p> Lorem ipsum dolor sit amet, consectetur ahkl adipisicing elit... </p> */}
              </div>
              <div className="footer_social_icon">
                <a href="https://github.com/emiliogambone" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/emilio-gambone-41624458/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
