// components/inventario/Modulos.tsx — sección 4
import { modulos } from "@/lib/inventario";
import { Eyebrow } from "../ui";
import CapturaImg from "./CapturaImg";

export default function Modulos() {
  return (
    <section className="bg-papel">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-3">
          <Eyebrow>{modulos.etiqueta.toUpperCase()}</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,46px)] leading-tight text-marino">{modulos.titulo}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modulos.items.map((m) => (
            <article key={m.titulo} className="flex flex-col border border-linea bg-white">
              <CapturaImg c={m.captura} sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" />
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-xl text-marino">{m.titulo}</h3>
                <ul className="flex flex-col gap-1.5 text-[15px] text-tinta">
                  {m.funciones.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[7px] h-2 w-2 shrink-0 bg-teal faceta-marca" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
