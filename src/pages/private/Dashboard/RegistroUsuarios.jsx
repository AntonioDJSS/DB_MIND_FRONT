import React, { useState, useEffect } from "react";
import useUsuario from "../../../hooks/useUsuario";
import {
  ChevronRightIcon,
} from "@heroicons/react/20/solid";


const RegistroUsuarios = () => {

  const [usuario, setUsuario] = useState([]);
  const [reload, setReload] = useState(false);
  const { obtenerUsuarios } = useUsuario(); // Cambiar a obtenerUsuarios en lugar de obtenerUsuario

  useEffect(() => {
    setReload(false);
    const mostrarUsuario = async () => {
      const { data } = await obtenerUsuarios(); // Cambiar a obtenerUsuarios en lugar de obtenerUsuario
      console.log(data);
      setUsuario(data);
    };
    mostrarUsuario();
  }, [reload]);

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
                  Usuarios registrados
                </a>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col max-h-full bg-white rounded-lg shadow">
          <div className="flex flex-col flex-1 p-6"></div>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">
                  Usuarios registrados
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  Listado de todos los usuarios dados de alta en la plataforma.
                </p>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Nombre
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Titulo
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Estatus
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Rol
                        </th>
                       
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {usuario.map((data, index) => (
                        <tr key={data.name}>
                          <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                            <div className="flex items-center">
                              <div className="h-11 w-11 flex-shrink-0">
                                <img
                                  className="h-11 w-11 rounded-full"
                                  src={data.img}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {data.nombre}
                                </div>
                                <div className="mt-1 text-gray-500">
                                  {data.correo}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <div className="text-gray-900">{data.name}</div>
                            <div className="mt-1 text-gray-500">
                              {data.uid}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              Activado
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            {data.rol}
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuarios;
