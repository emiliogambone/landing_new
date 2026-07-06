// app/servizi/page.tsx
import type { Metadata } from "next";
import ServiziContent from "@/components/ServiziContent";

export const metadata: Metadata = {
  title: "Servizi | Emilio Gambone",
  description:
    "Sviluppo web e mobile, integrazioni BLE/IoT, consulenza tecnica e formazione per aziende e PMI.",
};

export default function ServiziPage() {
  return (
    <main className="servizi-page">
      <ServiziContent />
    </main>
  );
}
