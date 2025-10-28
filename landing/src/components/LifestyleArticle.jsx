import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";

const LifestyleArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "lifestylePost" && _id == "${id}"]{
        _id,
        category,
        publishedAt,
        image{
          asset->{
            _id,
            url
          },
          alt
        },
        translations{
          ${currentLang}{
            title,
            content,
            excerpt
          }
        }
      }[0]`;
      const result = await client.fetch(query);
      setPost(result);
    };
    fetchPost();
  }, [id, currentLang]);

  if (!post)
    return (
      <p style={{ textAlign: "center", marginTop: "50px", fontSize: "1.8rem" }}>
        Loading...
      </p>
    );

  const langContent = post.translations[currentLang];

  return (
    <section
      className="lifestyle_article_section"
      style={{
        minHeight: "100vh",
        background: "#0a3a44",
        color: "#fff",
        padding: "60px 20px",
        position: "relative",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "none",
          border: "none",
          color: "#00fff0",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        &lt; Back
      </button>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          textAlign: "left",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            margin: "0",
            lineHeight: "1.3",
          }}
        >
          {langContent.title}
        </h1>

        {/* Published Date */}
        <p
          style={{ color: "#00fff0", fontSize: "1.4rem", margin: "5px 0 25px" }}
        >
          {new Date(post.publishedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Header Image */}
        {post.image && (
          <div style={{ borderRadius: "12px", overflow: "hidden" }}>
            <img
              src={urlFor(post.image).url()}
              alt={post.image.alt || langContent.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {post.image.alt && (
              <span
                style={{
                  display: "block",
                  marginTop: "8px",
                  color: "#ccc",
                  fontSize: "1.1rem",
                }}
              >
                {post.image.alt}
              </span>
            )}
          </div>
        )}

        {/* Category */}
        <div
          style={{ marginTop: "10px", fontSize: "1.2rem", color: "#00fff0" }}
        >
          {post.category}
        </div>

        {/* Content */}
        <div
          style={{ lineHeight: "2.2", fontSize: "1.4rem", marginTop: "25px" }}
        >
          <PortableText
            value={langContent.content}
            components={{
              types: {
                image: ({ value }) => (
                  <img
                    src={urlFor(value).url()}
                    alt={value.alt || ""}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      margin: "30px 0",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    }}
                  />
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong style={{ color: "#00fff0" }}>{children}</strong>
                ),
                em: ({ children }) => (
                  <em style={{ color: "#fff", fontStyle: "italic" }}>
                    {children}
                  </em>
                ),
              },
              block: {
                normal: ({ children }) => (
                  <p
                    style={{
                      margin: "18px 0",
                      fontSize: "1.4rem",
                      color: "#fff",
                    }}
                  >
                    {children}
                  </p>
                ),
                h3: ({ children }) => (
                  <h3
                    style={{
                      marginTop: "40px",
                      fontSize: "2.2rem",
                      color: "#00fff0",
                    }}
                  >
                    {children}
                  </h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote
                    style={{
                      backgroundColor: "#0a3a44",
                      color: "#fff",
                      padding: "12px 20px",
                      borderLeft: "4px solid #00fff0",
                      margin: "20px 0",
                      borderRadius: "6px",
                      fontStyle: "italic",
                    }}
                  >
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul
                    style={{
                      margin: "18px 0",
                      paddingLeft: "22px",
                      color: "#fff",
                    }}
                  >
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol
                    style={{
                      margin: "18px 0",
                      paddingLeft: "22px",
                      color: "#fff",
                    }}
                  >
                    {children}
                  </ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li
                    style={{
                      margin: "10px 0",
                      listStylePosition: "inside",
                      fontSize: "1.4rem",
                      color: "#fff",
                    }}
                  >
                    {children}
                  </li>
                ),
                number: ({ children }) => (
                  <li
                    style={{
                      margin: "10px 0",
                      listStylePosition: "inside",
                      fontSize: "1.4rem",
                      color: "#fff",
                    }}
                  >
                    {children}
                  </li>
                ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LifestyleArticle;
