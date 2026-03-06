import React from "react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const products = t("products.items", { returnObjects: true });

  if (!Array.isArray(products) || products.length === 0) return null;

  return (
    <section className="products_area" id="products">
      <div className="container">
        <div className="section_title mb-5 text-center">
          <h1>
            <span className="title">{t("products.sectionTitle")}</span>
          </h1>
          <p>{t("products.sectionSubtitle")}</p>
        </div>

        <div className="products_grid">
          {products.map((item) => (
            <article key={item.link} className="product_card">
              <div className="product_preview">
                <iframe
                  src={item.previewUrl || item.link}
                  title={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="product_content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product_link_btn"
                >
                  {t("products.openLabel")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
