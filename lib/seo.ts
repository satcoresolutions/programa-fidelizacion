/**
 * Configuración central de SEO.
 * Define NEXT_PUBLIC_SITE_URL en producción.
 */
export const SITE = {
  name: "Programa de fidelización",
  brand: "SatCore Solutions",
  description:
    "Fideliza a tus clientes con un programa digital de puntos, visitas y recompensas. Facilita el seguimiento de la participación de tus clientes y la gestión de sus beneficios.",
  shortDescription:
    "Programa de fidelización digital para gestionar puntos, visitas y recompensas de clientes.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/+$/, ""),
  locale: "es_CO",
  language: "es-CO",
  themeColor: "#132a8e",
  keywords: [
    "programa de fidelización",
    "fidelización de clientes",
    "puntos para clientes",
    "sistema de recompensas",
    "recompensas para clientes",
    "registro de visitas",
    "programa de puntos",
    "gestión de clientes",
    "fidelización para pequeños negocios",
    "SatCore Solutions",
    "PWA",
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
