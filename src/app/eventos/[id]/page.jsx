// app/events/[id]/page.jsx
'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Carousel } from "@material-tailwind/react";
import Cart from "../../Cart/page.jsx";


const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTickets, setSelectedTickets] = useState({});
  const [showCart, setShowCart] = useState(false);

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
  // Object to store selected ticket quantities

  // Handle change in the quantity of tickets for a specific ticket type
  const handleQuantityChange = (boleto, quantity) => {
    // Ensure the quantity doesn't exceed the available tickets
    if (quantity <= boleto.aforo) {
      setSelectedTickets({
        ...selectedTickets,
        [boleto.id_boleto]: {
          nombre: boleto.nombre,
          precio: boleto.precio,
          cantidad: quantity
        }
      });
      setError(null);
    } else {
      setError(`La cantidad no puede ser mayor a ${boleto.aforo}`);
    }
  };

  // Function to handle purchase
  const handlePurchase = () => {
    if (Object.keys(selectedTickets).length === 0) {
      setError("Debes seleccionar al menos un boleto.");
      return;
    }

    // Continue with the purchase logic...
    setShowCart(true)
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
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
              className="relative h-72 w-1/2"
              src={event.mapa}

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
            {event.boletos.map((boleto) => (
              <div
                key={boleto.id_boleto}
                className={`border rounded-lg p-4 transition-colors ${selectedTickets[boleto.id_boleto]?.cantidad
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{boleto.nombre}</h3>
                    <p className="text-gray-600 text-sm">{boleto.descripcion}</p>
                    <div className="mt-2 text-sm">
                      <span className="text-gray-600">Disponibles: </span>
                      <span className="font-medium">{boleto.aforo}</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    ${boleto.precio.toFixed(2)}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mt-4">
                  <label htmlFor={`quantity-${boleto.id_boleto}`} className="block text-sm font-medium text-gray-700">
                    Cantidad
                  </label>
                  <input
                    type="number"
                    id={`quantity-${boleto.id_boleto}`}
                    min="0"
                    max={boleto.aforo}
                    value={selectedTickets[boleto.id_boleto]?.cantidad || ''}
                    onChange={(e) => handleQuantityChange(boleto, parseInt(e.target.value) || 0)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {error && (
            <div className="mt-4 text-red-600">
              {error}
            </div>
          )}

          {/* Purchase Button */}
          {Object.keys(selectedTickets).length > 0 && (
            <div className="mt-8">
              <button
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={handlePurchase}
              >
                Comprar Tickets
              </button>
            </div>
          )}
        </div>
      </div>
      {showCart && <Cart boletos={Object.values(selectedTickets)} open={showCart} setOpen={setShowCart}/>}
    </div>
  );
};

export default EventDetails;