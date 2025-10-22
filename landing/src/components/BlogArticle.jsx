import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "blogPost" && _id == "${id}"]{
        _id,
        tags,
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
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  const langContent = post.translations[currentLang];

  return (
    <section
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
          fontSize: "1.8rem",
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
          gap: "20px",
        }}
      >
        {/* Title */}
        <h1 style={{ fontSize: "2.5rem", margin: "10px 0", lineHeight: "1.2" }}>
          {langContent.title}
        </h1>

        {/* Header Image */}
        {post.image && (
          <div
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src={urlFor(post.image).url()}
              alt={post.image.alt || langContent.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {post.image.alt && (
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  fontSize: "0.9rem",
                  padding: "5px 10px",
                }}
              >
                {post.image.alt}
              </span>
            )}
          </div>
        )}

        {/* Published Date */}
        <p style={{ color: "#00fff0", fontSize: "0.9rem" }}>
          {new Date(post.publishedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {post.tags?.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#00fff0",
                color: "#073B42",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: "600",
                transition: "transform 0.2s",
                cursor: "default",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div style={{ marginTop: "30px", lineHeight: "1.8", fontSize: "1rem" }}>
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
                      margin: "25px 0",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    }}
                  />
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong style={{ color: "#00fff0" }}>{children}</strong>
                ),
              },
              block: {
                h3: ({ children }) => (
                  <h3
                    style={{
                      marginTop: "35px",
                      color: "#00fff0",
                      fontSize: "1.5rem",
                    }}
                  >
                    {children}
                  </h3>
                ),
                normal: ({ children }) => (
                  <p style={{ margin: "12px 0" }}>{children}</p>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul style={{ margin: "12px 0", paddingLeft: "16px" }}>
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol style={{ margin: "12px 0", paddingLeft: "16px" }}>
                    {children}
                  </ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li style={{ margin: "4px 0", listStylePosition: "inside" }}>
                    {children}
                  </li>
                ),
                number: ({ children }) => (
                  <li style={{ margin: "4px 0", listStylePosition: "inside" }}>
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

export default BlogArticle;
