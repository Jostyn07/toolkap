"use client";
// components/Quoter.tsx — cotizador en 3 pasos que termina en WhatsApp o correo
import { useState } from "react";
import { needs, timeframes } from "@/lib/content";
import { mailLink, whatsappLink } from "@/lib/site";
import { Eyebrow } from "./ui";
import { useQuote } from "./QuoteContext";

const stepNames = ["Necesidad", "Tu negocio", "Enviar"];

function Choice({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`border-[1.5px] text-left text-marino transition-colors ${selected ? "border-marino bg-white" : "border-[#c9d1d9] hover:border-marino"}`}
    >
      {children}
    </button>
  );
}

export default function Quoter() {
  const { need, setNeed, step, setStep } = useQuote();
  const [biz, setBiz] = useState("");
  const [time, setTime] = useState(-1);

  const needName = need >= 0 ? needs[need].name : "";
  const timeName = time >= 0 ? timeframes[time] : "Sin definir";
  const message = `Hola Toolkap. Necesito: ${needName}. Mi negocio: ${biz.trim()}. Tiempo: ${timeName}.`;
  const canNext = step === 1 ? need >= 0 : biz.trim().length > 3;
  const wa = whatsappLink(message);

  return (
    <section id="cotiza" className="border-t border-linea bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-12 px-6 py-24">
        <div className="flex flex-[1_1_340px] flex-col gap-4">
          <Eyebrow>COTIZA TU PROYECTO</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.08]">La primera pieza la pones tú.</h2>
          <p className="leading-relaxed text-tinta">
            Tres pasos cortos. Te respondemos con una propuesta y los siguientes pasos, sin compromiso.
          </p>
          <ol className="flex gap-2 pt-2" aria-label="Progreso">
            {stepNames.map((n, i) => (
              <li key={n} className="flex flex-1 flex-col gap-1.5" aria-current={i + 1 === step ? "step" : undefined}>
                <span className={`h-1 ${i < step ? "bg-marino" : "bg-linea"}`} />
                <span className={`text-xs font-semibold ${i < step ? "text-marino" : "text-tinta-suave"}`}>{n}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex min-w-0 flex-[2_1_560px] flex-col gap-6 bg-papel p-6 md:p-8" aria-live="polite">
          {step === 1 && (
            <fieldset className="flex flex-col gap-3.5">
              <legend className="pb-3.5 font-display text-[22px] font-bold">¿Qué necesitas construir?</legend>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {needs.map((n, i) => (
                  <Choice key={n.name} selected={i === need} onClick={() => setNeed(i)}>
                    <span className="flex flex-col gap-1 p-4">
                      <span className="font-display text-[17px] font-bold">{n.name}</span>
                      <span className="text-[13px] text-tinta-suave">{n.hint}</span>
                    </span>
                  </Choice>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-3.5">
              <p className="font-display text-[22px] font-bold">Cuéntanos de tu negocio</p>
              <label htmlFor="tk-biz" className="text-sm font-semibold">
                ¿A qué se dedica y qué quieres resolver?
              </label>
              <textarea
                id="tk-biz"
                rows={5}
                value={biz}
                onChange={(e) => setBiz(e.target.value)}
                placeholder="Ej.: Tengo una tienda de ropa y quiero vender por internet y llevar el inventario."
                className="resize-y border-[1.5px] border-[#c9d1d9] bg-white p-3.5 text-[15px] text-marino focus:border-marino focus:outline-none"
              />
              <fieldset className="flex flex-col gap-2">
                <legend className="pb-2 text-sm font-semibold">¿Para cuándo lo necesitas?</legend>
                <div className="flex flex-wrap gap-2">
                  {timeframes.map((t, i) => (
                    <Choice key={t} selected={i === time} onClick={() => setTime(i)}>
                      <span className="block px-4 py-2.5 text-sm font-semibold">{t}</span>
                    </Choice>
                  ))}
                </div>
              </fieldset>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-3.5">
              <p className="font-display text-[22px] font-bold">Listo. Así quedó tu solicitud</p>
              <dl className="flex flex-col gap-2.5 bg-white p-5 text-[15px] leading-relaxed">
                <div><dt className="inline font-semibold">Necesitas: </dt><dd className="inline">{needName}</dd></div>
                <div><dt className="inline font-semibold">Tu negocio: </dt><dd className="inline">{biz.trim() || "Sin descripción"}</dd></div>
                <div><dt className="inline font-semibold">Tiempo: </dt><dd className="inline">{timeName}</dd></div>
              </dl>
              <p className="text-sm leading-relaxed text-tinta">
                Siguiente paso: revisamos tu caso y te enviamos una propuesta con alcance, precio y plazo. No damos precios ni
                fechas sin entender primero tu proyecto.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {wa && (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="faceta-boton bg-marino py-3.5 pl-6 pr-8 font-semibold text-white hover:bg-teal-profundo">
                    Enviar por WhatsApp
                  </a>
                )}
                <a
                  href={mailLink(`Cotización: ${needName}`, message)}
                  className="border-[1.5px] border-marino px-5 py-[13px] font-semibold text-marino hover:bg-marino hover:text-white"
                >
                  Enviar por correo
                </a>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between gap-3 border-t border-linea pt-4">
            <button
              type="button"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-4 py-3 font-semibold text-teal-profundo disabled:invisible"
            >
              ← Atrás
            </button>
            {step < 3 && (
              <button
                type="button"
                onClick={() => canNext && setStep(step + 1)}
                disabled={!canNext}
                className="faceta-boton bg-marino py-3.5 pl-5 pr-8 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#8fa3b3]"
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
