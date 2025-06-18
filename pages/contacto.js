import Head from "next/head";
import Image from "next/image";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Contáctanos para resolver tus dudas sobre SEO y optimización web."
        />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Envíanos tus preguntas o sugerencias y te ayudaremos encantadas."
        />
        <meta property="og:image" content="/images/mariposa2.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container">
        <h1>📩 Contáctanos</h1>
        <p>¿Tienes dudas o deseas asesoría personalizada? Escríbenos y con gusto te ayudamos.</p>

        <Image
          src="/images/mariposa2.png"
          width={600}
          height={400}
          alt="Mariposa celeste del contacto"
        />
      </div>
    </>
  );
}
