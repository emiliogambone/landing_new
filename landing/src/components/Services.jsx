import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  // Icons stay here
  const icons = [
    "fa-briefcase",
    "fa-magnifying-glass-chart",
    "fa-list-check",
    "fa-gears",
    "fa-handshake",
    "fa-chalkboard-user",
  ];

  const services = t("services.items", { returnObjects: true });

  return (
    <div className="service_area" id="service">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section_title">
              <h1>
                <span className="title">{t("services.sectionTitle")}</span>
              </h1>
              <p>{t("services.sectionSubtitle")}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                <div className="single_service">
                  <div className="service_icon">
                    <i className={`fa ${icons[index]}`}></i>
                  </div>
                  <div className="sercive_content">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
