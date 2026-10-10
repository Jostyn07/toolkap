"use client";
// components/WhatsAppFloat.tsx — botón flotante de WhatsApp.
// Al llegar al footer sube para no tapar las redes y hace un pequeño salto.
import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloat() {
  const href = whatsappLink("Hola Toolkap, quiero información sobre un proyecto.");
  const [lift, setLift] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const update = () => {
      raf.current = null;
      const visible = window.innerHeight - footer.getBoundingClientRect().top;
      setLift(Math.max(0, visible));
      setAtBottom(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4);
    };
    const onScroll = () => {
      if (raf.current == null) raf.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!href) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 transition-transform duration-300 ease-out sm:bottom-6 sm:right-6"
      style={{ transform: `translateY(-${lift}px)` }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className={`flex h-14 items-center gap-2 rounded-full bg-[#25d366] px-4 text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 ${
          atBottom ? "wa-pop" : ""
        }`}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
        <span className="hidden text-sm font-semibold sm:inline">{atBottom ? "¿Hablamos?" : "Escríbenos"}</span>
      </a>
    </div>
  );
}