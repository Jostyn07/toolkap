// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-marino text-niebla">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-6 py-12">
        <Image src="/brand/toolkap-logo-horizontal-negativo.svg" alt="Toolkap" width={210} height={44} className="h-[42px] w-auto" />
        <nav aria-label="Pie de página" className="flex flex-wrap gap-6 text-sm">
          <Link href="#servicios" className="hover:text-white">Servicios</Link>
          <Link href="#productos" className="hover:text-white">Productos</Link>
          <Link href="#cotiza" className="hover:text-white">Cotizar</Link>
          {site.facebook && (
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
          )}
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
        </nav>
        <p className="w-full text-[13px] text-[#8fa3b3]">
          © {new Date().getFullYear()} Toolkap · {site.city}
        </p>
      </div>
    </footer>
  );
}
