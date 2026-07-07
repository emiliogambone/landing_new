"use client";
import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
                <a 
                  href={`tel:${t("contact.phone.value")}`} 
                  className="contact-card-link"
                >
                  <div className="plases_icon">
                    <Phone className="contact-icon" size={28} />
                  </div>

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
                <a 
                  href={`mailto:${t("contact.email.value")}`} 
                  className="contact-card-link"
                >
                  <div className="plases_icon">
                    <Mail className="contact-icon" size={28} />
                  </div>

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
                <a
                  href="https://wa.me/393493554864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link"
                >
                  <div className="plases_icon">
                    <FaWhatsapp className="contact-icon" size={28} />
                  </div>

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