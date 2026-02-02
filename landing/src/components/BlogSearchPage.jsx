import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { client, urlFor } from "../sanityClient";
import { useTranslation } from "react-i18next";
import LifestyleSearchPage from "./LifestyleSearchPage";

const BlogSearchPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("All");

  const allTags = ["All", ...new Set(blogPosts.flatMap((p) => p.tags))];

  const { i18n } = useTranslation(); // i18n.language is the current language, e.g., "en", "it", "es"
  const currentLang = i18n.language;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Number of posts per page

  useEffect(() => {
    setCurrentPage(1);
  }, [search, tagFilter]);

  useEffect(() => {
    const fetchPosts = async () => {
      const langMap = {
        "en-US": "en",
        en: "en",
        "it-IT": "it",
        it: "it",
        "es-ES": "es",
        es: "es",
      };

      const sanityLang = langMap[currentLang] || "en"; // fallback to 'en'

      const query = `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        slug,
        tags,
        publishedAt,
        translations{
            ${sanityLang}{
            title,
            excerpt,
            content
            }
        }
        }`;
      const posts = await client.fetch(query);
      setBlogPosts(posts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        slug,
        tags,
        publishedAt,
        translations{
          ${currentLang}{
            title,
            excerpt,
            content
          }
        }
      }`;

      try {
        const posts = await client.fetch(query);
        setBlogPosts(posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [currentLang]);

  const filteredPosts = blogPosts.filter((post) => {
    const translation = post.translations?.[currentLang];
    if (!translation) return false; // skip posts without translation
    const matchesTag = tagFilter === "All" || post.tags.includes(tagFilter);
    const matchesText = translation.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesTag && matchesText;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#0a3a44",
        color: "#fff",
        padding: "60px 20px",
      }}
      id="blog"
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "30px" }}>Blog</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 15px",
            width: "100%",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none",
            fontSize: "1rem",
            color: "black",
          }}
        />

        {/* Tag Filters */}
        <div style={{ marginBottom: "30px" }}>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagFilter(tag)}
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                padding: "6px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                background: tagFilter === tag ? "#00fff0" : "#073B42",
                color: tagFilter === tag ? "#073B42" : "#fff",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {currentPosts.map((post) => (
            <div
              key={post.id}
              style={{
                background: "#073B42",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h3>{post.translations[currentLang].title}</h3>
              <small style={{ color: "#00fff0" }}>{post.category}</small>
              <p>{post.translations[currentLang].excerpt}</p>
              <div style={{ marginTop: "10px" }}>
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
                to={`/blog/${post._id}`}
                style={{
                  display: "block",
                  marginTop: "10px",
                  color: "#00fff0",
                }}
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                margin: "0 5px",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                background: currentPage === i + 1 ? "#00fff0" : "#073B42",
                color: currentPage === i + 1 ? "#073B42" : "#fff",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "50px" }}>
          <LifestyleSearchPage embedMode={true} />
        </div>
      </div>
    </section>
  );
};

export default BlogSearchPage;
