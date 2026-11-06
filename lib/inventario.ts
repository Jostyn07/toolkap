// lib/inventario.ts — todos los textos de /inventario. Los componentes no llevan texto propio.
import { whatsappLink } from "./site";

export type Captura = { src: string | null; nombre: string; alt: string; width: number; height: number };

// src en null = se muestra el marcador [CAPTURA PENDIENTE]. Al tener la captura real,
// guárdala en public/products/inventario/ y pon aquí su ruta y medidas reales.
const captura = (nombre: string, alt: string): Captura => ({ src: null, nombre, alt, width: 1600, height: 1000 });

export const capturas = {
  hero: { src: "/products/inventario/hero-productos.png", nombre: "hero-productos", alt: "Lista de productos de Toolkap Inventario con costo, precio y existencias, en modo local", width: 1581, height: 850 },
  ventas: { src: "/products/inventario/ventas-carrito.png", nombre: "ventas-carrito", alt: "Pantalla de nueva venta con el carrito, el descuento y los medios de pago", width: 1596, height: 847 },
  caja: captura("caja-cierre", "Cierre de caja con el efectivo esperado y la diferencia"),
  clientes: { src: "/products/inventario/clientes-cartera.png", nombre: "clientes-cartera", alt: "Venta por cobrar con el cliente, su saldo, el abono inicial y la fecha de vencimiento", width: 1599, height: 851 },
  reportes: captura("reportes", "Reporte de ventas por período y por método de pago"),
  copias: captura("copias-seguridad", "Configuración de copias de seguridad con el estado Protegido"),
  celular: { ...captura("celular-escaner", "App Toolkap Escáner leyendo un código de barras"), width: 900, height: 1600 },
  productos: { src: "/products/inventario/inventario-entradas.png", nombre: "inventario-entradas", alt: "Registro de entradas de inventario con lector USB o celular", width: 1591, height: 848 },
};

export const precio = { valor: "$50.000", moneda: "COP", centavos: 5000000 };

// Vacío = se oculta el botón de Google Play (la app aún está en prueba cerrada).
export const playStoreUrl = "";

export const mensajeDemo = "Hola, vengo de toolkap.cloud/inventario. Quiero una demostración de Toolkap Inventario.";
export const mensajeCompra = "Hola, vengo de toolkap.cloud/inventario. Quiero comprar la licencia de Toolkap Inventario.";
export const mensajeContacto = "Hola, vengo de toolkap.cloud/inventario. Tengo una pregunta sobre Toolkap Inventario.";

export const links = {
  demo: whatsappLink(mensajeDemo) ?? "#precio",
  // Fase 1: la compra va a WhatsApp. En la Fase 2 se cambia por el formulario y Wompi.
  comprar: whatsappLink(mensajeCompra) ?? "#precio",
  contacto: whatsappLink(mensajeContacto) ?? "#precio",
};

export const requisitos = [
  "Windows 10 u 11 de 64 bits",
  "Pantalla de 1024 × 680 o más",
  "Celular Android 7.0 o superior para el escáner",
];

export const meta = {
  title: "Toolkap Inventario · Vende y controla tu negocio sin internet",
  description:
    "Software de inventario, ventas y caja para tu computador. Funciona sin internet. Usa tu celular como escáner. Licencia de $50.000, pago único.",
  ogImage: "/products/inventario/og-inventario.png",
};

export const hero = {
  etiqueta: "Toolkap Inventario",
  titulo: "Se fue el internet. No tu negocio.",
  subtitulo: "Vende, controla tu inventario y cuadra tu caja desde tu computador, con o sin conexión.",
  principal: { label: `Comprar licencia — ${precio.valor}`, href: "#precio" },
  secundario: { label: "Ver cómo funciona", href: "#como-funciona" },
};

export const problema = {
  titulo: "¿Te ha pasado?",
  items: [
    "Se cayó el internet y no pudiste cobrar.",
    "No sabes cuánto te queda de cada producto.",
    "Al cierre, la caja no cuadra.",
  ],
};

export const pasos = {
  etiqueta: "Cómo funciona",
  titulo: "Tres pasos y estás vendiendo.",
  items: [
    "Instálalo en tu computador.",
    "Carga tus productos o impórtalos desde Excel.",
    "Vende y controla todo, sin depender del internet.",
  ],
};

export const modulos = {
  etiqueta: "Módulos",
  titulo: "Todo lo que tu negocio necesita.",
  items: [
    { titulo: "Productos e inventario", funciones: ["Códigos de barras, costo y precio", "Stock mínimo y alertas", "Entradas, salidas e historial"], captura: capturas.productos },
    { titulo: "Ventas", funciones: ["Busca por nombre o código", "Lector USB y descuentos", "Varios métodos de pago"], captura: capturas.ventas },
    { titulo: "Caja", funciones: ["Apertura con fondo inicial", "Ingresos y retiros", "Cierre con efectivo esperado"], captura: capturas.caja },
    { titulo: "Clientes y cartera", funciones: ["Ventas a crédito y abonos", "Saldos y cuentas vencidas", "Historial de pagos"], captura: capturas.clientes },
    { titulo: "Reportes", funciones: ["Ventas por período y producto", "Ganancias y valor del inventario", "Exporta a Excel"], captura: capturas.reportes },
    { titulo: "Copias de seguridad", funciones: ["Copias automáticas", "Copia adicional en memoria USB", "Restauración en un clic"], captura: capturas.copias },
  ],
};

export const celular = {
  etiqueta: "Toolkap Escáner",
  titulo: "Tu celular también escanea.",
  items: [
    { titulo: "Escanea y vende", texto: "El producto entra solo al carrito." },
    { titulo: "Registra entradas", texto: "Escanea lo que llega y súmalo al stock." },
    { titulo: "Crea productos", texto: "Lee el código de barras al registrar." },
    { titulo: "Fotos al instante", texto: "Toma la foto y aparece en el computador." },
  ],
  red: "Celular y computador conectados a la misma red Wi-Fi.",
  boton: "Descargar Toolkap Escáner en Google Play",
};

export const planPrecio = {
  titulo: "Licencia Toolkap Inventario",
  valor: `${precio.valor} ${precio.moneda}`,
  tipo: "Pago único",
  incluyeTitulo: "Incluye",
  incluye: [
    "Licencia para 2 computadores",
    "Todos los módulos",
    "App Toolkap Escáner para Android",
    "Copias de seguridad",
    "Actualizaciones y soporte de por vida",
  ],
  requisitosTitulo: "Requisitos",
  lector: "Lector de códigos USB no incluido (opcional).",
  comprar: "Comprar ahora",
  demo: "Prefiero una demostración",
  mediosTitulo: "Paga con",
  medios: ["Tarjeta", "PSE", "Nequi", "Bancolombia"],
};

export const faq = {
  titulo: "Preguntas frecuentes",
  items: [
    { p: "¿Necesito internet para usarlo?", r: "No. Funciona en tu computador. Solo la conexión con el celular usa tu red Wi-Fi local." },
    { p: "¿En qué computador funciona?", r: "En Windows 10 u 11 de 64 bits, con pantalla de 1024 × 680 o más." },
    { p: "¿Pago mensualidad?", r: `No. Es un pago único de ${precio.valor}, con actualizaciones y soporte de por vida.` },
    { p: "¿En cuántos computadores lo puedo usar?", r: "En 2. Cada computador recibe su propia clave de activación." },
    { p: "¿Cómo lo recibo después de pagar?", r: "Descargas el instalador, nos envías el código que muestra el programa y te enviamos tu clave de activación." },
    { p: "¿Puedo usar mi lector de códigos USB?", r: "Sí. El lector no viene incluido." },
    { p: "¿Qué pasa si se daña mi computador?", r: "Haz copias de seguridad desde el programa y restáuralas en el nuevo equipo. Te damos una clave nueva sin costo." },
    { p: "¿Necesito la app del celular?", r: "No es obligatoria. Es un complemento gratuito." },
  ],
  terminos: { label: "Términos de venta y devoluciones", href: "/inventario/terminos" },
};

export const ctaFinal = {
  titulo: "Tu negocio no se detiene.",
  comprar: "Comprar licencia",
  whatsapp: "Escríbenos por WhatsApp",
};
