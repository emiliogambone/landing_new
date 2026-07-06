"use client";
import { useEffect, useState } from "react";
import "@/i18n"; // Il tuo file di configurazione i18next

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Previene il rendering dell'albero finché la lingua sul client non è sincronizzata
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return <>{children}</>;
}
