// app/servizi/page.tsx
import type { Metadata } from "next";
import ServiziContent from "@/components/ServiziContent";

export const metadata: Metadata = {
  title: "Servizi di Sviluppo Software e Consulenza a Verona | Emilio Gambone",
  description: "Sviluppo landing page, software su misura, app mobile e consulenza tecnologica. Freelance a Verona, disponibile anche da remoto in tutta Italia.",
};


export default function ServiziPage() {
  return (
    <main className="servizi-page">
      <ServiziContent />
    </main>
  );
}
