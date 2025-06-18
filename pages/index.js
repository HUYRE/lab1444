import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Inicio</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="google-site-verification" content="_mY4kYJMSlzp0OELPC60_X2_EV-AJLeDcUNhK_EftGE" />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>

      <div className="container">
        <h1>✨ Bienvenida a mi página optimizada</h1>
        <p>🚀 Aprende cómo mejorar el <strong>rendimiento y SEO</strong> en Next.js.</p>

        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          priority
        />

        <DynamicComponent />
      </div>
    </>
  );
}
