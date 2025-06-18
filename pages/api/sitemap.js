const BASE_URL = "https://lab1444-git-master-anais-projects-b4f85305.vercel.app";

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
