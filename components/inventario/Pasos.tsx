// components/inventario/Pasos.tsx — sección 3
import { pasos } from "@/lib/inventario";
import { Eyebrow } from "../ui";

export default function Pasos() {
  return (
    <section id="como-funciona" className="border-t border-linea bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-3">
          <Eyebrow>{pasos.etiqueta.toUpperCase()}</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,46px)] leading-tight text-marino">{pasos.titulo}</h2>
        </div>
        <ol className="grid gap-8 md:grid-cols-3">
          {pasos.items.map((t, i) => (
            <li key={t} className="flex flex-col gap-3 border-l-2 border-teal pl-5">
              <span className="font-display text-5xl font-bold text-teal-profundo">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg font-medium text-tinta">{t}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
