// app/privacidad-escaner/page.tsx — Política de privacidad de la app Android «Toolkap Escáner».
// URL pública: https://toolkap.cloud/privacidad-escaner  ← esta es la que se pega en Google Play Console.
// Página independiente (sin Header/Footer de la portada, porque esos enlaces apuntan a anclas de la página principal).
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

const UPDATED = "6 de noviembre de 2026";

export const metadata: Metadata = {
  title: "Política de privacidad · Toolkap Escáner",
  description: "Cómo la app Toolkap Escáner usa la cámara, los códigos de barras y las fotos de productos. Los datos no salen de la red Wi-Fi del negocio.",
  robots: { index: true, follow: true },
};

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl text-marino">
        <span className="mr-2 text-teal">{String(n).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-tinta">{children}</div>
    </section>
  );
}

export default function PrivacidadEscaner() {
  return (
    <>
      <header className="bg-marino">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link href="/" aria-label="Toolkap, inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/toolkap-logo-horizontal-negativo.svg" alt="Toolkap" className="h-8 w-auto" />
          </Link>
          <Link href="/" className="text-sm text-niebla hover:text-white">Volver a toolkap</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 leading-relaxed">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-profundo">Toolkap Escáner · Android</p>
        <h1 className="mt-2 text-3xl text-marino sm:text-4xl">Política de privacidad</h1>
        <p className="mt-2 text-sm text-tinta-suave">Última actualización: {UPDATED}</p>

        <div className="mt-8 border-l-4 border-teal bg-white p-5 text-tinta">
          <p>
            <b>En resumen:</b> Toolkap Escáner usa la cámara del celular para leer códigos de barras y tomar fotos de productos,
            y los envía <b>solo al computador del negocio con el que lo vinculaste, dentro de la misma red Wi-Fi</b>.
            No pedimos tu nombre, correo ni ubicación, no hay publicidad ni analítica, y nada se envía a internet ni a servidores de Toolkap.
          </p>
        </div>

        <Section n={1} title="Qué es la app">
          <p>
            Toolkap Escáner («la app») es la aplicación complementaria del programa de escritorio <b>Toolkap Inventario</b>,
            un sistema de inventario, ventas y caja para pequeños negocios que funciona en un computador con Windows.
            La app convierte el celular en un lector de códigos de barras y en una cámara para fotografiar productos,
            y envía esa información al computador del mismo negocio.
          </p>
          <p>La app no funciona sola como inventario: no guarda productos, ventas ni clientes en el celular.</p>
        </Section>

        <Section n={2} title="Responsable del tratamiento">
          <p>
            Toolkap, {site.city}. Correo de contacto:{" "}
            <a className="text-azul underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </Section>

        <Section n={3} title="Datos que usa la app">
          <ul className="list-disc space-y-2 pl-6">
            <li><b>Cámara.</b> Solo se activa cuando tocas «Escanear» o «Foto del producto». Se usa para leer códigos de barras y para tomar fotos de productos. No se graba video ni audio.</li>
            <li><b>Códigos de barras leídos.</b> Se envían al computador vinculado para buscar o registrar el producto. No se guarda un historial en el celular.</li>
            <li><b>Fotos de productos.</b> Se reducen de tamaño y se envían al computador vinculado, donde quedan asociadas al producto. La app no guarda copias en la galería del celular.</li>
            <li><b>Datos de vinculación.</b> El nombre que le das al celular (por ejemplo, «Celular de bodega»), la dirección del computador en la red local y una clave secreta de acceso. Se guardan en el celular y en el computador vinculado.</li>
          </ul>
          <p>
            La app <b>no</b> recopila nombre, correo, teléfono, ubicación, contactos, archivos, identificadores publicitarios
            ni ningún otro dato personal. No contiene publicidad ni herramientas de analítica, seguimiento o reporte de errores de terceros.
          </p>
        </Section>

        <Section n={4} title="Permisos de Android">
          <ul className="list-disc space-y-2 pl-6">
            <li><b>Cámara</b> (<code>CAMERA</code>): para leer códigos de barras y tomar fotos de productos. Puedes negarlo; en ese caso la app no podrá escanear.</li>
            <li><b>Acceso a la red</b> (<code>INTERNET</code>): necesario para comunicarse con el computador del negocio <b>dentro de la red Wi-Fi local</b>. La app no se conecta a servidores en internet.</li>
          </ul>
        </Section>

        <Section n={5} title="A dónde viajan los datos">
          <p>
            Toda la comunicación ocurre directamente entre el celular y el computador del negocio, dentro de la misma red Wi-Fi.
            Los datos <b>no pasan por internet</b> ni por servidores de Toolkap o de terceros.
            Toolkap no tiene acceso a los códigos, fotos ni a la información del negocio.
          </p>
          <p>No vendemos, alquilamos ni compartimos datos con nadie.</p>
        </Section>

        <Section n={6} title="Conservación y eliminación">
          <ul className="list-disc space-y-2 pl-6">
            <li>Los códigos y las fotos quedan guardados únicamente en el computador del negocio, bajo el control de su propietario, que puede borrarlos desde Toolkap Inventario.</li>
            <li>Al <b>desvincular</b> el celular desde el computador, su clave deja de funcionar de inmediato.</li>
            <li>Al <b>desinstalar la app</b> se borran del celular todos sus datos, incluida la clave de vinculación.</li>
          </ul>
        </Section>

        <Section n={7} title="Seguridad">
          <p>
            Cada celular se vincula escaneando un código QR que se muestra en el computador. Ese código sirve <b>una sola vez</b> y
            vence a los 10 minutos. Al vincularse, el celular recibe una clave secreta propia, y el computador solo acepta conexiones
            provenientes de su red local. El propietario puede ver los celulares vinculados y revocar el acceso de cualquiera en todo momento.
          </p>
        </Section>

        <Section n={8} title="Modo de prueba">
          <p>
            La opción «Probar sin computador» permite ver cómo funciona la app sin vincularla. En ese modo los códigos leídos
            solo se muestran en pantalla y no se envían ni se guardan en ningún lugar.
          </p>
        </Section>

        <Section n={9} title="Menores de edad">
          <p>La app es una herramienta de trabajo para negocios y no está dirigida a menores de 18 años.</p>
        </Section>

        <Section n={10} title="Tus derechos">
          <p>
            De acuerdo con la Ley 1581 de 2012 de Colombia y sus normas reglamentarias, puedes conocer, actualizar, rectificar
            y solicitar la supresión de tus datos, así como revocar la autorización para su tratamiento. Como la app no envía datos
            a Toolkap, estas solicitudes normalmente se atienden directamente en el computador del negocio. Para cualquier consulta,
            escríbenos a <a className="text-azul underline" href={`mailto:${site.email}`}>{site.email}</a> y responderemos en un plazo máximo de 15 días hábiles.
          </p>
        </Section>

        <Section n={11} title="Cambios a esta política">
          <p>
            Si esta política cambia, publicaremos la nueva versión en esta misma dirección e indicaremos la fecha de actualización.
          </p>
        </Section>
      </main>

      <footer className="bg-marino">
        <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-niebla">
          © {new Date().getFullYear()} Toolkap · {site.city} ·{" "}
          <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </footer>
    </>
  );
}
