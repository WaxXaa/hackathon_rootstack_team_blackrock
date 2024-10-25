/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '', // Puedes dejarlo vacío
          pathname: '/**', // Esto permite acceder a cualquier ruta dentro del dominio
        },
        {
            protocol: 'https',
            hostname: 'live.staticflickr.com', // Agrega el dominio de la imagen
            port: '', // Puedes dejarlo vacío
            pathname: '/**', // Permitir todas las rutas
          },
        {
            protocol: 'https',
            hostname: 'media.gq.com.mx', // Agrega el dominio de la imagen
            port: '', // Puedes dejarlo vacío
            pathname: '/**', // Permitir todas las rutas
          },
      ],
    },
  };
  
  export default nextConfig;
  