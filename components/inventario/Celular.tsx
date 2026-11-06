// components/inventario/Celular.tsx — sección 5
import { celular, capturas, playStoreUrl } from "@/lib/inventario";
import { Eyebrow } from "../ui";
import CapturaImg from "./CapturaImg";

export default function Celular() {
  return (
    <section className="bg-marino text-papel">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Eyebrow dark>{celular.etiqueta.toUpperCase()}</Eyebrow>
            <h2 className="text-[clamp(30px,4vw,46px)] leading-tight text-white">{celular.titulo}</h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {celular.items.map((it) => (
              <li key={it.titulo} className="flex flex-col gap-1 border-t border-linea-oscura pt-4">
                <h3 className="text-lg text-white">{it.titulo}</h3>
                <p className="text-niebla">{it.texto}</p>
              </li>
            ))}
          </ul>
          <p className="font-medium text-teal-claro">{celular.red}</p>
          {playStoreUrl && (
            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="faceta-boton self-start bg-teal py-4 pl-6 pr-8 font-semibold text-white hover:bg-teal-profundo">
              {celular.boton}
            </a>
          )}
        </div>
        <div className="mx-auto w-[220px] rounded-[28px] border-[8px] border-[#0b2232] bg-[#0b2232] md:w-full">
          <CapturaImg c={capturas.celular} sizes="300px" className="rounded-[18px]" />
        </div>
      </div>
    </section>
  );
}
