import { useState } from "react";
import Alerta from "../Alerta";
import { Link } from "react-router-dom";
import axiosClient from "../../../config/axiosClient";

const OlvidePasswordForm = () => {
  const [correo, setCorreo] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (correo === "") {
      setAlerta({
        msg: "El Email es obligatorio",
        error: true,
      });
      return;
    }

    if( correo.length < 6){
      setAlerta({
        msg: "El correo es demasiado corto",
        error: true,
      });
    }
    setAlerta({})
    try {
      const  data = await axiosClient.post(
        "/auth/olvide-password",
        { correo }
      );
      console.log(data)
      setAlerta({
        msg: data.data.message,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.message,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
    {msg && <Alerta alerta={alerta} />}
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 bg-white/40 h-screen sm:px-6 lg:px-8">
        <img
          className="absolute w-full h-full inset-0 opacity-10 object-cover hidden md:block"
          src="https://imgur.com/0IxIXNB.png"
          alt=""
        />
        <div className=" relative mt-4 mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white hover:scale-105 duration-300 px-6 py-5 shadow-md shadow-black/5 sm:rounded-3xl sm:px-12">
            
        <img
              className="mx-auto h-20 m-3 w-auto"
              src="https://imgur.com/zKLvhxF.png"
              alt="Your Company"
            />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Recupera tu contraseña
              </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 ">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-900"
                >
                  Correo Electronico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                    autoComplete="email"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-3xl bg-cyan-700 hover:scale-95 px-3 py-4 text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Enviar Instrucciones
                  </button>
                </div>
              </form>

              <div className="text-sm mt-5 leading-6">
                  <Link
                    to="/"
                    className="font-semibold text-slate-800 hover:text-[#3366CC]"
                  >
                    Volver al inicio
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OlvidePasswordForm;
