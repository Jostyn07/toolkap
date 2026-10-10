// components/Footer.tsx
import Image from "next/image";
import { SmartLink } from "./ui";
import { site } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  TikTok: <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6" />,
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
    </>
  ),
  Facebook: <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8z" />,
};

export default function Footer() {
  const social = site.facebook ? [...site.social, { name: "Facebook", href: site.facebook }] : site.social;

  return (
    <footer className="bg-marino text-niebla">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-6 py-12">
        <Image src="/brand/toolkap-logo-horizontal-negativo.svg" alt="Toolkap" width={210} height={44} className="h-[42px] w-auto" />
        <nav aria-label="Pie de página" className="flex flex-wrap gap-6 text-sm">
          <SmartLink href="#servicios" className="hover:text-white">Servicios</SmartLink>
          <SmartLink href="#productos" className="hover:text-white">Productos</SmartLink>
          <SmartLink href="#cotiza" className="hover:text-white">Cotizar</SmartLink>
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
        </nav>
        <div className="flex w-full flex-wrap items-center justify-between gap-4 border-t border-linea-oscura pt-6">
          <p className="text-[13px] text-[#8fa3b3]">
            © {new Date().getFullYear()} Toolkap · {site.city}
          </p>
          <ul className="flex gap-2" aria-label="Redes sociales">
            {social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Toolkap en ${s.name}`}
                  className="flex h-11 w-11 items-center justify-center border border-linea-oscura text-niebla transition-colors hover:border-teal hover:bg-teal hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[s.name]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}