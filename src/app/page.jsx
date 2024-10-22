import React from 'react';
import Navbar from '../components/navbar/Navbar';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Bienvenido a PanaEventos</h1>
          <p className="mt-2 text-lg">
            La plataforma que facilita la compra de boletos para eventos en Panamá.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">¿Qué es PanaEventos?</h2>
          <p>
            PanaEventos es una aplicación móvil y web que permite a los usuarios:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Explorar eventos locales: Descubre una variedad de eventos en Panamá.</li>
            <li>Comprar boletos fácilmente: Con un par de clics, adquiere tus boletos.</li>
            <li>Recibir recomendaciones personalizadas: Sugerencias basadas en tus preferencias.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Potencial en Panamá</h2>
          <p>
            Crecimiento del sector de eventos: Panamá es un hub regional para eventos culturales y comerciales.
            PanaEventos facilita la promoción y venta de boletos para artistas locales y eventos internacionales.
          </p>
          <p className="mt-2">
            Apoyo a emprendedores locales: La plataforma permite a los organizadores acceder a una audiencia más amplia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Beneficios para la Cultura y el Turismo</h2>
          <p>
            Fomento de la cultura local: Al promover eventos culturales, PanaEventos ayuda a preservar la diversidad cultural de Panamá.
          </p>
          <p className="mt-2">
            Impulso al turismo: Los turistas pueden acceder fácilmente a información sobre eventos en tiempo real.
          </p>
          <p className="mt-2">
            Comunidad activa: La app crea una comunidad de entusiastas de eventos.
          </p>
        </section>

        <footer className="text-center mt-8">
          <h2 className="text-3xl font-semibold mb-4">Conclusión</h2>
          <p>
            Con PanaEventos, facilitamos la compra de boletos y contribuimos al crecimiento cultural y turístico de Panamá.
            Únete a nosotros y sé parte de una comunidad vibrante que celebra la vida y la cultura panameña.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
