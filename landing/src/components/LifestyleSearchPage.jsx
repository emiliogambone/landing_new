import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanityClient";
import { useTranslation } from "react-i18next";

const LifestyleSearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => setCurrentPage(1), [search, categoryFilter]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "lifestylePost"] | order(publishedAt desc) {
        _id,
        slug,
        category,
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
        const data = await client.fetch(query);
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, [currentLang]);

  const allCategories = ["All", ...new Set(posts.map((p) => p.category))];

  const filteredPosts = posts.filter((post) => {
    const translation = post.translations?.[currentLang];
    if (!translation) return false;
    const matchesCategory =
      categoryFilter === "All" || post.category === categoryFilter;
    const matchesText = translation.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesText;
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
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "30px" }}>Lifestyle</h1>

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

        {/* Category Filters */}
        <div style={{ marginBottom: "30px" }}>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                padding: "6px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                background: categoryFilter === cat ? "#00fff0" : "#073B42",
                color: categoryFilter === cat ? "#073B42" : "#fff",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {currentPosts.map((post) => (
            <div
              key={post._id}
              style={{
                background: "#073B42",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h3>{post.translations[currentLang].title}</h3>
              <small style={{ color: "#00fff0" }}>{post.category}</small>
              <p>{post.translations[currentLang].excerpt}</p>
              <Link
                to={`/lifestyle/${post._id}`}
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

        {/* Pagination */}
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
      </div>
    </section>
  );
};

export default LifestyleSearchPage;
