import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../Alerta";
import axiosClient from "../../../config/axiosClient";

const NuevoPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [comprobarPassword, setComprobarPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    comprobarToken();
  }, []);

  const comprobarToken = async () => {
    try {
      await axiosClient(`/auth/olvide-password/${token}`);
      setTokenValido(true);
    } catch (error) {
      console.log(error);
      setAlerta({
        msg: error.response.data.message,
        error: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: "El Password debe ser mínimo de 6 caracteres",
        error: true,
      });
      return;
    }

    if (password !== comprobarPassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    try {
      const url = `https://whale-app-frgd7.ondigitalocean.app/api/auth/olvide-password/${token}`;

      const { data } = await axiosClient.post(url, { password });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setPasswordModificado(true);
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
              Restablece tu password y no pierdas tu acceso
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {tokenValido && (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  action="#"
                  method="POST"
                >
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 ">
                      <label
                        htmlFor="password"
                        className="block text-xs font-medium text-gray-900"
                      >
                        Nuevo password:
                      </label>
                      <div className="text-sm"></div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pr-10"
                      />
                    </div>
                  </div>

                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 ">
                      <label
                        htmlFor="repetir-password"
                        className="block text-xs font-medium text-gray-900"
                      >
                        Repetir password:
                      </label>
                      <div className="text-sm"></div>
                    <div className="mt-2">
                      <input
                        id="repetir-password"
                        name="repetir-password"
                        type="password"
                        autoComplete="current-password"
                        required=""
                        value={comprobarPassword}
                        onChange={(e) => setComprobarPassword(e.target.value)}
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pr-10"
                      />
                    </div>
                  </div>

                  <div>
                  <button
                  type="submit"
                  className="flex w-full justify-center rounded-3xl bg-cyan-700 hover:scale-95 px-3 py-4 text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Actualizar contraseña
                </button>
                  </div>
                </form>
              )}

              {passwordModificado && (
                <Link
                  className="font-bold mt-3 block text-slate-800 hover:text-[#3366CC]"
                  to="/"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoPasswordForm;
