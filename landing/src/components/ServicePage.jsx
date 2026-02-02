import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true });
  const service = services.find((s) => s.link === `/servizi/${serviceId}`);

  if (!service)
    return (
      <p style={{ color: "#ffffff", textAlign: "left" }}>
        Servizio non trovato
      </p>
    );

  return (
    <div
      className="service_page_area"
      style={{
        padding: "80px 20px",
        backgroundColor: "#073B42",
        color: "#ffffff",
        minHeight: "100vh", // make sure background covers whole viewport
        textAlign: "left",
      }}
    >
      <div className="container">
        {/* Title */}
        <h1>{service.title}</h1>

        {/* Details rendered as HTML */}
        {service.details && (
          <div
            className="service_details"
            style={{
              padding: "20px",
              borderRadius: "8px",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{ __html: service.details }}
          />
        )}

        {/* Back link */}
        <div
          className="service_cta_buttons"
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Call button */}
          <a
            href="https://app.simplymeet.me/emiliogambone"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#f97316",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff7a33")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#f97316")
            }
          >
            Parliamo dei tuoi progetti
          </a>

          {/* Email button */}
          <a
            href="mailto:emilio.gambone@gmail.com"
            style={{
              backgroundColor: "#f97316",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff7a33")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#f97316")
            }
          >
            Inviami un'email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
