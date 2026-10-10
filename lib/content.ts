// lib/content.ts — textos de servicios, productos y cotizador.
// Precios: deja `price` en null para mostrar "Precio según alcance".

export type Service = {
  id: string;
  name: string;
  title: string;
  problem: string;
  items: string[];
  price: string | null; // ej. "$800.000"
};

export const services: Service[] = [
  {
    id: "web",
    name: "Páginas web",
    title: "Una página que trabaja por ti",
    problem:
      "Tus clientes te buscan en internet y no encuentran nada claro, o encuentran una página lenta que no se ve bien en el celular.",
    items: ["Diseño a la medida de tu marca", "Rápida y adaptada a celulares", "Botones directos a WhatsApp", "Publicación y dominio configurados"],
    price: null,
  },
  {
    id: "app",
    name: "Aplicaciones a medida",
    title: "Tu operación en un solo sistema",
    problem: "Llevas ventas, inventario o clientes en hojas de Excel sueltas y la información nunca cuadra.",
    items: ["Sistema web con usuarios y permisos", "Módulos según tu proceso", "Reportes y exportación a Excel", "Soporte después de la entrega"],
    price: null,
  },
  {
    id: "auto",
    name: "Automatizaciones",
    title: "Que las tareas repetitivas se hagan solas",
    problem: "Tu equipo pierde horas copiando datos entre WhatsApp, formularios y hojas de cálculo.",
    items: ["Flujos con n8n", "Integración con WhatsApp y correo", "Alertas y registros automáticos", "Documentación del flujo"],
    price: null,
  },
  {
    id: "tienda",
    name: "Tiendas en línea",
    title: "Vende por internet con tu propia marca",
    problem: "Dependes de redes sociales para vender y pierdes pedidos porque no tienes catálogo ni pagos en línea.",
    items: ["Catálogo y carrito", "Pagos en línea", "Gestión de pedidos e inventario", "Panel para administrar tu tienda"],
    price: null,
  },
];

export type Product = {
  id: string;
  name: string;
  tag: string;
  color: string; // clase de fondo Tailwind
  kicker: string;
  headline: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const products: Product[] = [
  {
    id: "xiris",
    name: "Xiris",
    tag: "CRM y comunicación",
    color: "bg-xiris",
    kicker: "XIRIS · CRM",
    headline: "CRM y comunicación en un solo lugar",
    desc: "Leads, WhatsApp, llamadas y tareas de todo tu equipo en un panel, con varias sucursales y reportes en tiempo real.",
    features: ["WhatsApp y llamadas integrados", "Comunicación interna y tickets", "Embudos y conversión por etapa", "Sucursales, equipos y reportes"],
    cta: "Explorar Xiris",
    href: "#", // [CONFIRMAR] URL de Xiris
    image: { src: "/products/xiris.png", alt: "Panel de Xiris con leads, llamadas, WhatsApp y conversión por etapa", width: 1359, height: 594 },
  },
  {
    id: "credipro",
    name: "CrediPro",
    tag: "Crédito y clientes",
    color: "bg-credipro",
    kicker: "CREDIPRO · PRÉSTAMOS",
    headline: "Una visión clara de tu cartera",
    desc: "Clientes, préstamos, pagos y cobranza en un panel, con el capital pendiente, la mora y los próximos pagos siempre a la vista.",
    features: ["Clientes, préstamos y pagos", "Calendario y cobranza", "Caja y documentos", "Reportes y score con IA"],
    cta: "Conocer CrediPro",
    href: "#", // [CONFIRMAR] URL de CrediPro
    image: { src: "/products/credipro.png", alt: "Panel de CrediPro con clientes, préstamos, capital pendiente y estado de la cartera", width: 1589, height: 732 },
  },
  {
    id: "fincil",
    name: "Fincil.cloud",
    tag: "Gestión y ventas",
    color: "bg-fincil",
    kicker: "FINCIL.CLOUD · GESTIÓN",
    headline: "Controla tu negocio desde un solo lugar",
    desc: "Productos, inventario, compras, ventas, producción y finanzas conectados en una sola plataforma. Pruébalo gratis 7 días.",
    features: ["Ventas y pedidos", "Inventario al día", "Productos y producción", "Finanzas y facturación"],
    cta: "Probar Fincil gratis",
    href: "https://fincil.cloud", // [CONFIRMAR]
    image: { src: "/products/fincil.png", alt: "Panel de Fincil con ventas, inventario y productos más vendidos", width: 465, height: 400 },
  },
];

export const needs = [
  { name: "Página web", hint: "Landing o sitio corporativo" },
  { name: "Aplicación a medida", hint: "Un sistema para tu operación" },
  { name: "Automatización", hint: "Conectar tus herramientas" },
  { name: "Tienda en línea", hint: "Vender por internet" },
  { name: "Aún no lo sé", hint: "Te ayudamos a definirlo" },
];

export const timeframes = ["Lo antes posible", "En 1 a 2 meses", "Solo estoy explorando"];

export const steps = [
  { title: "Entendemos", text: "Escuchamos tu idea y cómo funciona tu negocio." },
  { title: "Diseñamos", text: "Te mostramos cómo se verá antes de programar." },
  { title: "Construimos", text: "Desarrollamos por etapas y ves avances reales." },
  { title: "Lanzamos", text: "Publicamos y te acompañamos después." },
];
