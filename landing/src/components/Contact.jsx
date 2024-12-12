import React from 'react';

const ContactArea = () => {
  return (
    <div className="contact_area" id="contact">
      <div className="container">
        <div className="row">

          {/* Phone Section */}
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_plases">
              <div className="single_plases_inner">
                <div className="plases_icon">
                  <i className="fa fa-phone"></i>
                </div>
                <a href="tel:+393493554864">
                  <div className="plases_text">
                    <h2>Telefono</h2>
                    <p>+39 3493554864</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_plases">
              <div className="single_plases_inner">
                <div className="plases_icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <a href="mailto:emilio.gambone@gmail.com">
                  <div className="plases_text">
                    <h2>Email</h2>
                    <p>emilio.gambone@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Whatsapp Section */}
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_plases last">
              <div className="single_plases_inner">
                <div className="plases_icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <a href="https://wa.me/393493554864" target="_blank" rel="noopener noreferrer">
                  <div className="plases_text">
                    <h2>Whatsapp</h2>
                    <p>+39 3493554864</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactArea;
