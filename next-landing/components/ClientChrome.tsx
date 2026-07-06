"use client";

import dynamic from "next/dynamic";

const Menu = dynamic(() => import("@/components/Menu"), { ssr: false });
const MobileMenu = dynamic(() => import("@/components/MobileMenu"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const FooterBottom = dynamic(() => import("@/components/FooterBottom"), {
  ssr: false,
});

export function HeaderChrome() {
  return (
    <>
      <Menu />
      <MobileMenu />
    </>
  );
}

export function FooterChrome() {
  return (
    <>
      <Footer />
      <FooterBottom />
    </>
  );
}
