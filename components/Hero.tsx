"use client";
// components/Hero.tsx — las facetas del logo se ensamblan al cargar y siguen levemente al cursor.
import { useEffect, useRef, useState } from "react";
import { PrimaryButton, SecondaryButton, Eyebrow } from "./ui";

// Cada faceta: color, forma y desplazamiento inicial (x, y, rotación)
const facets = [
  { c: "bg-marino", clip: "polygon(0 18%, 100% 0, 62% 100%)", d: [-6, -4, -14] },
  { c: "bg-teal", clip: "polygon(0 18%, 75% 25%, 62% 100%, 42% 52%)", d: [10, -8, 18] },
  { c: "bg-papel", clip: "polygon(0 18%, 42% 52%, 62% 100%, 50% 50%)", d: [4, 10, -8] },
  { c: "bg-azul", clip: "polygon(8% 48%, 42% 52%, 14% 72%)", d: [-12, 8, 24] },
  { c: "bg-teal-profundo", clip: "polygon(75% 25%, 100% 0, 62% 100%)", d: [14, 4, 12] },
];

const labels = [
  { t: "IDEA", s: "Tu visión", pos: "left-0 top-[6%]" },
  { t: "DISEÑO", s: "La estructura", pos: "left-0 bottom-[14%]" },
  { t: "CÓDIGO", s: "Lo construimos", pos: "right-0 top-[30%] text-right" },
  { t: "RESULTADO", s: "Una herramienta que funciona", pos: "right-0 bottom-[4%] text-right" },
];

const pillars = [
  { t: "Desarrollo a medida", s: "Páginas web, aplicaciones y sistemas." },
  { t: "Productos propios", s: "Xiris, CrediPro y Fincil.cloud." },
  { t: "Automatización real", s: "Procesos más simples, negocios más eficientes." },
];

export default function Hero() {
  const [built, setBuilt] = useState(false);
  const [m, setM] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setBuilt(true), 150);
    return () => clearTimeout(t);
  }, []);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => setM({ x, y }));
  }

  return (
    <section id="inicio" onMouseMove={onMove} className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-10 px-6 pb-16 pt-16 md:pt-20">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-5">
          <Eyebrow>SOFTWARE · PRODUCTOS · AUTOMATIZACIÓN</Eyebrow>
          <h1 className="text-[clamp(40px,5.6vw,70px)] leading-[1.02]">De las piezas al software completo.</h1>
          <p className="max-w-[520px] text-[19px] leading-relaxed text-tinta">
            Diseñamos, desarrollamos y conectamos herramientas que hacen avanzar tu negocio. Y construimos las nuestras.
          </p>
          <div className="flex flex-wrap gap-3 pt-1.5">
            <PrimaryButton href="#cotiza">Cotiza tu proyecto →</PrimaryButton>
            <SecondaryButton href="#productos">Explora lo que construimos</SecondaryButton>
          </div>
        </div>

        <div aria-hidden="true" className="relative h-[340px] min-w-0 flex-[1_1_420px] md:h-[420px]">
          <div className="reticula absolute inset-0 opacity-[0.07]" />
          {facets.map((f, i) => (
            <div
              key={i}
              className={`absolute left-[18%] top-[8%] h-[84%] w-[64%] ${f.c} transition-[transform,opacity] duration-[1100ms] ease-[cubic-bezier(.2,.8,.2,1)]`}
              style={{
                clipPath: f.clip,
                opacity: built ? 1 : 0,
                transform: built
                  ? `translate(${m.x * f.d[0]}px, ${m.y * f.d[1]}px)`
                  : `translate(${f.d[0] * 9}px, ${f.d[1] * 7}px) rotate(${f.d[2]}deg)`,
              }}
            />
          ))}
          {labels.map((l) => (
            <div key={l.t} className={`absolute flex flex-col gap-0.5 ${l.pos}`}>
              <span className="font-display text-sm font-bold">{l.t}</span>
              <span className="text-xs text-tinta-suave">{l.s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-linea">
        <ul className="mx-auto grid max-w-[1240px] gap-5 px-6 py-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.t} className="flex flex-col gap-0.5">
              <span className="font-semibold">{p.t}</span>
              <span className="text-sm text-tinta-suave">{p.s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
