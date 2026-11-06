// components/inventario/Precio.tsx — sección 6
import { planPrecio, requisitos, links } from "@/lib/inventario";

export default function Precio() {
  return (
    <section id="precio" className="bg-papel">
      <div className="mx-auto flex max-w-[1240px] justify-center px-4 py-20 sm:px-6">
        <div className="faceta-tarjeta flex w-full max-w-[520px] flex-col gap-6 border-t-4 border-teal bg-white p-7 sm:p-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl text-marino">{planPrecio.titulo}</h2>
            <p className="font-display text-5xl font-bold text-marino">{planPrecio.valor}</p>
            <p className="font-semibold text-teal-profundo">{planPrecio.tipo}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm uppercase tracking-[1.5px] text-tinta-suave">{planPrecio.incluyeTitulo}</h3>
            <ul className="flex flex-col gap-1.5 text-tinta">
              {planPrecio.incluye.map((x) => (
                <li key={x} className="flex gap-2">
                  <span aria-hidden="true" className="text-teal-profundo">✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm uppercase tracking-[1.5px] text-tinta-suave">{planPrecio.requisitosTitulo}</h3>
            <ul className="flex flex-col gap-1 text-[15px] text-tinta">
              {requisitos.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <p className="text-[15px] font-medium text-marino">{planPrecio.lector}</p>

          <div className="flex flex-col gap-3">
            <a href={links.comprar} target="_blank" rel="noopener noreferrer" className="faceta-boton bg-teal py-4 pl-6 pr-8 text-center font-semibold text-white hover:bg-teal-profundo">
              {planPrecio.comprar}
            </a>
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="border-[1.5px] border-marino px-6 py-[15px] text-center font-semibold text-marino hover:bg-marino hover:text-white">
              {planPrecio.demo}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-linea pt-4 text-sm text-tinta-suave">
            <span>{planPrecio.mediosTitulo}:</span>
            {planPrecio.medios.map((m) => (
              <span key={m} className="font-semibold text-tinta">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
