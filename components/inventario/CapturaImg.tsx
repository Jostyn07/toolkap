// components/inventario/CapturaImg.tsx — captura real o marcador visible si aún falta.
import Image from "next/image";
import type { Captura } from "@/lib/inventario";

export default function CapturaImg({ c, sizes, priority, className = "" }: { c: Captura; sizes: string; priority?: boolean; className?: string }) {
  if (!c.src) {
    return (
      <div
        role="img"
        aria-label={c.alt}
        style={{ aspectRatio: `${c.width} / ${c.height}` }}
        className={`flex w-full items-center justify-center border-2 border-dashed border-teal bg-papel p-4 text-center font-mono text-xs font-semibold text-teal-profundo ${className}`}
      >
        [CAPTURA PENDIENTE: {c.nombre}]
      </div>
    );
  }
  return <Image src={c.src} alt={c.alt} width={c.width} height={c.height} sizes={sizes} priority={priority} className={`h-auto w-full ${className}`} />;
}
