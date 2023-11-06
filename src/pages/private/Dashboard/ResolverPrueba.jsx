import { useState } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const notificationMethods = [
  { id: "email", title: "A) Disparador en Bases de Datos" },
  { id: "sms", title: "D) Disparador de Evento en Programación" },
  { id: "push", title: "C) Gatillo de Arma de Fuego" },
  { id: "push", title: "D) Desencadenador Emocional" },
];

const ResolverPrueba = () => {

  const [evaluacionEnviada, setEvaluacionEnviada] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el envío predeterminado del formulario

    // Realiza aquí las operaciones para enviar la información del formulario

    // Establece el estado para indicar que la evaluación ha sido enviada
    setEvaluacionEnviada(true);

    // Redirige a otra ruta después de enviar la información
    window.location.href = 'calificacion';
  };


  return (
    <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
        <nav className="flex justify-between mb-3" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <a className="text-slate-900/[0.8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                  </svg>
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-slate-900/[0.8]"
                  aria-hidden="true"
                />
                <a
                  href=""
                  className="ml-4 text-sm font-medium text-slate-900/[0.8]"
                >
                  Resolver test
                </a>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col max-h-full bg-white rounded-lg shadow">
          <div className="flex flex-col flex-1 p-6">
            <div className="bg-white px-6 py-5 sm:py-5 lg:px-5">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-base font-semibold leading-7 text-cyan-500">
                  Bienvenido a tú evaluación
                </p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Test de Triggers
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  No olvides responder todas las preguntas{" "}
                  <span className="font-medium italic">
                    ¡Exito!
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t h-1"></div>
            <div className="space-y-10 divide-y divide-gray-900/10">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                <div className="px-4 sm:px-0">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Esta evaluación no tiene tiempo limite
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Tomate tu tiempo y trata de responderlo sin ayuda.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="bg-white hover:shadow-2xl duration-500 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                  <div className="px-4 py-6 sm:p-8">
                   
                    {/* Pregunta 01 */}
                    <div className="">
                      {/* Pregunta */}
                    
                      <p className="text-sm mb-3 text-cyan-500 font-bold">
                        Primer pregunta:
                      </p>
                      <p className="text-sm mb-3 text-gray-900 font-bold">
                      ¿Qué es un trigger?
                    </p>
                      <div className="mb-3">
                        <p className="text-sm text-gray-500">
                          Selecciona la respuesta correcta:
                        </p>
                        <fieldset className="mt-4">
                          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                            {notificationMethods.map((notificationMethod) => (
                              <div
                                key={notificationMethod.id}
                                className="flex items-center"
                              >
                                <input
                                  id={notificationMethod.id}
                                  name="notification-method"
                                  type="radio"
                                  defaultChecked={
                                    notificationMethod.id === "email"
                                  }
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor={notificationMethod.id}
                                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {notificationMethod.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                      {/* Pregunta */}
                      <div className="border-t border-1 pb-4"></div>
                    </div>
                    {/* Pregunta 02 */}
                    <div className="">
                      {/* Pregunta */}
                    
                      <p className="text-sm mb-3 text-cyan-500 font-bold">
                        Segunda pregunta:
                      </p>
                      <p className="text-sm mb-3 text-gray-900 font-bold">
                      ¿Cuál es la diferencia fundamental entre un "trigger" y un "stored procedure" en el contexto de bases de datos?
                    </p>
                      <div className="mb-3">
                        <p className="text-sm text-gray-500">
                          Selecciona la respuesta correcta:
                        </p>
                        <fieldset className="mt-4">
                          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                            {notificationMethods.map((notificationMethod) => (
                              <div
                                key={notificationMethod.id}
                                className="flex items-center"
                              >
                                <input
                                  id={notificationMethod.id}
                                  name="notification-method"
                                  type="radio"
                                  defaultChecked={
                                    notificationMethod.id === "email"
                                  }
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor={notificationMethod.id}
                                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {notificationMethod.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                      {/* Pregunta */}
                      <div className="border-t border-1 pb-4"></div>
                    </div>
                    {/* Pregunta 03 */}
                    <div className="">
                      {/* Pregunta */}
                    
                      <p className="text-sm mb-3 text-cyan-500 font-bold">
                        Tercera pregunta:
                      </p>
                      <p className="text-sm mb-3 text-gray-900 font-bold">
                      ¿Cómo puede una persona identificar y gestionar sus propios "triggers emocionales" para mejorar su bienestar psicológico?
                    </p>
                      <div className="mb-3">
                        <p className="text-sm text-gray-500">
                          Selecciona la respuesta correcta:
                        </p>
                        <fieldset className="mt-4">
                          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                            {notificationMethods.map((notificationMethod) => (
                              <div
                                key={notificationMethod.id}
                                className="flex items-center"
                              >
                                <input
                                  id={notificationMethod.id}
                                  name="notification-method"
                                  type="radio"
                                  defaultChecked={
                                    notificationMethod.id === "email"
                                  }
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor={notificationMethod.id}
                                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {notificationMethod.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                      {/* Pregunta */}
                      <div className="border-t border-1 pb-4"></div>
                    </div>
                    {/* Pregunta 04 */}
                    <div className="">
                      {/* Pregunta */}
                    
                      <p className="text-sm mb-3 text-cyan-500 font-bold">
                        Cuarta pregunta:
                      </p>
                      <p className="text-sm mb-3 text-gray-900 font-bold">
                      ¿Cuáles son algunos ejemplos comunes de "triggers" en la programación orientada a eventos y cómo se pueden utilizar en el desarrollo de software?
                    </p>
                      <div className="mb-3">
                        <p className="text-sm text-gray-500">
                          Selecciona la respuesta correcta:
                        </p>
                        <fieldset className="mt-4">
                          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                            {notificationMethods.map((notificationMethod) => (
                              <div
                                key={notificationMethod.id}
                                className="flex items-center"
                              >
                                <input
                                  id={notificationMethod.id}
                                  name="notification-method"
                                  type="radio"
                                  defaultChecked={
                                    notificationMethod.id === "email"
                                  }
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor={notificationMethod.id}
                                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {notificationMethod.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                      {/* Pregunta */}
                      <div className="border-t border-1 pb-4"></div>
                    </div>
                    {/* Pregunta 05 */}
                    <div className="">
                      {/* Pregunta */}
                    
                      <p className="text-sm mb-3 text-cyan-500 font-bold">
                        Quinta pregunta:
                      </p>
                      <p className="text-sm mb-3 text-gray-900 font-bold">
                      ¿Cuál es el propósito de utilizar "triggers" en el diseño de juegos y aplicaciones interactivas, y cómo pueden ayudar a crear experiencias más inmersivas para los usuarios?
                    </p>
                      <div className="mb-3">
                        <p className="text-sm text-gray-500">
                          Selecciona la respuesta correcta:
                        </p>
                        <fieldset className="mt-4">
                          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                            {notificationMethods.map((notificationMethod) => (
                              <div
                                key={notificationMethod.id}
                                className="flex items-center"
                              >
                                <input
                                  id={notificationMethod.id}
                                  name="notification-method"
                                  type="radio"
                                  defaultChecked={
                                    notificationMethod.id === "email"
                                  }
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor={notificationMethod.id}
                                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {notificationMethod.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                      {/* Pregunta */}
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button
                      type="submit"
                      className="rounded-3xl bg-blue-400 px-4 py-4 text-sm font-semibold hover:duration-500 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Finalizar evaluación
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResolverPrueba;
