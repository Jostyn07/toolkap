"use client";
// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#proceso", label: "Proceso" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-linea bg-white/95 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3.5">
        <Link href="#inicio" aria-label="Toolkap, inicio">
          <Image src="/brand/toolkap-logo-horizontal.svg" alt="Toolkap" width={182} height={38} priority className="h-[38px] w-auto" />
        </Link>

        <div className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-tinta hover:text-marino">
              {l.label}
            </Link>
          ))}
          <Link href="#cotiza" className="faceta-boton bg-marino py-3 pl-5 pr-7 font-semibold text-white hover:bg-teal-profundo">
            Cotiza tu proyecto →
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-linea bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-medium text-tinta">
                {l.label}
              </Link>
            ))}
            <Link href="#cotiza" onClick={() => setOpen(false)} className="faceta-boton mt-2 bg-marino py-3.5 pl-5 pr-7 font-semibold text-white">
              Cotiza tu proyecto →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
