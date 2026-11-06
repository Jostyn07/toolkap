// components/inventario/Faq.tsx — sección 7
import Link from "next/link";
import { faq } from "@/lib/inventario";

export default function Faq() {
  return (
    <section className="border-t border-linea bg-white">
      <div className="mx-auto flex max-w-[860px] flex-col gap-8 px-4 py-20 sm:px-6">
        <h2 className="text-[clamp(30px,4vw,46px)] leading-tight text-marino">{faq.titulo}</h2>
        <div className="flex flex-col">
          {faq.items.map((it) => (
            <details key={it.p} className="group border-b border-linea">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-marino [&::-webkit-details-marker]:hidden">
                {it.p}
                <span aria-hidden="true" className="text-2xl text-teal-profundo transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 leading-relaxed text-tinta">{it.r}</p>
            </details>
          ))}
        </div>
        <Link href={faq.terminos.href} className="self-start font-medium text-azul underline underline-offset-4">
          {faq.terminos.label}
        </Link>
      </div>
    </section>
  );
}
