// components/Process.tsx
import { steps } from "@/lib/content";
import { Eyebrow } from "./ui";

export default function Process() {
  return (
    <section id="proceso" className="mx-auto flex max-w-[1240px] flex-wrap gap-10 px-6 py-24">
      <div className="flex flex-[1_1_300px] flex-col gap-3">
        <Eyebrow>NUESTRO PROCESO</Eyebrow>
        <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.08]">Cada paso da forma al siguiente.</h2>
      </div>
      <ol className="grid flex-[3_1_640px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-2 border-t-2 border-marino pt-4">
            <span className="font-display text-4xl font-bold text-teal">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-[19px]">{s.title}</h3>
            <p className="text-sm leading-relaxed text-tinta">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
