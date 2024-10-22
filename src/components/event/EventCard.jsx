const EventCard = ({ event, onClick }) => {
  const getMinPrice = () => {
    if (!event.boletos.length) return 0;
    return Math.min(...event.boletos.map(ticket => ticket.precio));
  };

  // const getImageUrl = () => {
  //   if (!event.imagenes) return '/api/placeholder/400/300';
  //   return Array.isArray(event.imagenes) ? event.imagenes[0] : event.imagenes;
  // };

  return (
    <div 
      onClick={() => onClick(event)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
    >
      <div className="relative h-48">
        <img
          src={event.imagenes[0]}
          alt={event.titulo}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{event.titulo}</h3>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{formatDate(event.fecha_inicio)}</span>
          <span className="font-medium text-green-600">
            ${getMinPrice().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};