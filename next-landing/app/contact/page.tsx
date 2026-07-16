"use client";

import { useTranslation } from "react-i18next";
import Contact from "@/components/Contact";

export default function ContattiContent() {
  const { t } = useTranslation();

  return (
    <section className="servizi-section container py-5">
      <h1 className="servizi-title">
        {t("contatti.pageTitle", "Contatti")}
      </h1>
      <p className="servizi-intro">
        {t(
          "contatti.pageSubtitle",
          "Parliamo del tuo progetto: rispondo di solito entro 24 ore.",
        )}
      </p>

      <div className="servizi-list">
<div className="single_service layout-right no-hover contatti_full_card">
  <div className="sercive_content contatti_content_row">
    <div className="contatti_block">
      <h2>{t("contatti.locationTitle", "Dove sono")}</h2>
      <p>
        {t(
          "contatti.locationText",
          "Sono basato a Verona, ma lavoro abitualmente da remoto con clienti in tutta Italia e all'estero.",
        )}
      </p>
    </div>

    <div className="contatti_block">
      <h2>{t("contatti.remoteTitle", "Come lavoro")}</h2>
      <p>
        {t(
          "contatti.remoteText",
          "Collaboro sia in presenza che a distanza, adattandomi alle esigenze del progetto. Uso strumenti di comunicazione asincrona e call periodiche per mantenere tutto allineato senza sprecare tempo.",
        )}
      </p>
    </div>

    <div className="contatti_block">
      <h2>{t("contatti.availabilityTitle", "Disponibilità")}</h2>
      <p>
        {t(
          "contatti.availabilityText",
          "Attualmente disponibile per nuovi progetti freelance, consulenze tecniche e collaborazioni continuative.",
        )}
      </p>
    </div>
  </div>
</div>
      </div>

      <div className="contatti_form_wrapper mt-5">
        <Contact />
      </div>
    </section>
  );
}