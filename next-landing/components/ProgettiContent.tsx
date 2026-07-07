"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Truck,
  Ruler,
  Printer,
  Smartphone,
  Wrench,
  ChefHat,
  HeartHandshake,
  Building2,
  HeartPulse,
  Home,
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
    tags: string[];

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
    tags: [
    "architecture",
    "custom-software",
    "consulting"
  ]
},
  {
    id: "legno",
    icon: Ruler,
    sectorKey: "progetti.legno.sector",
    titleKey: "progetti.legno.title",

    challengeTitleKey: "progetti.legno.challengeTitle",
    challengeKey: "progetti.legno.challenge",

    roleTitleKey: "progetti.legno.roleTitle",
    roleKey: "progetti.legno.role",

    outcomeTitleKey: "progetti.legno.outcomeTitle",
    outcomeKey: "progetti.legno.outcome",

    featuresKey: "progetti.legno.features",
        tags: [
    "mobile",
    "architecture"
  ]
  },
  {
  id: "volontariato",
  icon: HeartHandshake,

  sectorKey: "progetti.volontariato.sector",
  titleKey: "progetti.volontariato.title",

  challengeTitleKey: "progetti.volontariato.challengeTitle",
  challengeKey: "progetti.volontariato.challenge",

  roleTitleKey: "progetti.volontariato.roleTitle",
  roleKey: "progetti.volontariato.role",

  outcomeTitleKey: "progetti.volontariato.outcomeTitle",
  outcomeKey: "progetti.volontariato.outcome",

  featuresKey: "progetti.volontariato.features",
      tags: [
    "custom-software",
    "architecture"
  ]
},
{
  id: "industrialPrinting",
  icon: Printer,

  sectorKey: "progetti.industrialPrinting.sector",
  titleKey: "progetti.industrialPrinting.title",

  challengeTitleKey: "progetti.industrialPrinting.challengeTitle",
  challengeKey: "progetti.industrialPrinting.challenge",

  roleTitleKey: "progetti.industrialPrinting.roleTitle",
  roleKey: "progetti.industrialPrinting.role",

  outcomeTitleKey: "progetti.industrialPrinting.outcomeTitle",
  outcomeKey: "progetti.industrialPrinting.outcome",

  featuresKey: "progetti.industrialPrinting.features",
      tags: [
    "consulting",
    "architecture"
  ]
},
{
  id: "acquaponica",
  icon: Sprout,

  sectorKey: "progetti.acquaponica.sector",
  titleKey: "progetti.acquaponica.title",

  challengeTitleKey: "progetti.acquaponica.challengeTitle",
  challengeKey: "progetti.acquaponica.challenge",

  roleTitleKey: "progetti.acquaponica.roleTitle",
  roleKey: "progetti.acquaponica.role",

  outcomeTitleKey: "progetti.acquaponica.outcomeTitle",
  outcomeKey: "progetti.acquaponica.outcome",

  featuresKey: "progetti.acquaponica.features",
    tags: [
    "iot",
    "architecture"
  ]
},
{
  id: "crmOfficina",
  icon: Wrench,

  sectorKey: "progetti.crmOfficina.sector",
  titleKey: "progetti.crmOfficina.title",

  challengeTitleKey: "progetti.crmOfficina.challengeTitle",
  challengeKey: "progetti.crmOfficina.challenge",

  roleTitleKey: "progetti.crmOfficina.roleTitle",
  roleKey: "progetti.crmOfficina.role",

  outcomeTitleKey: "progetti.crmOfficina.outcomeTitle",
  outcomeKey: "progetti.crmOfficina.outcome",

  featuresKey: "progetti.crmOfficina.features",
      tags: [
    "custom-software"
  ]
},
{
  id: "hospitality",
  icon: Building2,

  sectorKey: "progetti.hospitality.sector",
  titleKey: "progetti.hospitality.title",

  challengeTitleKey: "progetti.hospitality.challengeTitle",
  challengeKey: "progetti.hospitality.challenge",

  roleTitleKey: "progetti.hospitality.roleTitle",
  roleKey: "progetti.hospitality.role",

  outcomeTitleKey: "progetti.hospitality.outcomeTitle",
  outcomeKey: "progetti.hospitality.outcome",

  featuresKey: "progetti.hospitality.features",
      tags: [
    "custom-software",
  ]
},
{
  id: "farmacovigilanza",
  icon: HeartPulse,

  sectorKey: "progetti.farmacovigilanza.sector",
  titleKey: "progetti.farmacovigilanza.title",

  challengeTitleKey: "progetti.farmacovigilanza.challengeTitle",
  challengeKey: "progetti.farmacovigilanza.challenge",

  roleTitleKey: "progetti.farmacovigilanza.roleTitle",
  roleKey: "progetti.farmacovigilanza.role",

  outcomeTitleKey: "progetti.farmacovigilanza.outcomeTitle",
  outcomeKey: "progetti.farmacovigilanza.outcome",

  featuresKey: "progetti.farmacovigilanza.features",
      tags: [
    "architecture"
  ]
},
{
  id: "offGridHome",
  icon: Home,

  sectorKey: "progetti.offGridHome.sector",
  titleKey: "progetti.offGridHome.title",

  challengeTitleKey: "progetti.offGridHome.challengeTitle",
  challengeKey: "progetti.offGridHome.challenge",

  roleTitleKey: "progetti.offGridHome.roleTitle",
  roleKey: "progetti.offGridHome.role",

  outcomeTitleKey: "progetti.offGridHome.outcomeTitle",
  outcomeKey: "progetti.offGridHome.outcome",

  featuresKey: "progetti.offGridHome.features",
      tags: [
    "iot",
  ]
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

const projectFilters = [
  {
    id: "all",
    labelKey: "progetti.filters.all"
  },
  {
    id: "architecture",
    labelKey: "progetti.filters.architecture"
  },
  {
    id: "custom-software",
    labelKey: "progetti.filters.customSoftware"
  },
  {
    id: "mobile",
    labelKey: "progetti.filters.mobile"
  },
  {
    id: "iot",
    labelKey: "progetti.filters.iot"
  },
  {
    id: "consulting",
    labelKey: "progetti.filters.consulting"
  }
];

export default function ProgettiContent() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = progetti.filter((project) => {
  if (activeFilter === "all") return true;

  return project.tags.includes(activeFilter);
});

  return (
    <section className="progetti-section container py-5">
      <h1 className="progetti-title">{t("progetti.pageTitle", "Progetti")}</h1>
      <p className="progetti-intro">
        {/* {t(
          "progetti.pageIntro",
          "Alcuni dei problemi reali che ho aiutato a risolvere, settore per settore.",
        )} */}
      </p>
<div className="progetti-filters">
  {projectFilters.map((filter) => (
    <button
      key={filter.id}
      type="button"
      className={`project-tag project-tag--filter ${
        activeFilter === filter.id ? "project-tag--active" : ""
      }`}
      onClick={() => setActiveFilter(filter.id)}
    >
{t(filter.labelKey)}
    </button>
  ))}
</div>
      <div className="progetti-grid">
        {filteredProjects.map((p) => {
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
