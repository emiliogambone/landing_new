"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { trackEvent } from "@/utils/gaEvents";

const Services = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const icons = [
    "fa-solid fa-briefcase",
    "fa-solid fa-magnifying-glass-chart",
    "fa-solid fa-list-check",
    "fa-solid fa-gears",
    "fa-solid fa-handshake",
    "fa-solid fa-chalkboard-user",
  ];

  const services = t("services.items", { returnObjects: true }) as any[];
  const discoverLabel = t("services.discoverMoreLabel");

  if (!Array.isArray(services)) return null;

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? services.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p === services.length - 1 ? 0 : p + 1));
  };

  const service = services[currentIndex];

  return (
    <div className="service_area" id="service">
      <div className="container text-center">
        <div className="section_title mb-5">
          <h1>
            <span className="title">{t("services.sectionTitle")}</span>
          </h1>
          <p>{t("services.sectionSubtitle")}</p>
        </div>

        <div className="single_service slider text-center mx-auto">
          <div className="service_icon">
            <i className={icons[currentIndex]}></i>
          </div>
          <div className="sercive_content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.link && (
              <a
                href={"/servizi"}
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
