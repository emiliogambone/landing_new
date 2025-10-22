import React, { useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";
import MobileMenu from "./components/MobileMenu";
import Slider from "./components/Slider";
import About from "./components/About";
import Services from "./components/Services";
import ContactArea from "./components/Contact";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import BlogArticle from "./components/BlogArticle";
import BlogSearchPage from "./components/BlogSearchPage";
import ReactGA from "react-ga4";
import { Routes, Route, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const isBlogArticle = location.pathname.startsWith("/blog/");

  // Track pageviews on route change
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <div className="App">
      {!isBlogArticle && (
        <>
          <Menu />
          <MobileMenu />
          <Slider />
          <About />
          <Services />
        </>
      )}

      <Routes>
        <Route path="/" element={<BlogSearchPage />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
      </Routes>

      {!isBlogArticle && (
        <>
          <ContactArea />
          <Footer />
          <FooterBottom />
        </>
      )}
    </div>
  );
}

function App() {
  // Initialize GA once
  useEffect(() => {
    ReactGA.initialize("G-SFJE2F23SX");
  }, []);

  return <Layout />;
}

export default App;
