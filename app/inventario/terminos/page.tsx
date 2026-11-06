// BORRADOR para revisión del dueño (y de preferencia de un abogado o contador) antes de publicar.
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de venta · Toolkap Inventario",
  robots: { index: false },
};

const secciones = [
  { t: "Producto", p: ["Licencia de uso de por vida de Toolkap Inventario para 2 computadores con Windows 10 u 11 de 64 bits. Incluye la app Toolkap Escáner para Android, actualizaciones y soporte.", "El lector de códigos USB no hace parte de la venta."] },
  { t: "Precio y pago", p: ["$50.000 COP, pago único, procesado por Wompi. No hay cobros recurrentes."] },
  { t: "Entrega y activación", p: ["Después del pago descargas el instalador y nos envías el código de equipo que muestra el programa. Te enviamos una clave de activación por cada computador.", "Cada clave funciona solo en el computador de su código."] },
  { t: "Derecho de retracto", p: ["Puedes pedir el reembolso completo dentro de los 5 días hábiles siguientes a la compra, siempre que no hayas activado el programa (Ley 1480 de 2011, artículo 47).", "Después de activado, el retracto no aplica por tratarse de un programa informático ya abierto."] },
  { t: "Garantía de funcionamiento", p: ["Si tu computador cumple los requisitos y no logramos que el programa funcione con nuestro soporte, te devolvemos el 100 % del pago."] },
  { t: "Cambio de computador", p: ["Si formateas o cambias de computador no hay reembolso, pero te damos una clave nueva sin costo."] },
  { t: "Cómo pedir un reembolso", p: [`Escríbenos por WhatsApp o a ${site.email} con la referencia del pago. Devolvemos el dinero por el mismo medio de pago en un máximo de 15 días hábiles.`] },
  { t: "Tus datos", p: ["Usamos tu nombre, correo y celular solo para entregarte la licencia y darte soporte. Tus datos del negocio quedan en tu computador; no los recibimos."] },
];

export default function Terminos() {
  return (
    <>
      <Header />
      <main className="bg-papel">
        <article className="mx-auto flex max-w-[760px] flex-col gap-8 px-4 py-16 sm:px-6">
          <h1 className="text-[clamp(30px,4vw,44px)] leading-tight text-marino">Términos de venta y devoluciones</h1>
          {secciones.map((s) => (
            <section key={s.t} className="flex flex-col gap-2">
              <h2 className="text-xl text-marino">{s.t}</h2>
              {s.p.map((x) => (
                <p key={x} className="leading-relaxed text-tinta">{x}</p>
              ))}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
