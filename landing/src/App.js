import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import FooterBottom from "./components/FooterBottom";
import Menu from "./components/Menu";
import ContactArea from "./components/Contact";
import MobileMenu from "./components/MobileMenu";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      {/* Other content/components */}
      <Menu />
      <MobileMenu />
      <Slider />
      <About />
      <Services />
      <ContactArea />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
