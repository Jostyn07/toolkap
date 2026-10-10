import type { Metadata } from "next";
import { outfit, jakarta } from "./fonts";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Toolkap · De las piezas al software completo",
  description:
    "Diseñamos, desarrollamos y conectamos páginas web, aplicaciones a medida y automatizaciones para negocios en Colombia. Creadores de Xiris, CrediPro y Fincil.cloud.",
  openGraph: {
    title: "Toolkap · De las piezas al software completo",
    description: "Páginas web, aplicaciones a medida y automatizaciones. Y nuestros propios productos.",
    images: ["/brand/toolkap-icon-512.png"],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
