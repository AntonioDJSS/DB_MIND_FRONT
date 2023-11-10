import React, { useState, useEffect } from "react";
import useCurso from "../../../hooks/useCurso";
import { useParams } from "react-router-dom";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

export const Curso = () => {
  const [curso, setCurso] = useState(null);
  const { obtenerCurso } = useCurso();
  const { id } = useParams();

  useEffect(() => {
    const mostrarCurso = async () => {
      try {
        const response = await obtenerCurso(id);
        setCurso(response);
      } catch (error) {
        console.error("Error al cargar el curso:", error);
      }
    };

    mostrarCurso();
  }, [id]);

  useEffect(() => {
    // Función para crear el reproductor de YouTube
    function onYouTubeIframeAPIReady() {
      new YT.Player("player", {
        height: "315",
        width: "560",
        videoId: curso.modulo1.videoId, // Reemplaza con el ID del video de YouTube
        playerVars: {
          autoplay: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    // Función para manejar el reproductor cuando está listo
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // Función para manejar los cambios de estado del reproductor
    function onPlayerStateChange(event) {
      // Puedes agregar lógica adicional aquí si es necesario
    }

    // Verifica si la API de YouTube ya está disponible
    if (typeof YT !== "undefined" && typeof YT.Player !== "undefined" && curso) {
      onYouTubeIframeAPIReady();
    } else {
      // Si la API de YouTube no está disponible, intenta cargarla de forma asíncrona
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Establece una función global para que se llame una vez que la API esté cargada
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  }, [curso]);

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
              {/* Comienza el mapeo */}
              {curso ? (
                <div>
                  <div className="player">
                    <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6  lg:max-w-7xl lg:px-8">
                      {/* Details section */}
                      <section aria-labelledby="details-heading">
                        <div className="flex flex-col items-center text-center">
                          <h2
                            id="details-heading"
                            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                          >
                            {curso.nombre}
                          </h2>
                          <p className="mt-3 max-w-3xl text-lg text-gray-600">
                            {curso.descripcion}
                          </p>
                          <span className="mt-5 inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                            Fecha de publicación: {curso.createdAt}
                          </span>
                        </div>
                        <div class=" mt-10 border-t border-black/5"></div>
                        <div className="mt-10 grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:gap-x-8">
                          <div>
                            <div className="aspect-h-1 aspect-w-3 w-full overflow-hidden rounded-lg">
                              <iframe
                                width="560"
                                height="315"
                                src={`${curso.modulo1.imagen}`}
                                title="YouTube Video"
                                frameborder="0"
                                allowfullscreen
                                className="h-full w-full"
                              ></iframe>
                            </div>
                            <p className="mt-8 text-lg">
                              <span className="font-semibold text-cyan-500">
                                Modulo 01:
                              </span>{" "}
                              {curso.modulo1.nombreModulo}
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Introducción:{" "}
                              <span className="text-black">
                                {curso.modulo1.bloqueIntroduccion.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo1.bloqueIntroduccion.codigo}
                              </span>
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Desarrollo:
                              <span className="text-black">
                                {curso.modulo1.bloqueDesarrollo.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo1.bloqueDesarrollo.codigo}
                              </span>
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Final:
                              <span className="text-black">
                                {curso.modulo1.bloqueFinal.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo1.bloqueFinal.codigo}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:gap-x-8">
                          <div>
                            <div className="aspect-h-1 aspect-w-3 w-full overflow-hidden rounded-lg">
                              <img
                                src={`${curso.modulo2.imagen}`}
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <p className="mt-8 text-lg">
                              <span className="font-semibold text-cyan-500">
                                Modulo 02:
                              </span>{" "}
                              {curso.modulo2.nombreModulo}
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Introducción:{" "}
                              <span className="text-black">
                                {curso.modulo2.bloqueIntroduccion.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo2.bloqueIntroduccion.codigo}
                              </span>
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Desarrollo:
                              <span className="text-black">
                                {curso.modulo2.bloqueDesarrollo.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo2.bloqueDesarrollo.codigo}
                              </span>
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Final:
                              <span className="text-black">
                                {curso.modulo2.bloqueFinal.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo2.bloqueFinal.codigo}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:gap-x-8">
                          <div>
                            <div className="aspect-h-1 aspect-w-3 w-full overflow-hidden rounded-lg">
                              <img
                                src={`${curso.modulo3.imagen}`}
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <p className="mt-8 text-lg">
                              <span className="font-semibold text-cyan-500">
                                Modulo 03:
                              </span>{" "}
                              {curso.modulo3.nombreModulo}
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Introducción:{" "}
                              <span className="text-black">
                                {curso.modulo3.bloqueIntroduccion.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo3.bloqueIntroduccion.codigo}
                              </span>
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Desarrollo:
                              <span className="text-black">
                                {curso.modulo3.bloqueDesarrollo.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo3.bloqueDesarrollo.codigo}
                              </span>
                            </p>
                            <p className="mt-4 border p-4 text-base text-gray-500">
                              Final:
                              <span className="text-black">
                                {curso.modulo3.bloqueFinal.texto}
                              </span>
                            </p>
                            <p className="mt-4 bg-black/90 border p-4 text-base text-gray-500">
                              Codigo de prueba:{" "}
                              <span className="text-white">
                                {curso.modulo3.bloqueFinal.codigo}
                              </span>
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Cargando curso...</p>
              )}
            </div>
            <div class="border-t border-black/5 mb-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};
