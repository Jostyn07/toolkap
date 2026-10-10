// app/fonts.ts — tipografías de marca. Usar en app/layout.tsx:
// <html lang="es" className={`${outfit.variable} ${jakarta.variable}`}>
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});
