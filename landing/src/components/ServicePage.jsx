import React from "react";
import { useParams } from "react-router-dom";
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
        <div className="service-page-shell">
          <h1>{service.title}</h1>

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
