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
  link?: string;
};

const servizi: Servizio[] = [
  {
    id: "seo-landing",
    icon: Rocket,
    titleKey: "servizi.seoLanding.title",
    descKey: "servizi.seoLanding.desc",
    link: "#contact",
  },
  {
    id: "payments",
    icon: CreditCard,
    titleKey: "servizi.payments.title",
    descKey: "servizi.payments.desc",
    link: "#contact",
  },
  {
    id: "fullstack",
    icon: Code2,
    titleKey: "servizi.fullstack.title",
    descKey: "servizi.fullstack.desc",
    link: "#contact",
  },
  {
    id: "gestionali",
    icon: Wrench,
    titleKey: "servizi.gestionali.title",
    descKey: "servizi.gestionali.desc",
    link: "#contact",
  },
  {
    id: "app-native",
    icon: Smartphone,
    titleKey: "servizi.appNative.title",
    descKey: "servizi.appNative.desc",
    link: "#contact",
  },
  {
    id: "ble-iot",
    icon: Cpu,
    titleKey: "servizi.bleIot.title",
    descKey: "servizi.bleIot.desc",
    link: "#contact",
  },
  {
    id: "ai-integration",
    icon: Bot,
    titleKey: "servizi.aiIntegration.title",
    descKey: "servizi.aiIntegration.desc",
    link: "#contact",
  },
  {
    id: "manutenzione",
    icon: Settings2,
    titleKey: "servizi.manutenzione.title",
    descKey: "servizi.manutenzione.desc",
    link: "#contact",
  },
  {
    id: "cto",
    icon: Network,
    titleKey: "servizi.cto.title",
    descKey: "servizi.cto.desc",
    link: "#contact",
  },
  {
    id: "tech-lead",
    icon: Users,
    titleKey: "servizi.techLead.title",
    descKey: "servizi.techLead.desc",
    link: "#contact",
  },
  {
    id: "declouding",
    icon: GraduationCap,
    titleKey: "servizi.decloud.title",
    descKey: "servizi.decloud.desc",
    link: "#contact",
  },
  {
    id: "formazione",
    icon: GraduationCap,
    titleKey: "servizi.formazione.title",
    descKey: "servizi.formazione.desc",
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
          return (
            <a
              href="#contact"
              className={`single_service ${idx % 2 === 0 ? "layout-right" : "layout-left"}`}
              key={s.id}
            >
              <div className="service_icon">
                <Icon strokeWidth={1.5} />
              </div>
              <div className="sercive_content">
                <h2>{t(s.titleKey)}</h2>
                <p>{t(s.descKey)}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
