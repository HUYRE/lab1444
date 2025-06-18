const BASE_URL = "https://mi-sitio.vercel.app"; // Cambia esto si ya tienes tu dominio

// 🐞 Simulación de una base de datos
const rutasDinamicas = [
  { slug: "/" },
  { slug: "/blog" },
  { slug: "/contacto" },
  { slug: "/producto/nuevo-lanzamiento" },
  { slug: "/noticia/evento-especial" },
];

export default async function handler(req, res) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${rutasDinamicas
      .map((item) => {
        return `
          <url>
            <loc>${BASE_URL}${item.slug}</loc>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).end(sitemap);
}
