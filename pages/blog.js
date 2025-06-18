import Head from "next/head";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Lee artículos sobre SEO y desarrollo web en nuestro blog optimizado."
        />
        <meta property="og:title" content="Blog - Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Explora técnicas avanzadas de optimización y desarrollo web con Next.js."
        />
        <meta property="og:image" content="/images/mariposa1.png" />
        <meta property="og:type" content="article" />
      </Head>

      <div className="container">
        <h1>📚 Bienvenida al Blog</h1>
        <p>Encuentra artículos, guías y tips sobre desarrollo web y posicionamiento SEO con Next.js.</p>

        <Image
          src="/images/mariposa1.png"
          width={600}
          height={400}
          alt="Mariposa violeta del blog"
        />
      </div>
    </>
  );
}
