"use client";
// components/Products.tsx — pestañas de productos con capturas reales
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";
import { Eyebrow } from "./ui";

export default function Products() {
  const [sel, setSel] = useState(0);
  const p = products[sel];
  const external = p.href.startsWith("http");

  return (
    <section id="productos" className="faceta-corte-superior bg-marino text-papel">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 pb-24 pt-[calc(88px+4vw)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[560px] flex-col gap-3">
            <Eyebrow dark>PRODUCTOS TOOLKAP</Eyebrow>
            <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.08] text-white">No solo lo contamos. Lo ponemos a funcionar.</h2>
          </div>
          <div role="tablist" aria-label="Productos" className="flex flex-wrap gap-1.5">
            {products.map((x, i) => (
              <button
                key={x.id}
                role="tab"
                id={`tab-${x.id}`}
                aria-selected={i === sel}
                aria-controls="panel-producto"
                onClick={() => setSel(i)}
                className={`faceta-boton flex flex-col items-start gap-0.5 border border-linea-oscura py-3.5 pl-5 pr-7 text-left text-white transition-colors ${
                  i === sel ? x.color : "bg-transparent hover:bg-marino-2"
                }`}
              >
                <span className="font-display text-lg font-bold">{x.name}</span>
                <span className="text-xs text-niebla">{x.tag}</span>
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" id="panel-producto" aria-labelledby={`tab-${p.id}`} className="flex flex-wrap items-stretch gap-8">
          <div className={`flex min-w-0 flex-[3_1_560px] items-center justify-center border-t-4 bg-papel ${p.color.replace("bg-", "border-")}`}>
            <Image
              key={p.id}
              src={p.image.src}
              alt={p.image.alt}
              width={p.image.width}
              height={p.image.height}
              sizes="(min-width: 1240px) 720px, 100vw"
              className="h-auto max-h-[520px] w-full object-contain"
            />
          </div>
          <div className="flex flex-[2_1_340px] flex-col gap-4">
            <Eyebrow dark>{p.kicker}</Eyebrow>
            <h3 className="text-[34px] leading-tight text-white">{p.headline}</h3>
            <p className="leading-relaxed text-niebla">{p.desc}</p>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] text-[#e6eef5]">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              href={p.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`faceta-boton mt-2 self-start py-3.5 pl-6 pr-8 font-semibold text-white ${p.color}`}
            >
              {p.cta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
