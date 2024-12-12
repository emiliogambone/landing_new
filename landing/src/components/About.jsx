import React from 'react';

const About = () => {
  return (
    <div className="about_area" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="single_about_area">
              <div className="single_about_content">
                <div className="single_about_title">
                  <h3>Ciao,</h3>
                  <h2>Mi chiamo Emilio Gambone</h2>
                </div>
                <div className="single_about_content_text about-text">
                  <p>
                    Sono un IT engineer con una solida formazione accademica e professionale: laurea in Informatica, diploma tecnico in Informatica, e anni di esperienza nello sviluppo di soluzioni innovative. Offro servizi personalizzati per aziende e privati che desiderano realizzare progetti tecnologici all'avanguardia. Per collaborazioni o informazioni sui miei servizi, non esitare a contattarmi
                  </p>
                </div>
                <div className="single_about_btn">
                  <a className="active" href="#">Scarica CV</a>
                  <a href="mailto:emilio.gambone@gmail.com">Hire Me</a>
                </div>
              </div>
            </div>
          </div>
          {/* Uncomment and modify the following section if you want to include skills */}
          {/*
          <div className="col-md-6">
            <div className="about_title">
              <h2>My Skill</h2>
            </div>
            <div className="skill-wrapper left">
              <h5>Web Design</h5>
              <div className="progress">
                <div className="progress-bar" role="progressbar">
                  <span className="ttop">95%</span>
                </div>
              </div>
              <h5>Web Development</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemax="100"
                  style={{ width: '90%' }}
                >
                  <span className="ttop">90%</span>
                </div>
              </div>
              <h5>PHP & MySQL</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                >
                  <span className="ttop">85%</span>
                </div>
              </div>
              <h5>Marketing</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemax="100"
                  style={{ width: '80%' }}
                >
                  <span className="ttop">80%</span>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default About;
