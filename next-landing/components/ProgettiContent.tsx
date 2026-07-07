"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Truck,
  Smartphone,
  Wrench,
  ChefHat,
  HeartHandshake,
  Building2,
  Sprout,
} from "lucide-react";

type Progetto = {
  id: string;
  icon: typeof Truck;
  sectorKey: string;
  titleKey: string;

  challengeTitleKey: string;
  challengeKey: string;

  roleTitleKey: string;
  roleKey: string;

  outcomeTitleKey: string;
  outcomeKey: string;

  featuresKey: string;
};

const progetti: Progetto[] = [
{
  id: "logistica",
  icon: Truck,
  sectorKey: "progetti.logistica.sector",
  titleKey: "progetti.logistica.title",

  challengeTitleKey: "progetti.logistica.challengeTitle",
  challengeKey: "progetti.logistica.challenge",

  roleTitleKey: "progetti.logistica.roleTitle",
  roleKey: "progetti.logistica.role",

  outcomeTitleKey: "progetti.logistica.outcomeTitle",
  outcomeKey: "progetti.logistica.outcome",

  featuresKey: "progetti.logistica.features",
},
  // {
  //   id: "app-native",
  //   icon: Smartphone,
  //   sectorKey: "progetti.appNative.sector",
  //   titleKey: "progetti.appNative.title",
  //   descKey: "progetti.appNative.desc",
  // },
  // {
  //   id: "gestionali",
  //   icon: Wrench,
  //   sectorKey: "progetti.gestionali.sector",
  //   titleKey: "progetti.gestionali.title",
  //   descKey: "progetti.gestionali.desc",
  // },
  // {
  //   id: "cucine",
  //   icon: ChefHat,
  //   sectorKey: "progetti.cucine.sector",
  //   titleKey: "progetti.cucine.title",
  //   descKey: "progetti.cucine.desc",
  // },
  // {
  //   id: "volontariato",
  //   icon: HeartHandshake,
  //   sectorKey: "progetti.volontariato.sector",
  //   titleKey: "progetti.volontariato.title",
  //   descKey: "progetti.volontariato.desc",
  // },
  // {
  //   id: "ricettiva",
  //   icon: Building2,
  //   sectorKey: "progetti.ricettiva.sector",
  //   titleKey: "progetti.ricettiva.title",
  //   descKey: "progetti.ricettiva.desc",
  // },
  // {
  //   id: "acquaponica",
  //   icon: Sprout,
  //   sectorKey: "progetti.acquaponica.sector",
  //   titleKey: "progetti.acquaponica.title",
  //   descKey: "progetti.acquaponica.desc",
  // },
];

export default function ProgettiContent() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="progetti-section container py-5">
      <h1 className="progetti-title">{t("progetti.pageTitle", "Progetti")}</h1>
      <p className="progetti-intro">
        {/* {t(
          "progetti.pageIntro",
          "Alcuni dei problemi reali che ho aiutato a risolvere, settore per settore.",
        )} */}
      </p>

      <div className="progetti-grid">
        {progetti.map((p) => {
          const Icon = p.icon;
          const isExpanded = expandedId === p.id;
          return (
<div className="progetto-card" key={p.id}>
  <div className="progetto-card-header">
    <Icon strokeWidth={1.5} />
    <span className="progetto-sector">{t(p.sectorKey)}</span>
  </div>

  <h2>{t(p.titleKey)}</h2>

  <div className="project-section">
    <h4>{t(p.challengeTitleKey)}</h4>
    <p>{t(p.challengeKey)}</p>
  </div>

  <div className="project-section">
    <h4>{t(p.roleTitleKey)}</h4>
    <p>{t(p.roleKey)}</p>
  </div>

  <div className="project-section">
    <h4>{t(p.outcomeTitleKey)}</h4>
    <p>{t(p.outcomeKey)}</p>
  </div>

  <div className="project-tags">
    {(t(p.featuresKey, { returnObjects: true }) as string[]).map((feature) => (
      <span key={feature} className="project-tag">
        {feature}
      </span>
    ))}
  </div>
</div>
          );
        })}
      </div>
    </section>
  );
}
