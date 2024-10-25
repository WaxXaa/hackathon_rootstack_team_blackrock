import React from "react";
import { Timeline } from "./ui/timeline";
import Image from "next/image";

export default function ScrollContent() {
  const data = [
    {
      title: "¿Qué es PanaEventos?",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-lg font-normal mb-8">
            PanaEventos es una plataforma web que permite a los usuarios
          </p>
          <ul className="list-disc list-inside mt-2">
            <li className="mb-3">Explorar eventos locales: Descubre una variedad de eventos en Panamá.</li>
            <li className="mb-3">Comprar boletos fácilmente: Con un par de clics, adquiere tus boletos.</li>
            <li className="mb-3">Recibir recomendaciones personalizadas: Sugerencias basadas en sus preferencias.</li>
          </ul>


        </div>
      ),
    },
    {
      title: "Potencial en Panamá",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            Crecimiento del sector de eventos: Panamá es un hub regional para eventos culturales y comerciales.
            PanaEventos facilita y promueve el conocimiento de locales y eventos tanto a nacionales como a extranjeros.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            Con esta plataforma los emprendedores locales pueden dar a conocer su oferta a una mayor audiencia.
          </p>
          <div className="img">
            <Image
              src="https://media.gq.com.mx/photos/5c3fb001f9952159a05cf987/16:9/w_2240,c_limit/GettyImages-856389066.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover lg:h-full w-full shadow-lg" //original className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" por si se porta mal
            />
          </div>
        </div>
      ),
    },
    {
      title: "Beneficios para la Cultura y el Turismo",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              Fomento de la cultura local: Al promover eventos culturales, PanaEventos ayuda a preservar la diversidad cultural de Panamá.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              Impulso al turismo: Los turistas pueden acceder fácilmente a información sobre eventos en tiempo real.
          </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              Comunidad activa: La app crea una comunidad de entusiastas de eventos.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              Facilitamos la compra de boletos y contribuimos al crecimiento cultural y turístico de Panamá.
          </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
