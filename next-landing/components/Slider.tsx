"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Particles from "@tsparticles/react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { trackEvent } from "@/utils/gaEvents";

const Slider = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const roles = [
    "Software Engineer & Solution Architect",
    "Technical Project Manager",
  ];

  return (
    <section className="hero_section" style={{ position: "relative" }}>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#00fff0" },
            links: {
              enable: true,
              color: "#00fff0",
              distance: 150,
              opacity: 0.3,
            },
            collisions: { enable: false }, // era true
            move: {
              enable: true,
              speed: 1.5, // era 3
              direction: "none",
              outModes: { default: "out" },
            },
            number: { value: 50 }, // era 100
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="hero_content" style={{ position: "relative", zIndex: 1 }}>
        {mounted ? (
          <>
            <h1>{t("hero.name")}</h1>
            <h2>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </h2>
            <p>{t("hero.description")}</p>

            <div className="single_about_btn hero_cta_group">
              <Link
                href="/work-with-me"
                className="cta-button active primary-cta"
                onClick={() =>
                  trackEvent({
                    category: "Hero CTA",
                    action: "Click Work With Me",
                    label: "Hero Button",
                  })
                }
              >
                {t("about.workWithMeButton")}
              </Link>
              <a
                href="/servizi"
                className="active ghost-cta"
                onClick={() =>
                  trackEvent({
                    category: "Hero CTA",
                    action: "Click Services",
                    label: "Hero Button",
                  })
                }
              >
                {t("services.sectionTitle")}
              </a>
              <a
                href="/progetti"
                className="cta-button active ghost-cta"
                onClick={() =>
                  trackEvent({
                    category: "Hero CTA",
                    action: "Click About",
                    label: "Hero Button",
                  })
                }
              >
                {t("progetti.pageTitle")}
              </a>
            </div>
          </>
        ) : (
          <div style={{ minHeight: 300 }} aria-hidden="true" />
        )}
      </div>
    </section>
  );
};

export default Slider;
