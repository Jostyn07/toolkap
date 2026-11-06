// components/inventario/Problema.tsx — sección 2
import { problema } from "@/lib/inventario";

export default function Problema() {
  return (
    <section className="bg-papel">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 py-20 sm:px-6">
        <h2 className="text-[clamp(30px,4vw,46px)] leading-tight text-marino">{problema.titulo}</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {problema.items.map((t) => (
            <li key={t} className="faceta-tarjeta border-t-4 border-teal bg-white p-7 font-display text-xl font-semibold leading-snug text-marino">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
