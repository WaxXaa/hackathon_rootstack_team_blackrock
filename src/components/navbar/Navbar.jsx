export default function Navbar() {
  return (
    <nav className="block w-full max-w-screen-lg px-6 py-4 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-4 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <div className="flex items-center mr-4"> {/* Added flex container */}
          <img
            alt="PanaEventos"
            src="/media/Logo.svg?color=indigo&shade=1000"
            className="h-10 w-auto mr-2" // Adjust height as needed and add margin
          />
          <span className="text-xl font-semibold">PanaEventos</span> {/* Changed to span for better semantics */}
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-4 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            <li className="flex items-center p-2 text-base gap-x-2 text-slate-600">
              <a href="../../" className="flex items-center">Inicio</a>
            </li>
            <li className="flex items-center p-2 text-base gap-x-2 text-slate-600">
              <a href="../../Catalogo" className="flex items-center">Catalogo</a>
            </li>
            <li className="flex items-center p-2 text-base gap-x-2 text-slate-600">
              <a href="../../Nosotros" className="flex items-center">Nosotros</a>
            </li>
            <li className="flex items-center p-2 text-base gap-x-2 text-slate-600">
              <a href="../../Login" className="flex items-center">Iniciar Sesión</a>
            </li>
          </ul>
        </div>
        <button
          className="relative ml-auto h-8 max-h-[50px] w-8 max-w-[50px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button">
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
