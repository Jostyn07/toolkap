// components/inventario/Hero.tsx — sección 1
import { hero, capturas } from "@/lib/inventario";
import { SmartLink } from "../ui";
import CapturaImg from "./CapturaImg";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-marino text-papel">
      <svg aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30" viewBox="0 0 400 400" preserveAspectRatio="none" fill="none" stroke="#6fd0d8" strokeWidth="0.6">
        <path d="M400 0 L120 0 L400 280 Z" />
        <path d="M400 0 L260 140" />
      </svg>
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-[13px] font-semibold uppercase tracking-[2px] text-teal-claro">{hero.etiqueta}</p>
          <h1 className="text-[clamp(38px,6vw,64px)] leading-[1.04] text-white">{hero.titulo}</h1>
          <p className="max-w-[480px] text-lg leading-relaxed text-niebla">{hero.subtitulo}</p>
          <div className="flex flex-wrap gap-3">
            <SmartLink href={hero.principal.href} className="faceta-boton bg-teal py-4 pl-6 pr-8 font-semibold text-white transition-colors hover:bg-teal-profundo">
              {hero.principal.label}
            </SmartLink>
            <SmartLink href={hero.secundario.href} className="border-[1.5px] border-niebla px-6 py-[15px] font-semibold text-white transition-colors hover:bg-marino-2">
              {hero.secundario.label}
            </SmartLink>
          </div>
        </div>

        {/* Marco de portátil en CSS */}
        <div className="w-full">
          <div className="rounded-t-[10px] border-[10px] border-b-[14px] border-[#0b2232] bg-[#0b2232]">
            <CapturaImg c={capturas.hero} priority sizes="(min-width: 1024px) 600px, 100vw" />
          </div>
          <div className="mx-[-4%] h-3 rounded-b-[8px] bg-[#2a4a63]" />
        </div>
      </div>
    </section>
  );
}
