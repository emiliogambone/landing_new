"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  return (
    <div className="msuzan-main-menu one_page hidden-xs hidden-sm header--fixed headrooma full-width">
      <div className="msuzan_nav_area">
        <div className="container-fluid">
          <div className="row logo-left">
            <div className="col-md-3 col-sm-3 col-xs-4">
              <div className="logo">
                <Link
                  className="main_sticky_main_l"
                  href="/#about"
                  title="msuzan"
                >
                  <div style={{ position: "relative", width: 60, height: 60 }}>
                    <Image
                      src="/assets/images/Logo_bianco.png"
                      alt="logo"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
                <Link className="main_sticky_l" href="/#about" title="msuzan">
                  <div style={{ position: "relative", width: 60, height: 60 }}>
                    <Image
                      src="/assets/images/Logo_bianco.png"
                      alt="logo"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-9 col-sm-9 col-xs-8">
              <nav className="msuzan_menu main-search-menu">
                <ul className="main-menu sub-menu nav_scroll">
                  <li>
                    <Link href="/">{t("menu.home")}</Link>
                  </li>
                  <li>
                    <Link href="/#about">{t("menu.about")}</Link>
                  </li>
                  <li>
                    <Link href="/servizi">{t("menu.services")}</Link>
                  </li>
                  <li>
                    <Link href="/progetti">{t("Progetti")}</Link>
                  </li>
                  <li>
                    <Link href="/#contact">{t("menu.contact")}</Link>
                  </li>
                  <li className="nav-language-item">
                    <select
                      value={i18n.language}
                      onChange={handleLanguageChange}
                      aria-label="Select language"
                    >
                      <option value="en">🇬🇧 EN</option>
                      <option value="it">🇮🇹 IT</option>
                      <option value="es">🇪🇸 ES</option>
                    </select>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
