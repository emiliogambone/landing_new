import React from 'react';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="copy-right-content">
              {/* FOOTER COPYRIGHT TEXT */}
              {/* <p>Copyright © msuzan all rights reserved.</p> */}
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="footer-menu">
              {/* FOOTER COPYRIGHT MENU */}
              <ul className="text-right">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Servizi</a></li>
                {/* <li><a href="#">Portfolio</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
