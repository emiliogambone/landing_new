import React from "react";
import { useTranslation } from "react-i18next";

const ContactArea = () => {
  const { t } = useTranslation();

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
                <a href={`tel:${t("contact.phone.value")}`}>
                  <div className="plases_text">
                    <h2>{t("contact.phone.title")}</h2>
                    <p>{t("contact.phone.value")}</p>
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
                <a href={`mailto:${t("contact.email.value")}`}>
                  <div className="plases_text">
                    <h2>{t("contact.email.title")}</h2>
                    <p>{t("contact.email.value")}</p>
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
                <a
                  href={`https://wa.me/393493554864`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="plases_text">
                    <h2>{t("contact.whatsapp.title")}</h2>
                    <p>{t("contact.whatsapp.value")}</p>
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
