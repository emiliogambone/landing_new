"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

export default function GAListener() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      ReactGA.initialize("G-SFJE2F23SX");
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);

  return null;
}
