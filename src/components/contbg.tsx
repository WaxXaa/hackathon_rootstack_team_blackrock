// components/contbg.tsx
import React, { useState } from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const ContBG: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar tu lógica de autenticación
    // Por ejemplo:
    if (!email || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
    } else {
      setErrorMessage('');
      // Realiza la autenticación
      console.log('Iniciando sesión con', { email, password });
    }
  };

  return (
    <div className="relative w-[80%] h-[80vh] rounded-lg border-2 border-black flex items-center justify-center overflow-hidden">
      <BackgroundGradientAnimation className="absolute inset-0 z-0" />
      {/* Cuadro blanco en el centro */}
      <div className="absolute z-10 bg-white rounded-lg shadow-lg w-[400px] h-[460px] p-5">
        <div className="flex min-h-full flex-col justify-center items-center relative">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="PanaEventos"
              src="/media/Logo.svg?color=indigo&shade=1000"
              className="mx-auto h-20 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Iniciar Sesión
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Recuperar Contraseña
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-600 text-sm">{errorMessage}</div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContBG;
