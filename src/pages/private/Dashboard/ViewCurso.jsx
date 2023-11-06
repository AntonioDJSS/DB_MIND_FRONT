import React, { useState, useEffect } from "react";
import useCurso from "../../../hooks/useCurso";
import Alerta from "../../../components/Alerta";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

export const ViewCurso = () => {
  const [cursos, setCursos] = useState([]);
  const [reload, setReload] = useState(false);
  const { obtenerCursos } = useCurso();

  useEffect(() => {
    setReload(false);
    const mostrarCursos = async () => {
      const { data } = await obtenerCursos();
      console.log(data[0].nombre);
      console.log(data[0]._id);
      setCursos(data);
    };
    mostrarCursos();
  }, [reload]);

  return (
    <>
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
                    Aprendizaje continuo
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
                    Te damos la bienvenida
                  </p>
                  <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Datos sólidos, decisiones brillantes.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Construyendo el Futuro con Conocimiento:{" "}
                    <span className="font-medium italic">
                      Explora, Diseña y Administra Bases de Datos en Nuestros
                      Cursos Especializados en Base de Datos.{" "}
                    </span>
                  </p>
                </div>
              </div>
              {/* Comienza el mapeo */}
              <div class="border-t border-black/5 mb-10"></div>
              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
              >
                {cursos.map((curso, index) => (
                  <li
                    key={curso._id}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                  >
                    <h3 className="mt-6 text-sm font-medium mb-4 text-gray-900">
                      {curso.nombre}
                    </h3>
                    <div className="flex flex-1 flex-col p-8">
                      <img
                        className="mx-auto mb-4 h-32 w-32 rounded-full flex-shrink-0"
                        src={curso.imagen}
                        alt=""
                      />
                      <dl className="mt-1 flex flex-grow flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <textarea className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                          {curso.descripcion}
                        </textarea>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-3">
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Actualizado el: {curso.updatedAt}
                          </span>
                        </dd>
                      </dl>
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="flex w-0 flex-1">
                          <a
                            href={`cursos/${curso._id}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Aprender
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
