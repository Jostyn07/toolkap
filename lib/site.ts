// lib/site.ts — datos de contacto y enlaces. Edita aquí y se actualiza toda la página.
export const site = {
  name: "Toolkap",
  url: "https://toolkap.cloud", // [CONFIRMAR] dominio final
  email: "toolkapcorp@gmail.com",
  // Número en formato internacional sin "+" ni espacios, ej. "573001234567". Vacío = se oculta el botón de WhatsApp.
  whatsapp: "",
  facebook: "", // URL de la página de Facebook
  social: [
    { name: "Instagram", href: "https://www.instagram.com/toolkap/" },
    { name: "TikTok", href: "https://www.tiktok.com/@toolkapcorp" },
    { name: "YouTube", href: "https://www.youtube.com/@Toolkap" },
  ],
  city: "Barranquilla, Colombia",
};

export function whatsappLink(text: string) {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}