"use client";
// components/Services.tsx — selector de servicios
import { useState } from "react";
import { SmartLink } from "./ui";
import { services } from "@/lib/content";
import { Eyebrow } from "./ui";
import { useQuote } from "./QuoteContext";

export default function Services() {
  const [sel, setSel] = useState(0);
  const { setNeed, setStep } = useQuote();
  const s = services[sel];

  return (
    <section id="servicios" className="mx-auto flex max-w-[1240px] flex-col gap-9 px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex max-w-[620px] flex-col gap-3">
          <Eyebrow>SERVICIOS</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.08]">Elige la pieza que necesitas.</h2>
        </div>
        <p className="max-w-[380px] leading-relaxed text-tinta">Toca un servicio y mira qué problema resuelve y qué te entregamos.</p>
      </div>

      <div className="flex flex-wrap gap-5">
        <div role="tablist" aria-label="Servicios" className="flex flex-[1_1_280px] flex-col gap-2">
          {services.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              id={`tab-${x.id}`}
              aria-selected={i === sel}
              aria-controls="panel-servicio"
              onClick={() => setSel(i)}
              className={`flex items-center justify-between gap-3 border border-linea px-5 py-5 text-left font-display text-[19px] font-semibold transition-colors ${
                i === sel ? "bg-marino text-white" : "bg-white text-marino hover:bg-papel"
              }`}
            >
              {x.name}
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="panel-servicio"
          aria-labelledby={`tab-${s.id}`}
          className="faceta-tarjeta relative flex min-w-0 flex-[2_1_520px] flex-col gap-6 bg-white p-8 md:p-9"
        >
          <div aria-hidden="true" className="faceta-esquina absolute right-0 top-0 h-14 w-14 bg-teal" />
          <h3 className="text-[30px] leading-tight">{s.title}</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Eyebrow>EL PROBLEMA</Eyebrow>
              <p className="leading-relaxed text-tinta">{s.problem}</p>
            </div>
            <div className="flex flex-col gap-2">
              <Eyebrow>QUÉ TE ENTREGAMOS</Eyebrow>
              <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px] text-tinta">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-linea pt-5">
            <p className="font-display text-[22px] font-bold">{s.price ? `Desde ${s.price}` : "Precio según alcance"}</p>
            <SmartLink
              href="#cotiza"
              onClick={() => {
                setNeed(sel);
                setStep(2);
              }}
              className="faceta-boton bg-marino py-3.5 pl-5 pr-8 font-semibold text-white hover:bg-teal-profundo"
            >
              Cotizar este servicio
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}