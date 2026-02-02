import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../utils/gaEvents"; // <-- import GA helper

const Services = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const icons = [
    "fa-briefcase",
    "fa-magnifying-glass-chart",
    "fa-list-check",
    "fa-gears",
    "fa-handshake",
    "fa-chalkboard-user",
  ];

  const services = t("services.items", { returnObjects: true });
  const discoverLabel = t("services.discoverMoreLabel");

  if (!Array.isArray(services)) return null;

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const service = services[currentIndex];

  return (
    <div className="service_area" id="service">
      <div className="container text-center">
        {/* Titolo servizi */}
        <div className="section_title mb-5">
          <h1>
            <span className="title">{t("services.sectionTitle")}</span>
          </h1>
          <p>{t("services.sectionSubtitle")}</p>
        </div>

        {/* Slider singolo servizio */}
        <div className="single_service slider text-center mx-auto">
          <div className="service_icon">
            <i className={`fa ${icons[currentIndex]}`}></i>
          </div>
          <div className="sercive_content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.link && (
              <a
                href={service.link}
                className="discover_more_btn"
                onClick={() => {
                  trackEvent({
                    category: "Services Slider",
                    action: "Click Discover More",
                    label: service.title,
                  });
                }}
              >
                {discoverLabel} →
              </a>
            )}
          </div>
        </div>

        {/* Controlli slider */}
        <div className="slider_controls mt-3">
          <button onClick={prev} className="slider_btn">
            ←
          </button>
          <button onClick={next} className="slider_btn">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
