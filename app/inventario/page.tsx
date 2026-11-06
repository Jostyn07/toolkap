import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/inventario/Hero";
import Problema from "@/components/inventario/Problema";
import Pasos from "@/components/inventario/Pasos";
import Modulos from "@/components/inventario/Modulos";
import Celular from "@/components/inventario/Celular";
import Precio from "@/components/inventario/Precio";
import Faq from "@/components/inventario/Faq";
import CtaFinal from "@/components/inventario/CtaFinal";
import { meta, mensajeContacto } from "@/lib/inventario";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/inventario" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "/inventario",
    images: [{ url: meta.ogImage, width: 1200, height: 630 }],
    locale: "es_CO",
    type: "website",
  },
};

export default function InventarioPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Pasos />
        <Modulos />
        <Celular />
        <Precio />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat message={mensajeContacto} />
    </>
  );
}
