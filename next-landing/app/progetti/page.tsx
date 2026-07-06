import type { Metadata } from "next";
import ProgettiContent from "@/components/ProgettiContent";

export const metadata: Metadata = {
  title: "Progetti | Emilio Gambone",
  description:
    "Case study reali: logistica, gestionali per PMI, app native, automazione IoT e altro.",
};

export default function ProgettiPage() {
  return (
    <main className="progetti-page">
      <ProgettiContent />
    </main>
  );
}
