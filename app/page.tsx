import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Quoter from "@/components/Quoter";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { QuoteProvider } from "@/components/QuoteContext";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <QuoteProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Process />
        <Quoter />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QuoteProvider>
  );
}