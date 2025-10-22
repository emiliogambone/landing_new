import React, { useState } from "react";
import blogPosts from "../data/blogPosts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  const filteredPosts =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === filter);

  return (
    <section
      id="blog"
      className="blog_section"
      style={{
        padding: "80px 0",
        background: "#0a3a44",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h2 style={{ marginBottom: "40px" }}>{t("blog.title")}</h2>

        {/* Filter Buttons */}
        <div style={{ marginBottom: "40px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                margin: "0 10px",
                padding: "10px 20px",
                background: filter === cat ? "#00fff0" : "#073B42",
                color: filter === cat ? "#073B42" : "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div
          className="blog_grid"
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="blog_card"
              style={{
                background: "#073B42",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "300px",
                textAlign: "left",
              }}
            >
              <h3>{post.title}</h3>
              <small style={{ color: "#00fff0" }}>{post.category}</small>
              <p>{post.excerpt}</p>
              <div>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#00fff0",
                      color: "#073B42",
                      padding: "2px 6px",
                      marginRight: "5px",
                      borderRadius: "4px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${post.id}`}
                style={{
                  color: "#00fff0",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
