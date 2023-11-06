import React, { useState, useEffect } from "react";
import useEvaluacion from "../../../hooks/useEvaluacion";
import useCurso from "../../../hooks/useCurso";
import Alerta from "../../../components/Alerta";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const CrearEvaluacion = () => {
  const evaluacionProvider = useEvaluacion();
  const [alerta, setAlerta] = useState({});
  const [cursos, setCursos] = useState([]);
  const [reload, setReload] = useState(false);
  const { obtenerCursos } = useCurso();
  const [evaluacion, setEvaluacion] = useState({
    cursoID: "",
    preguntas: [
      {
        pregunta: "",
        opciones: [
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
        ],
        respuestaCorrecta: "",
      },
      {
        pregunta: "",
        opciones: [
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
        ],
        respuestaCorrecta: "",
      },
      {
        pregunta: "",
        opciones: [
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
        ],
        respuestaCorrecta: "",
      },
      {
        pregunta: "",
        opciones: [
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
        ],
        respuestaCorrecta: "",
      },
      {
        pregunta: "",
        opciones: [
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
          {
            texto: "",
          },
        ],
        respuestaCorrecta: "",
      },
    ],
  });

  console.log(evaluacion);
  console.log(cursos);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta({});

    const result = await evaluacionProvider.crearEvaluacion(evaluacion);
    console.log(result);

    if (!result.error) {
      setAlerta({
        msg: "La evaluación se ha creado correctamente.",
        error: result.error,
      });

      // Reinicia el estado del curso solo en caso de éxito
      setEvaluacion({
        cursoID: "",
        preguntas: [
          {
            pregunta: "",
            opciones: [
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
            ],
            respuestaCorrecta: "",
          },
          {
            pregunta: "",
            opciones: [
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
            ],
            respuestaCorrecta: "",
          },
          {
            pregunta: "",
            opciones: [
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
            ],
            respuestaCorrecta: "",
          },
          {
            pregunta: "",
            opciones: [
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
            ],
            respuestaCorrecta: "",
          },
          {
            pregunta: "",
            opciones: [
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
              {
                texto: "",
              },
            ],
            respuestaCorrecta: "",
          },
        ],
      });
    } else {
      setAlerta({
        msg: result.msg,
        error: result.error,
      });
    }
  };

  useEffect(() => {
    setReload(false);

    const mostrarCursos = async () => {
      const { data } = await obtenerCursos();
      console.log(data[0].nombre);
      console.log(data[0]._id);
      setCursos(data);
    };

    mostrarCursos();

    if (alerta.msg) {
      const timer = setTimeout(() => {
        setAlerta({});
      }, 5000); // Oculta la alerta después de 5 segundos

      // Limpia el temporizador cuando el componente se desmonta o cuando alerta.msg cambia
      return () => clearTimeout(timer);
    }
  }, [reload, alerta.msg]);

  return (
    <>
      {alerta.msg && <Alerta alerta={alerta} />}
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
                    Bienvenido al crador de evaluaciones
                  </p>
                  <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Crea una evaluación
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    No olvides completar todas las secciones para crear la
                    evaluación con exito. Disfruta de la experiencia.{" "}
                    <span className="font-medium italic">
                      Este proceso está diseñado exclusivamente para
                      administradores.
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-t h-1"></div>
              <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                  <div className="px-4 sm:px-0">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Crea una evaluación
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Crea una evaluación unica para cada modulo de aprendizaje.
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white hover:shadow-2xl duration-500 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
                  >
                    <div className="px-4 py-6 sm:p-8">
                      <p className="text-sm mb-3 text-gray-500">
                        Selecciona el modulo al que pertenece esta evaluación
                      </p>
                      <div className="mb-4">
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Selecciona el curso
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={evaluacion.cursoID}
                          onChange={(e) =>
                            setEvaluacion({
                              ...evaluacion,
                              cursoID: e.target.value,
                            })
                          }
                          className="mt-2 block w-full rounded-md border-0 py-4 pl-3 pr-10 text-cyan-500 font-medium ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue="Selecciona un módulo"
                        >
                          {cursos.map((curso) => (
                            <option key={curso.id} value={curso.id}>
                              {curso.nombre}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="border-b h-1 mb-4"></div>

                      {/* Pregunta 01 */}
                      {/* Pregunta 01 */}
                      <div className="">
                        {/* Pregunta */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Pregunta 01:
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={evaluacion.preguntas[0].pregunta}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[0].pregunta =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="¿Qué es una base de datos?"
                          />
                        </div>
                        <p className="text-sm mb-3 text-gray-500">
                          Posibles respuestas a esta pregunta
                        </p>
                        {/* Inciso A */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso A:
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={evaluacion.preguntas[0].opciones[0].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[0].opciones[0].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>
                        {/* Inciso B */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso B:
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={evaluacion.preguntas[0].opciones[1].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[0].opciones[1].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>
                        {/* Inciso C */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso C:
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={evaluacion.preguntas[0].opciones[2].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[0].opciones[2].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>
                        {/* Inciso D */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso D:
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={evaluacion.preguntas[0].opciones[3].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[0].opciones[3].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-gray-500">
                            Selecciona la pregunta correcta
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Notification method
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              {/* Inciso A */}
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-A"
                                  type="radio"
                                  value="A"
                                  checked={
                                    evaluacion.preguntas[0]
                                      .respuestaCorrecta === "A"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[0].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  A)
                                </label>
                              </div>

                              {/* Inciso B */}
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-B"
                                  type="radio"
                                  value="B"
                                  checked={
                                    evaluacion.preguntas[0]
                                      .respuestaCorrecta === "B"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[0].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  B)
                                </label>
                              </div>

                              {/* Inciso C */}
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-C"
                                  type="radio"
                                  value="C"
                                  checked={
                                    evaluacion.preguntas[0]
                                      .respuestaCorrecta === "C"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[0].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  C)
                                </label>
                              </div>

                              {/* Inciso D */}
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-D"
                                  type="radio"
                                  value="D"
                                  checked={
                                    evaluacion.preguntas[0]
                                      .respuestaCorrecta === "D"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[0].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  D)
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      {/* Pregunta 02 */}
                      <div className="">
                        {/* Pregunta */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="pregunta-2"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Pregunta 02:
                          </label>
                          <input
                            type="text"
                            id="pregunta-2"
                            value={evaluacion.preguntas[1].pregunta}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[1].pregunta =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="¿Qué es una base de datos?"
                          />
                        </div>
                        <p className="text-sm mb-3 text-gray-500">
                          Posibles respuestas a esta pregunta
                        </p>

                        {/* Inciso A */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-A"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso A:
                          </label>
                          <input
                            type="text"
                            id="respuesta-A"
                            value={evaluacion.preguntas[1].opciones[0].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[1].opciones[0].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso B */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-B"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso B:
                          </label>
                          <input
                            type="text"
                            id="respuesta-B"
                            value={evaluacion.preguntas[1].opciones[1].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[1].opciones[1].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso C */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-C"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso C:
                          </label>
                          <input
                            type="text"
                            id="respuesta-C"
                            value={evaluacion.preguntas[1].opciones[2].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[1].opciones[2].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso D */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-D"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso D:
                          </label>
                          <input
                            type="text"
                            id="respuesta-D"
                            value={evaluacion.preguntas[1].opciones[3].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[1].opciones[3].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-gray-500">
                            Selecciona la pregunta correcta
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Pregunta correcta
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-2"
                                  type="radio"
                                  value="A"
                                  checked={
                                    evaluacion.preguntas[1]
                                      .respuestaCorrecta === "A"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[1].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  A)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-2"
                                  type="radio"
                                  value="B"
                                  checked={
                                    evaluacion.preguntas[1]
                                      .respuestaCorrecta === "B"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[1].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  B)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-2"
                                  type="radio"
                                  value="C"
                                  checked={
                                    evaluacion.preguntas[1]
                                      .respuestaCorrecta === "C"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[1].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  C)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-2"
                                  type="radio"
                                  value="D"
                                  checked={
                                    evaluacion.preguntas[1]
                                      .respuestaCorrecta === "D"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[1].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  D)
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        {/* Pregunta */}
                        <div className="border-t border-1 pb-4"></div>
                      </div>

                      {/* Pregunta 03 */}
                      <div className="">
                        {/* Pregunta */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="pregunta-3"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Pregunta 03:
                          </label>
                          <input
                            type="text"
                            id="pregunta-3"
                            value={evaluacion.preguntas[2].pregunta}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[2].pregunta =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="¿Qué es una base de datos?"
                          />
                        </div>
                        <p className="text-sm mb-3 text-gray-500">
                          Posibles respuestas a esta pregunta
                        </p>

                        {/* Inciso A */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-A-3"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso A:
                          </label>
                          <input
                            type="text"
                            id="respuesta-A-3"
                            value={evaluacion.preguntas[2].opciones[0].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[2].opciones[0].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso B */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-B-3"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso B:
                          </label>
                          <input
                            type="text"
                            id="respuesta-B-3"
                            value={evaluacion.preguntas[2].opciones[1].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[2].opciones[1].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso C */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-C-3"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso C:
                          </label>
                          <input
                            type="text"
                            id="respuesta-C-3"
                            value={evaluacion.preguntas[2].opciones[2].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[2].opciones[2].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso D */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-D-3"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso D:
                          </label>
                          <input
                            type="text"
                            id="respuesta-D-3"
                            value={evaluacion.preguntas[2].opciones[3].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[2].opciones[3].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-gray-500">
                            Selecciona la pregunta correcta
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Pregunta correcta
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-3"
                                  type="radio"
                                  value="A"
                                  checked={
                                    evaluacion.preguntas[2]
                                      .respuestaCorrecta === "A"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[2].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  A)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-3"
                                  type="radio"
                                  value="B"
                                  checked={
                                    evaluacion.preguntas[2]
                                      .respuestaCorrecta === "B"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[2].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  B)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-3"
                                  type="radio"
                                  value="C"
                                  checked={
                                    evaluacion.preguntas[2]
                                      .respuestaCorrecta === "C"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[2].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  C)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-3"
                                  type="radio"
                                  value="D"
                                  checked={
                                    evaluacion.preguntas[2]
                                      .respuestaCorrecta === "D"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[2].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  D)
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>

                        {/* Pregunta */}
                        <div className="border-t border-1 pb-4"></div>
                      </div>

                      {/* Pregunta 04 */}
                      <div className="">
                        {/* Pregunta */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="pregunta-4"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Pregunta 04:
                          </label>
                          <input
                            type="text"
                            id="pregunta-4"
                            value={evaluacion.preguntas[3].pregunta}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[3].pregunta =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="¿Qué es una base de datos?"
                          />
                        </div>
                        <p className="text-sm mb-3 text-gray-500">
                          Posibles respuestas a esta pregunta
                        </p>

                        {/* Inciso A */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-A-4"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso A:
                          </label>
                          <input
                            type="text"
                            id="respuesta-A-4"
                            value={evaluacion.preguntas[3].opciones[0].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[3].opciones[0].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso B */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-B-4"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso B:
                          </label>
                          <input
                            type="text"
                            id="respuesta-B-4"
                            value={evaluacion.preguntas[3].opciones[1].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[3].opciones[1].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso C */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-C-4"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso C:
                          </label>
                          <input
                            type="text"
                            id="respuesta-C-4"
                            value={evaluacion.preguntas[3].opciones[2].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[3].opciones[2].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso D */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-D-4"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso D:
                          </label>
                          <input
                            type="text"
                            id="respuesta-D-4"
                            value={evaluacion.preguntas[3].opciones[3].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[3].opciones[3].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-gray-500">
                            Selecciona la respuesta correcta
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Respuesta correcta
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-4"
                                  type="radio"
                                  value="A"
                                  checked={
                                    evaluacion.preguntas[3]
                                      .respuestaCorrecta === "A"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[3].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  A)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-4"
                                  type="radio"
                                  value="B"
                                  checked={
                                    evaluacion.preguntas[3]
                                      .respuestaCorrecta === "B"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[3].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  B)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-4"
                                  type="radio"
                                  value="C"
                                  checked={
                                    evaluacion.preguntas[3]
                                      .respuestaCorrecta === "C"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[3].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  C)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-4"
                                  type="radio"
                                  value="D"
                                  checked={
                                    evaluacion.preguntas[3]
                                      .respuestaCorrecta === "D"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[3].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  D)
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>

                        {/* Pregunta */}
                        <div className="border-t border-1 pb-4"></div>
                      </div>

                      {/* Pregunta 05 */}
                      <div className="">
                        {/* Pregunta */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="pregunta-5"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Pregunta 05:
                          </label>
                          <input
                            type="text"
                            id="pregunta-5"
                            value={evaluacion.preguntas[4].pregunta}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[4].pregunta =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="¿Qué es una base de datos?"
                          />
                        </div>
                        <p className="text-sm mb-3 text-gray-500">
                          Posibles respuestas a esta pregunta
                        </p>

                        {/* Inciso A */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-A-5"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso A:
                          </label>
                          <input
                            type="text"
                            id="respuesta-A-5"
                            value={evaluacion.preguntas[4].opciones[0].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[4].opciones[0].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso B */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-B-5"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso B:
                          </label>
                          <input
                            type="text"
                            id="respuesta-B-5"
                            value={evaluacion.preguntas[4].opciones[1].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[4].opciones[1].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso C */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-C-5"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso C:
                          </label>
                          <input
                            type="text"
                            id="respuesta-C-5"
                            value={evaluacion.preguntas[4].opciones[2].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[4].opciones[2].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        {/* Inciso D */}
                        <div className="rounded-md mb-4 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                          <label
                            htmlFor="respuesta-D-5"
                            className="block text-xs font-medium text-gray-900"
                          >
                            Inciso D:
                          </label>
                          <input
                            type="text"
                            id="respuesta-D-5"
                            value={evaluacion.preguntas[4].opciones[3].texto}
                            onChange={(e) => {
                              const newEvaluacion = { ...evaluacion };
                              newEvaluacion.preguntas[4].opciones[3].texto =
                                e.target.value;
                              setEvaluacion(newEvaluacion); // Debes actualizar el estado aquí
                            }}
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Una base de datos es tal cosa..."
                          />
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-gray-500">
                            Selecciona la respuesta correcta
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">
                              Respuesta correcta
                            </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-5"
                                  type="radio"
                                  value="A"
                                  checked={
                                    evaluacion.preguntas[4]
                                      .respuestaCorrecta === "A"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[4].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  A)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-5"
                                  type="radio"
                                  value="B"
                                  checked={
                                    evaluacion.preguntas[4]
                                      .respuestaCorrecta === "B"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[4].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  B)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-5"
                                  type="radio"
                                  value="C"
                                  checked={
                                    evaluacion.preguntas[4]
                                      .respuestaCorrecta === "C"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[4].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  C)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  name="respuesta-correcta-5"
                                  type="radio"
                                  value="D"
                                  checked={
                                    evaluacion.preguntas[4]
                                      .respuestaCorrecta === "D"
                                  }
                                  onChange={(e) => {
                                    const newEvaluacion = { ...evaluacion };
                                    newEvaluacion.preguntas[4].respuestaCorrecta =
                                      e.target.value;
                                    setEvaluacion(newEvaluacion);
                                  }}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  D)
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        {/* Pregunta */}
                        <div className="border-t border-1 pb-4"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                      <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-3xl bg-blue-400 px-3 py-4 text-sm font-semibold hover:duration-500 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Generar evaluación
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearEvaluacion;
