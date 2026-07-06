"use client";

import { useTranslation } from "react-i18next";
import { trackEvent } from "@/utils/gaEvents";
import {
  Rocket,
  CreditCard,
  Code2,
  Wrench,
  Smartphone,
  Cpu,
  Bot,
  Settings2,
  Network,
  Users,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

type Servizio = {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  featuresKey: string;
  link?: string;
};

const servizi: Servizio[] = [
  {
    id: "seo-landing",
    icon: Rocket,
    titleKey: "servizi.seoLanding.title",
    descKey: "servizi.seoLanding.desc",
    featuresKey: "servizi.seoLanding.features",
    link: "#contact",
  },
  {
    id: "payments",
    icon: CreditCard,
    titleKey: "servizi.payments.title",
    descKey: "servizi.payments.desc",
    featuresKey: "servizi.payments.features",
    link: "#contact",
  },
  {
    id: "fullstack",
    icon: Code2,
    titleKey: "servizi.fullstack.title",
    descKey: "servizi.fullstack.desc",
    featuresKey: "servizi.fullstack.features",
    link: "#contact",
  },
  {
    id: "gestionali",
    icon: Wrench,
    titleKey: "servizi.gestionali.title",
    descKey: "servizi.gestionali.desc",
    featuresKey: "servizi.gestionali.features",
    link: "#contact",
  },
  {
    id: "app-native",
    icon: Smartphone,
    titleKey: "servizi.appNative.title",
    descKey: "servizi.appNative.desc",
    featuresKey: "servizi.appNative.features",
    link: "#contact",
  },
  {
    id: "ble-iot",
    icon: Cpu,
    titleKey: "servizi.bleIot.title",
    descKey: "servizi.bleIot.desc",
    featuresKey: "servizi.bleIot.features",
    link: "#contact",
  },
  {
    id: "ai-integration",
    icon: Bot,
    titleKey: "servizi.aiIntegration.title",
    descKey: "servizi.aiIntegration.desc",
    featuresKey: "servizi.aiIntegration.features",
    link: "#contact",
  },
  {
    id: "manutenzione",
    icon: Settings2,
    titleKey: "servizi.manutenzione.title",
    descKey: "servizi.manutenzione.desc",
    featuresKey: "servizi.manutenzione.features",
    link: "#contact",
  },
  {
    id: "cto",
    icon: Network,
    titleKey: "servizi.cto.title",
    descKey: "servizi.cto.desc",
    featuresKey: "servizi.cto.features",
    link: "#contact",
  },
  {
    id: "tech-lead",
    icon: Users,
    titleKey: "servizi.techLead.title",
    descKey: "servizi.techLead.desc",
    featuresKey: "servizi.techLead.features",
    link: "#contact",
  },
  {
    id: "declouding",
    icon: GraduationCap,
    titleKey: "servizi.decloud.title",
    descKey: "servizi.decloud.desc",
    featuresKey: "servizi.decloud.features",
    link: "#contact",
  },
  {
    id: "formazione",
    icon: GraduationCap,
    titleKey: "servizi.formazione.title",
    descKey: "servizi.formazione.desc",
    featuresKey: "servizi.formazione.features",
    link: "#contact",
  },
];

export default function ServiziContent() {
  const { t } = useTranslation();
  const discoverLabel = t("servizi.discoverMore", "Parliamone");

  return (
    <section className="servizi-section container py-5">
      <h1 className="servizi-title">
        {t("servizi.pageTitle", "I miei servizi")}
      </h1>
      <p className="servizi-intro">
        {t(
          "servizi.pageIntro",
          "Trasformo esigenze concrete in soluzioni digitali funzionanti.",
        )}
      </p>

      <div className="servizi-list">
        {servizi.map((s, idx) => {
          const Icon = s.icon;
          const features = t(s.featuresKey, {
            returnObjects: true,
            defaultValue: [],
          }) as string[];

          return (
            <a
              href="#contact"
              className={`single_service ${idx % 2 === 0 ? "layout-right" : "layout-left"}`}
              key={s.id}
              onClick={() =>
                trackEvent({
                  category: "servizi_click",
                  action: "",
                  label: s.id,
                })
              }
            >
              <div className="service_icon">
                <Icon strokeWidth={1.5} />
              </div>
              <div className="sercive_content">
                <h2>{t(s.titleKey)}</h2>
                <p>{t(s.descKey)}</p>
                {Array.isArray(features) && features.length > 0 && (
                  <ul>
                    {features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
