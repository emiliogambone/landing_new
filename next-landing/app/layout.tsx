import Script from "next/script";
import ContactArea from "@/components/Contact";
import GAListener from "./GAListener";
import I18nProvider from "./I18nProvider";
import { HeaderChrome, FooterChrome } from "../components/ClientChrome";
import ParticlesInit from "@/components/ParticleInit";

export const metadata = {
  metadataBase: new URL("https://emiliogambone.com"),
  title: {
    default: "Emilio Gambone - Software Engineer e Solution Architect",
    template: "%s | Emilio Gambone",
  },
  description: "Sviluppo software su misura, consulenza tecnologica e project management per aziende a Verona e in tutta Italia.",
  keywords: [
    "Software Engineer freelance",
    "Solution Architect",
    "sviluppo software su misura",
    "consulenza IT",
    "Tech Lead",
    "Project Management IT",
    "applicazioni web",
    "app mobile",
    "Verona",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Emilio Gambone - Software Engineer e Solution Architect",
    description: "Sviluppo software su misura, consulenza tecnologica e leadership tecnica per aziende e startup.",
    type: "website",
    locale: "it_IT",
    url: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        {/* <link rel="stylesheet" href="/styles/all.min.css" /> */}
        {/* <link rel="stylesheet" href="/styles/animate.css" /> */}
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/elements.css" />
        <link rel="stylesheet" href="/styles/em-breadcrumb.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        {/* <link rel="stylesheet" href="/styles/themify-icons.css" /> */}
        {/* <link rel="stylesheet" href="/styles/unittest.css" /> */}
        {/* <link rel="stylesheet" href="/styles/widget.css" /> */}
        <link rel="stylesheet" href="/styles/modern-landing.css" />
      </head>
      <body>
        <ParticlesInit>
          <I18nProvider>
            <GAListener />
            <div className="App">
              <HeaderChrome />
              {children}
              <ContactArea />
              <FooterChrome />
            </div>
          </I18nProvider>
        </ParticlesInit>
      </body>
    </html>
  );
}
