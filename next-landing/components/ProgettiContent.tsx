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
  descKey: string;
};

const progetti: Progetto[] = [
  {
    id: "logistica",
    icon: Truck,
    sectorKey: "progetti.logistica.sector",
    titleKey: "progetti.logistica.title",
    descKey: "progetti.logistica.desc",
  },
  {
    id: "app-native",
    icon: Smartphone,
    sectorKey: "progetti.appNative.sector",
    titleKey: "progetti.appNative.title",
    descKey: "progetti.appNative.desc",
  },
  {
    id: "gestionali",
    icon: Wrench,
    sectorKey: "progetti.gestionali.sector",
    titleKey: "progetti.gestionali.title",
    descKey: "progetti.gestionali.desc",
  },
  {
    id: "cucine",
    icon: ChefHat,
    sectorKey: "progetti.cucine.sector",
    titleKey: "progetti.cucine.title",
    descKey: "progetti.cucine.desc",
  },
  {
    id: "volontariato",
    icon: HeartHandshake,
    sectorKey: "progetti.volontariato.sector",
    titleKey: "progetti.volontariato.title",
    descKey: "progetti.volontariato.desc",
  },
  {
    id: "ricettiva",
    icon: Building2,
    sectorKey: "progetti.ricettiva.sector",
    titleKey: "progetti.ricettiva.title",
    descKey: "progetti.ricettiva.desc",
  },
  {
    id: "acquaponica",
    icon: Sprout,
    sectorKey: "progetti.acquaponica.sector",
    titleKey: "progetti.acquaponica.title",
    descKey: "progetti.acquaponica.desc",
  },
];

export default function ProgettiContent() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="progetti-section container py-5">
      <h1 className="progetti-title">{t("progetti.pageTitle", "Progetti")}</h1>
      <p className="progetti-intro">
        {t(
          "progetti.pageIntro",
          "Alcuni dei problemi reali che ho aiutato a risolvere, settore per settore.",
        )}
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
              <p className={isExpanded ? "" : "progetto-desc-clamped"}>
                {t(p.descKey)}
              </p>
              <button
                type="button"
                className="progetto-toggle"
                onClick={() => setExpandedId(isExpanded ? null : p.id)}
              >
                {isExpanded
                  ? t("progetti.less", "Riduci")
                  : t("progetti.more", "Leggi tutto")}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
