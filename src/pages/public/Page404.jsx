import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Page404() {
  const { auth } = useAuth();

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="h-screen">
        <div className="relative h-full">
          <img
            src="https://imgur.com/CG7QnM3.png"
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center bg-opacity-50 bg-black">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Pagina no encontrada
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              Todo indica que la pagina que buscaste no existe, si crees que se trata de un error comunicate con soporte.
            </p>
            <div className="mt-10">
              <a
                href="/dashboard/chat"
                className="text-sm font-semibold leading-7 text-white"
              >
                <span aria-hidden="true">&larr;</span> Ir al inicio
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
