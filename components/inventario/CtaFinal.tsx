// components/inventario/CtaFinal.tsx — sección 8
import { ctaFinal, links } from "@/lib/inventario";
import { SmartLink } from "../ui";

export default function CtaFinal() {
  return (
    <section className="bg-marino-2 text-papel">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-[clamp(32px,5vw,54px)] leading-tight text-white">{ctaFinal.titulo}</h2>
        <div className="flex flex-wrap gap-3">
          <SmartLink href="#precio" className="faceta-boton bg-teal py-4 pl-6 pr-8 font-semibold text-white hover:bg-teal-profundo">
            {ctaFinal.comprar}
          </SmartLink>
          <a href={links.contacto} target="_blank" rel="noopener noreferrer" className="border-[1.5px] border-niebla px-6 py-[15px] font-semibold text-white hover:bg-marino">
            {ctaFinal.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
