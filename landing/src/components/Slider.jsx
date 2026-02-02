import React from "react";
import { Link } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { trackEvent } from "../utils/gaEvents"; // <-- import your GA helper

const HeroParticles = () => {
  const { t } = useTranslation();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  // Roles stay in English
  const roles = [
    "Software Engineer & Solution Architect",
    "Technical Project Manager",
  ];

  return (
    <section
      className="hero_section"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "#073B42" } },
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
            collisions: { enable: false },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "out" },
            },
            number: { value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div
        className="hero_content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "700px",
          padding: "0 20px",
        }}
      >
        {/* Name */}
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          {t("hero.name")}
        </h1>

        {/* Typewriter roles */}
        <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
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

        {/* Description */}
        <p style={{ marginBottom: "30px" }}>{t("hero.description")}</p>

        {/* Buttons */}
        <div className="single_about_btn">
          {/* <a
            href="https://app.simplymeet.me/emiliogambone"
            target="_blank"
            rel="noopener noreferrer"
            className="single_about_btn"
            style={{ marginRight: "10px" }}
          >
            {t("hero.ctaContact")}
          </a> */}
          <Link
            to="/work-with-me"
            className="cta-button active"
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

          {/* Servizi */}
          <a
            href="#service"
            className="active"
            smooth={true}
            duration={500}
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

          {/* Chi sono */}
          <a
            href="#about"
            className="single_about_btn cta-button active"
            onClick={() =>
              trackEvent({
                category: "Hero CTA",
                action: "Click About",
                label: "Hero Button",
              })
            }
          >
            {t("menu.about")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroParticles;
