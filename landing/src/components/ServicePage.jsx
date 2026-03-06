import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true });
  const service = services.find((s) => s.link === `/servizi/${serviceId}`);

  if (!service) return <p className="service-page-not-found">Servizio non trovato</p>;

  return (
    <div className="service_page_area">
      <div className="container">
        <div className="service-page-top-nav">
          <Link to="/" className="work-with-me-back" aria-label="Back to home">
            <span className="work-with-me-back-arrow">←</span>
            <span>{t("menu.home")}</span>
          </Link>
        </div>

        <div className="service-page-shell">
          <div className="service-page-header">
            <p className="work-section-eyebrow">{t("menu.services")}</p>
            <h1>{service.title}</h1>
            <p className="service-page-lead">{service.description}</p>
          </div>

          {service.details && (
            <div
              className="service_details"
              dangerouslySetInnerHTML={{ __html: service.details }}
            />
          )}

          <div className="service_cta_buttons">
            <a
              href="https://app.simplymeet.me/emiliogambone"
              target="_blank"
              rel="noopener noreferrer"
              className="service-cta-button service-cta-primary"
            >
              {t("workWithMe.contactCTA.callButton")}
            </a>

            <a
              href="mailto:emilio.gambone@gmail.com"
              className="service-cta-button service-cta-ghost"
            >
              {t("workWithMe.contactCTA.emailButton")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
