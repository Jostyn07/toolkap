"use client";
// components/ui.tsx — piezas pequeñas reutilizables
import Link from "next/link";

type BtnProps = { href: string; children: React.ReactNode; className?: string; onClick?: () => void; external?: boolean; "aria-label"?: string };

// Enlace que siempre desplaza a la sección, aunque la URL ya tenga ese #hash.
export function SmartLink({ href, children, className = "", onClick, external, "aria-label": ariaLabel }: BtnProps) {
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={className}
        onClick={(e) => {
          onClick?.();
          const el = document.getElementById(href.slice(1));
          if (!el) return;
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", href);
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} onClick={onClick} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </Link>
  );
}

export function PrimaryButton({ className = "", ...props }: BtnProps) {
  return (
    <SmartLink
      {...props}
      className={`faceta-boton inline-flex items-center gap-2 bg-marino py-4 pl-6 pr-8 font-semibold text-white transition-colors hover:bg-teal-profundo ${className}`}
    />
  );
}

export function SecondaryButton({ className = "", ...props }: BtnProps) {
  return (
    <SmartLink
      {...props}
      className={`inline-flex items-center border-[1.5px] border-marino px-6 py-[15px] font-semibold text-marino transition-colors hover:bg-marino hover:text-white ${className}`}
    />
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[13px] font-semibold tracking-[2px] ${dark ? "text-teal-claro" : "text-teal-profundo"}`}>{children}</p>
  );
}