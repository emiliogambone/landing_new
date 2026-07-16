"use client";

import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { trackEvent } from "@/utils/gaEvents";

const WHATSAPP_NUMBER = "393493554864"; // senza + e senza spazi
const WHATSAPP_MESSAGE = "Ciao! Ho visto il tuo sito e vorrei parlarti di un progetto.";

export default function WhatsappFloatingButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE,
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp_float_btn"
      aria-label="Contattami su WhatsApp"
      onClick={() =>
        trackEvent({
          category: "whatsapp_click",
          action: "float_button",
          label: "mobile",
        })
      }
    >
    <FaWhatsapp size={28} />
    </a>
  );
}