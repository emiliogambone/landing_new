// app/page.tsx
import dynamic from "next/dynamic";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Contact from "@/components/Contact";


// const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
//   ssr: false,
// });

export default function HomePage() {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Products />
      <Contact />
    </>
  );
}
