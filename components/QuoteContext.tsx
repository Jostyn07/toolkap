"use client";
// components/QuoteContext.tsx — permite que "Cotizar este servicio" preseleccione el cotizador.
import { createContext, useContext, useState } from "react";

type Ctx = { need: number; setNeed: (i: number) => void; step: number; setStep: (s: number) => void };
const QuoteContext = createContext<Ctx | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [need, setNeed] = useState(-1);
  const [step, setStep] = useState(1);
  return <QuoteContext.Provider value={{ need, setNeed, step, setStep }}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const c = useContext(QuoteContext);
  if (!c) throw new Error("useQuote debe usarse dentro de QuoteProvider");
  return c;
}
