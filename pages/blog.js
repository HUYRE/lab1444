import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Mi Sitio Optimizado</title>
        <meta name="description" content="Lee artículos sobre SEO y desarrollo web." />
      </Head>

      <div className="container">
        <h1>📚 Bienvenida al Blog</h1>
        <p>Encuentra artículos, guías y tips sobre desarrollo web y posicionamiento SEO con Next.js.</p>
      </div>
    </>
  );
}
