// app/events/[id]/page.jsx
'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Carousel } from "@material-tailwind/react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';


const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch('/assets/eventos.json');
        const data = await response.json();
        const foundEvent = data.Eventos.find(e => e.id_evento.toString() === id);
        if (!foundEvent) {
          throw new Error('Event not found');
        }
        setEvent(foundEvent);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error || 'Event not found'}
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-72">
            <Carousel className="rounded-xl">
              {event.imagenes.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={"image" + index}

                  className="h-full w-full object-cover"
                />
              ))}

            </Carousel>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{event.titulo}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p><span className='font-bold'>{event.fecha_inicio} </span>   hasta    <span className='font-bold'>{event.fecha_fin}</span> </p>


            </div>
            {event.ubicacion && (
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.ubicacion}</span>
              </div>
            )}
            <iframe
              className="relative h-72"
              src={event.mapa}
              width="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            />


            {event.descripcion && (
              <p className="text-gray-600 mb-6">{event.descripcion}</p>
            )}
          </div>
        </div>

        {/* Ticket Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Ticket Information</h2>
          <div className="space-y-4">
            {event.boletos.map((ticket) => (
              <div
                key={ticket.id_boleto}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedTicket?.id_boleto === ticket.id_boleto
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
                  }`}
                onClick={() => setSelectedTicket(ticket)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{ticket.nombre}</h3>
                    <p className="text-gray-600 text-sm">{ticket.descripcion}</p>
                    <div className="mt-2 text-sm">
                      <span className="text-gray-600">Disponibles: </span>
                      <span className="font-medium">{ticket.aforo}</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    ${ticket.precio.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedTicket && (
            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Comprar Ticket
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;