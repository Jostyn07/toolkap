// components/ui.tsx — piezas pequeñas reutilizables
import Link from "next/link";

type BtnProps = { href: string; children: React.ReactNode; className?: string; onClick?: () => void; external?: boolean };

export function PrimaryButton({ href, children, className = "", onClick, external }: BtnProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`faceta-boton inline-flex items-center gap-2 bg-marino py-4 pl-6 pr-8 font-semibold text-white transition-colors hover:bg-teal-profundo ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, className = "" }: BtnProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center border-[1.5px] border-marino px-6 py-[15px] font-semibold text-marino transition-colors hover:bg-marino hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[13px] font-semibold tracking-[2px] ${dark ? "text-teal-claro" : "text-teal-profundo"}`}>{children}</p>
  );
}
