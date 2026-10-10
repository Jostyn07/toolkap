// components/FinalCta.tsx
import Destello from "./Destello";
import { PrimaryButton } from "./ui";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-papel">
      <Destello size={300} className="hidden sm:block" />
      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-5 px-6 py-24">
        <h2 className="max-w-[680px] text-[clamp(32px,4.5vw,54px)] leading-[1.05]">
          No necesitas todas las respuestas. Solo una idea para empezar.
        </h2>
        <PrimaryButton href="#cotiza" className="self-start">
          Cotiza tu proyecto →
        </PrimaryButton>
      </div>
    </section>
  );
}
