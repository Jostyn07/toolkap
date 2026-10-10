// components/Destello.tsx — esquina facetada de la marca (solo hero y CTA final)
type Props = { size?: number; className?: string };

export default function Destello({ size = 220, className = "" }: Props) {
  const box = { width: size, height: size };
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute right-0 top-0 ${className}`} style={box}>
      <div className="absolute inset-0 bg-marino faceta-destello-1" />
      <div className="absolute inset-0 bg-teal faceta-destello-2" />
      <div className="absolute inset-0 bg-azul faceta-destello-3" />
    </div>
  );
}
