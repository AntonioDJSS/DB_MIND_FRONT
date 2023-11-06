import React, { useState, useEffect } from "react";
import useCurso from "../../../hooks/useCurso";
import Alerta from "../../../components/Alerta";
import { PencilIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function CrearCurso() {
  const cursoProvider = useCurso();
  const [alerta, setAlerta] = useState({});

  const [curso, setCurso] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    modulo1: {
      nombreModulo: "",
      imagen: "",
      bloqueIntroduccion: {
        texto: "",
        codigo: "",
      },
      bloqueDesarrollo: {
        texto: "",
        codigo: "",
      },
      bloqueFinal: {
        texto: "",
        codigo: "",
      },
    },
    modulo2: {
      nombreModulo: "",
      imagen: "",
      bloqueIntroduccion: {
        texto: "",
        codigo: "",
      },
      bloqueDesarrollo: {
        texto: "",
        codigo: "",
      },
      bloqueFinal: {
        texto: "",
        codigo: "",
      },
    },
    modulo3: {
      nombreModulo: "",
      imagen: "",
      bloqueIntroduccion: {
        texto: "",
        codigo: "",
      },
      bloqueDesarrollo: {
        texto: "",
        codigo: "",
      },
      bloqueFinal: {
        texto: "",
        codigo: "",
      },
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta({});

    const result = await cursoProvider.crearCurso(curso);
    console.log(result);
    if (!result.error) {
      setAlerta({
        msg: "El curso se ha creado correctamente.",
        error: result.error,
      });

      // Reinicia el estado del curso solo en caso de éxito
      setCurso({
        nombre: "",
        descripcion: "",
        imagen: "",
        modulo1: {
          nombreModulo: "",
          imagen: "",
          bloqueIntroduccion: {
            texto: "",
            codigo: "",
          },
          bloqueDesarrollo: {
            texto: "",
            codigo: "",
          },
          bloqueFinal: {
            texto: "",
            codigo: "",
          },
        },
        modulo2: {
          nombreModulo: "",
          imagen: "",
          bloqueIntroduccion: {
            texto: "",
            codigo: "",
          },
          bloqueDesarrollo: {
            texto: "",
            codigo: "",
          },
          bloqueFinal: {
            texto: "",
            codigo: "",
          },
        },
        modulo3: {
          nombreModulo: "",
          imagen: "",
          bloqueIntroduccion: {
            texto: "",
            codigo: "",
          },
          bloqueDesarrollo: {
            texto: "",
            codigo: "",
          },
          bloqueFinal: {
            texto: "",
            codigo: "",
          },
        },
      });
    } else {
      setAlerta({
        msg: result.msg,
        error: result.error,
      });
    }
  };

  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [mostrarContenido2, setMostrarContenido2] = useState(false);
  const [mostrarContenido3, setMostrarContenido3] = useState(false);

  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };

  const toggleContenido2 = () => {
    setMostrarContenido2(!mostrarContenido2);
  };

  const toggleContenido3 = () => {
    setMostrarContenido3(!mostrarContenido3);
  };

  useEffect(() => {
    if (alerta.msg) {
      const timer = setTimeout(() => {
        setAlerta({});
      }, 5000); // Oculta la alerta después de 5 segundos

      // Limpia el temporizador cuando el componente se desmonta o cuando alerta.msg cambia
      return () => clearTimeout(timer);
    }
  }, [alerta.msg]);

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
                    <PencilIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
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
                    Creador de cursos
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
                    Bienvenido al crador de cursos
                  </p>
                  <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Crea un curso
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    No olvides completar todas las secciones para crear el curso
                    con sus respectivos módulos. Disfruta de la experiencia.{" "}
                    <span className="font-medium italic">
                      Este proceso está diseñado exclusivamente para
                      administradores de cursos.
                    </span>
                  </p>
                </div>
              </div>
              <div class="border-t border-black/5 mb-10"></div>
              <form onSubmit={handleSubmit}>
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-black/20 mb-5">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Nombre del curso
                  </label>
                  <input
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Jane Smith"
                    type="text"
                    id="nombre"
                    value={curso.nombre}
                    onChange={(e) =>
                      setCurso({ ...curso, nombre: e.target.value })
                    }
                  />
                </div>
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                  <label
                    className="block text-xs font-medium text-gray-900"
                    htmlFor="descripcion"
                  >
                    Descripción:
                  </label>
                  <textarea
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    id="descripcion"
                    value={curso.descripcion}
                    onChange={(e) =>
                      setCurso({ ...curso, descripcion: e.target.value })
                    }
                  />
                </div>
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                  <label
                    className="block text-xs font-medium text-gray-900"
                    htmlFor="imagen"
                  >
                    URL de la imagen:
                  </label>
                  <input
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    type="text"
                    id="imagen"
                    value={curso.imagen}
                    onChange={(e) =>
                      setCurso({ ...curso, imagen: e.target.value })
                    }
                  />
                </div>
                {/* Modulo 01 */}
                <div>
                  <div
                    className={`px-10 pb-1.5 pt-2.5 duration-500 ${
                      mostrarContenido
                        ? "shadow-cyan-600 ring-cyan-500"
                        : "shadow-sm ring-1 ring-inset ring-gray-300"
                    } mb-5 focus-within:ring-1 focus-within:ring-black/20`}
                  >
                    <p
                      className="my-6 text-lg leading-8 text-gray-600 cursor-pointer"
                      onClick={toggleContenido}
                    >
                      Inserta lo solicitado para crear el{" "}
                      <span className="font-medium italic">Módulo 01</span>
                    </p>
                    {mostrarContenido && (
                      <div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="nombreModulo1"
                          >
                            Nombre del módulo:
                          </label>
                          <input
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            type="text"
                            id="nombreModulo1"
                            value={curso.modulo1.nombreModulo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  nombreModulo: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-indigo-600">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="imagenModulo1"
                          >
                            Imagen del módulo:
                          </label>
                          <input
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            type="text"
                            id="imagenModulo1"
                            value={curso.modulo1.imagen}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  imagen: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="introTextoModulo1"
                          >
                            Texto de introducción:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="introTextoModulo1"
                            value={curso.modulo1.bloqueIntroduccion.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  bloqueIntroduccion: {
                                    ...curso.modulo1.bloqueIntroduccion,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="introCodigoModulo1"
                          >
                            Código de introducción:
                          </label>
                          <textarea
                            id="introCodigoModulo1"
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            value={curso.modulo1.bloqueIntroduccion.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  bloqueIntroduccion: {
                                    ...curso.modulo1.bloqueIntroduccion,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="desarrolloTextoModulo1"
                          >
                            Texto de desarrollo:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="desarrolloTextoModulo1"
                            value={curso.modulo1.bloqueDesarrollo.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  bloqueDesarrollo: {
                                    ...curso.modulo1.bloqueDesarrollo,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="desarrolloCodigoModulo1"
                          >
                            Código de desarrollo:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="desarrolloCodigoModulo1"
                            value={curso.modulo1.bloqueDesarrollo.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  bloqueDesarrollo: {
                                    ...curso.modulo1.bloqueDesarrollo,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="finalTextoModulo1"
                          >
                            Texto final:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="finalTextoModulo1"
                            value={curso.modulo1.bloqueFinal.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  bloqueFinal: {
                                    ...curso.modulo1.bloqueFinal,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="finalCodigoModulo1"
                          >
                            Código final:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="finalCodigoModulo1"
                            value={curso.modulo1.bloqueFinal.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo1: {
                                  ...curso.modulo1,
                                  bloqueFinal: {
                                    ...curso.modulo1.bloqueFinal,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Modulo 01 final */}

                <div>
                  <div
                    className={`px-10 pb-1.5 pt-2.5 duration-500 ${
                      mostrarContenido2
                        ? "shadow-cyan-600 ring-cyan-500"
                        : "shadow-sm ring-1 ring-inset ring-gray-300"
                    } mb-5 focus-within:ring-1 focus-within:ring-black/20`}
                  >
                    <p
                      className="my-6 text-lg leading-8 text-gray-600 cursor-pointer"
                      onClick={toggleContenido2}
                    >
                      Inserta lo solicitado para crear el{" "}
                      <span className="font-medium italic">Módulo 02</span>
                    </p>
                    {mostrarContenido2 && (
                      <div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          {" "}
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="nombreModulo2"
                          >
                            Nombre del módulo:
                          </label>
                          <input
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            type="text"
                            id="nombreModulo2"
                            value={curso.modulo2.nombreModulo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  nombreModulo: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="imagenModulo2"
                          >
                            Imagen del módulo:
                          </label>
                          <input
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            type="text"
                            id="imagenModulo2"
                            value={curso.modulo2.imagen}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  imagen: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="introTextoModulo2"
                          >
                            Texto de introducción:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="introTextoModulo2"
                            value={curso.modulo2.bloqueIntroduccion.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  bloqueIntroduccion: {
                                    ...curso.modulo2.bloqueIntroduccion,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="introCodigoModulo2"
                          >
                            Código de introducción:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="introCodigoModulo2"
                            value={curso.modulo2.bloqueIntroduccion.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  bloqueIntroduccion: {
                                    ...curso.modulo2.bloqueIntroduccion,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="desarrolloTextoModulo2"
                          >
                            Texto de desarrollo:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="desarrolloTextoModulo2"
                            value={curso.modulo2.bloqueDesarrollo.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  bloqueDesarrollo: {
                                    ...curso.modulo2.bloqueDesarrollo,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="desarrolloCodigoModulo2"
                          >
                            Código de desarrollo:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="desarrolloCodigoModulo2"
                            value={curso.modulo2.bloqueDesarrollo.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  bloqueDesarrollo: {
                                    ...curso.modulo2.bloqueDesarrollo,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="finalTextoModulo2"
                          >
                            Texto final:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="finalTextoModulo2"
                            value={curso.modulo2.bloqueFinal.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  bloqueFinal: {
                                    ...curso.modulo2.bloqueFinal,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="finalCodigoModulo2"
                          >
                            Código final:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="finalCodigoModulo2"
                            value={curso.modulo2.bloqueFinal.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo2: {
                                  ...curso.modulo2,
                                  bloqueFinal: {
                                    ...curso.modulo2.bloqueFinal,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div
                    className={`px-10 pb-1.5 pt-2.5 duration-500 ${
                      mostrarContenido3
                        ? "shadow-cyan-600 ring-cyan-500"
                        : "shadow-sm ring-1 ring-inset ring-gray-300"
                    } mb-5 focus-within:ring-1 focus-within:ring-black/20`}
                  >
                    <p
                      className="my-6 text-lg leading-8 text-gray-600 cursor-pointer"
                      onClick={toggleContenido3}
                    >
                      Inserta lo solicitado para crear el{" "}
                      <span className="font-medium italic">Módulo 03</span>
                    </p>
                    {mostrarContenido3 && (
                      <div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          {" "}
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="nombreModulo3"
                          >
                            Nombre del módulo:
                          </label>
                          <input
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            type="text"
                            id="nombreModulo3"
                            value={curso.modulo3.nombreModulo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  nombreModulo: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="imagenModulo3"
                          >
                            Imagen del módulo:
                          </label>
                          <input
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            type="text"
                            id="imagenModulo3"
                            value={curso.modulo3.imagen}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  imagen: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="introTextoModulo3"
                          >
                            Texto de introducción:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="introTextoModulo3"
                            value={curso.modulo3.bloqueIntroduccion.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  bloqueIntroduccion: {
                                    ...curso.modulo3.bloqueIntroduccion,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="introCodigoModulo3"
                          >
                            Código de introducción:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="introCodigoModulo3"
                            value={curso.modulo3.bloqueIntroduccion.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  bloqueIntroduccion: {
                                    ...curso.modulo3.bloqueIntroduccion,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="desarrolloTextoModulo3"
                          >
                            Texto de desarrollo:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="desarrolloTextoModulo3"
                            value={curso.modulo3.bloqueDesarrollo.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  bloqueDesarrollo: {
                                    ...curso.modulo3.bloqueDesarrollo,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="desarrolloCodigoModulo3"
                          >
                            Código de desarrollo:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="desarrolloCodigoModulo3"
                            value={curso.modulo3.bloqueDesarrollo.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  bloqueDesarrollo: {
                                    ...curso.modulo3.bloqueDesarrollo,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="finalTextoModulo3"
                          >
                            Texto final:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="finalTextoModulo3"
                            value={curso.modulo3.bloqueFinal.texto}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  bloqueFinal: {
                                    ...curso.modulo3.bloqueFinal,
                                    texto: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 mb-5 focus-within:ring-black/20">
                          <label
                            className="block text-xs font-medium text-gray-900"
                            htmlFor="finalCodigoModulo3"
                          >
                            Código final:
                          </label>
                          <textarea
                            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            id="finalCodigoModulo3"
                            value={curso.modulo3.bloqueFinal.codigo}
                            onChange={(e) =>
                              setCurso({
                                ...curso,
                                modulo3: {
                                  ...curso.modulo3,
                                  bloqueFinal: {
                                    ...curso.modulo3.bloqueFinal,
                                    codigo: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="justify-center rounded-3xl bg-cyan-700 hover:scale-95 px-10 py-4 text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Crear Curso
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearCurso;
