import React, { useState, useEffect } from "react";
import Alerta from "../../../components/Alerta";
import useEvaluacion from "../../../hooks/useEvaluacion";
import useRespuesta from "../../../hooks/useRespuesta";
import { useParams } from "react-router-dom";
import Modal from "../../../components/Modal";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const Test = () => {
  const [evaluacion, setEvaluacion] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Nuevo estado para controlar la apertura del modal
  const { obtenerEvaluacion } = useEvaluacion();
  const respuestaProvider = useRespuesta();
  const { id } = useParams();
  const [alerta, setAlerta] = useState({});
  const [respuesta, setRespuesta] = useState({
    respuesta01: "",
    respuesta02: "",
    respuesta03: "",
    respuesta04: "",
    respuesta05: "",
    curso: id, // Establece el valor de 'curso' usando el valor de 'id'
    calificacion: ""
  });

   const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta({});

    const result = await respuestaProvider.crearRespuesta(respuesta);
    console.log(result);
    if (!result.error) {
      setAlerta({
        msg: "Las respuestas se guardaron correctamente.",
        error: result.error,
      });

      // Reinicia el estado de las respuestas solo en caso de éxito
      setRespuesta({
        respuesta01: "",
        respuesta02: "",
        respuesta03: "",
        respuesta04: "",
        respuesta05: "",
        curso: id,
        calificacion: ""
      });

      // Abre el modal después de enviar las respuestas
      setModalIsOpen(true);
    } else {
      setAlerta({
        msg: result.msg,
        error: result.error,
      });
    }
  };

  useEffect(() => {
    const mostrarEvaluacion = async () => {
      try {
        const response = await obtenerEvaluacion(id);
        console.log("Response:", response);

        const data = response;
        console.log("Data:", data);
        setEvaluacion(data);
      } catch (error) {
        console.error("Error al cargar la evaluación:", error);
      }
    };

    mostrarEvaluacion();
  }, [id]);

  console.log(respuesta)

  return (
    <>
      {alerta.msg && <Alerta alerta={alerta} />}
      {modalIsOpen && <Modal />} {/* Renderiza el componente Modal si modalIsOpen es true */}
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
                    Crear evaluación
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
                    Bienvenido a tu prueba
                  </p>
                  <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {evaluacion ? evaluacion.cursoID : "Cargando..."}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    No olvides responder todas las preguntas para obtener una
                    calificación. Disfruta de la experiencia.{" "}
                    <span className="font-medium italic">
                      Este proceso está diseñado para estudiantes.
                    </span>
                  </p>
                </div>
              </div>
              {/* Comienza el mapeo */}
              {evaluacion ? (
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="">
                      <div className="border-t border-1 mt-5"></div>
                      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6  lg:max-w-7xl lg:px-8">
                        {/* Preg 1 */}
                        <div className="">
                          <label className="text-base font-semibold text-gray-900">
                            Pregunta 01
                          </label>
                          <p className="text-sm mt-2 font-semibold capitalize text-gray-500">
                            {evaluacion
                              ? evaluacion.preguntas[0].pregunta
                              : "Cargando..."}
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Notification method
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                                <input
                                  name="notification-method"
                                  type="radio"
                                  value="A"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta01: "A",
                                    });
                                  }}
                                />
                                <p>
                                  A){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[0].opciones[0].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method"
                                  type="radio"
                                  value="B"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta01: "B",
                                    });
                                  }}
                                />
                                <p>
                                  B){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[0].opciones[1].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method"
                                  type="radio"
                                  value="C"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta01: "C",
                                    });
                                  }}
                                />
                                <p>
                                  C){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[0].opciones[2].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method"
                                  type="radio"
                                  value="D"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta01: "D",
                                    });
                                  }}
                                />
                                <p>
                                  {" "}
                                  D){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[0].opciones[3].texto
                                    : "Cargando..."}
                                </p>
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900"></label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        {/* Preg 2 */}
                        <div className="border-t border-1 mt-5"></div>
                        <div className="mt-5">
                          <label className="text-base font-semibold text-gray-900">
                            Pregunta 02
                          </label>
                          <p className="text-sm mt-2 font-semibold capitalize text-gray-500">
                            {evaluacion
                              ? evaluacion.preguntas[1].pregunta
                              : "Cargando..."}
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Notification method
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                              <input
                                  name="notification-method1"
                                  type="radio"
                                  value="A"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta02: "A",
                                    });
                                  }}
                                />
                                <p>
                                  A){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[1].opciones[0].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method1"
                                  type="radio"
                                  value="B"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta02: "B",
                                    });
                                  }}
                                />
                                <p>
                                  B){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[1].opciones[1].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method1"
                                  type="radio"
                                  value="C"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta02: "C",
                                    });
                                  }}
                                />
                                <p>
                                  C){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[1].opciones[2].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method1"
                                  type="radio"
                                  value="D"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta02: "D",
                                    });
                                  }}
                                />
                                <p>
                                  {" "}
                                  D){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[1].opciones[3].texto
                                    : "Cargando..."}
                                </p>
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900"></label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        {/* Preg 3 */}
                        <div className="border-t border-1 mt-5"></div>
                        <div className="mt-5">
                          <label className="text-base font-semibold text-gray-900">
                            Pregunta 03
                          </label>
                          <p className="text-sm mt-2 font-semibold capitalize text-gray-500">
                            {evaluacion
                              ? evaluacion.preguntas[2].pregunta
                              : "Cargando..."}
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Notification method
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                              <input
                                  name="notification-method2"
                                  type="radio"
                                  value="A"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta03: "A",
                                    });
                                  }}
                                />
                                <p>
                                  A){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[2].opciones[0].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method2"
                                  type="radio"
                                  value="B"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta03: "B",
                                    });
                                  }}
                                />
                                <p>
                                  B){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[2].opciones[1].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method2"
                                  type="radio"
                                  value="C"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta03: "C",
                                    });
                                  }}
                                />
                                <p>
                                  C){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[2].opciones[2].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method2"
                                  type="radio"
                                  value="D"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta03: "D",
                                    });
                                  }}
                                />
                                <p>
                                  {" "}
                                  D){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[2].opciones[3].texto
                                    : "Cargando..."}
                                </p>
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900"></label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        {/* Preg 4 */}
                        <div className="border-t border-1 mt-5"></div>
                        <div className="mt-5">
                          <label className="text-base font-semibold text-gray-900">
                            Pregunta 04
                          </label>
                          <p className="text-sm mt-2 font-semibold capitalize text-gray-500">
                            {evaluacion
                              ? evaluacion.preguntas[3].pregunta
                              : "Cargando..."}
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Notification method
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                              <input
                                  name="notification-method3"
                                  type="radio"
                                  value="A"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta04: "A",
                                    });
                                  }}
                                />
                                <p>
                                  A){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[3].opciones[0].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method3"
                                  type="radio"
                                  value="B"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta04: "B",
                                    });
                                  }}
                                />
                                <p>
                                  B){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[3].opciones[1].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method3"
                                  type="radio"
                                  value="C"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta04: "C",
                                    });
                                  }}
                                />
                                <p>
                                  C){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[3].opciones[2].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method3"
                                  type="radio"
                                  value="D"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta04: "D",
                                    });
                                  }}
                                />
                                <p>
                                  {" "}
                                  D){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[3].opciones[3].texto
                                    : "Cargando..."}
                                </p>
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900"></label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        {/* Preg 5 */}
                        <div className="border-t border-1 mt-5"></div>
                        <div className="mt-5">
                          <label className="text-base font-semibold text-gray-900">
                            Pregunta 05
                          </label>
                          <p className="text-sm mt-2 font-semibold capitalize text-gray-500">
                            {evaluacion
                              ? evaluacion.preguntas[4].pregunta
                              : "Cargando..."}
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Notification method
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                              <input
                                  name="notification-method4"
                                  type="radio"
                                  value="A"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta05: "A",
                                    });
                                  }}
                                />
                                <p>
                                  A){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[4].opciones[0].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method4"
                                  type="radio"
                                  value="B"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta05: "B",
                                    });
                                  }}
                                />
                                <p>
                                  B){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[4].opciones[1].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method4"
                                  type="radio"
                                  value="C"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta05: "C",
                                    });
                                  }}
                                />
                                <p>
                                  C){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[4].opciones[2].texto
                                    : "Cargando..."}
                                </p>
                                <input
                                  name="notification-method4"
                                  type="radio"
                                  value="D"
                                  className="h-4 w-4 border-gray-300 capitalize text-indigo-600 focus:ring-indigo-600"
                                  onChange={() => {
                                    setRespuesta({
                                      ...respuesta,
                                      respuesta05: "D",
                                    });
                                  }}
                                />
                                <p>
                                  {" "}
                                  D){" "}
                                  {evaluacion
                                    ? evaluacion.preguntas[4].opciones[3].texto
                                    : "Cargando..."}
                                </p>
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900"></label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <button
                          type="submit"
                          className="justify-center mt-6 rounded-3xl bg-cyan-700 hover:scale-95 px-10 py-4 text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Enviar respuestas
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <p>Cargando Evaluacion...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
