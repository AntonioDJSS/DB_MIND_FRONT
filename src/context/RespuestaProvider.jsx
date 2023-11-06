import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

const RespuestaContext = createContext();

const RespuestaProvider = ({ children }) => {
  const crearRespuesta = async (respuesta) => {
    try {
      const res = await axiosClient.post("/respuesta/crearRespuesta", respuesta, {
        withCredentials: true,
      });
      if (res.status === 200) {
        // La solicitud fue exitosa
        console.log(res);
        return { msg: res.data.message, error: false };
      } else {
        // La solicitud tuvo éxito, pero la respuesta no fue lo que esperabas
        console.error("Error en la respuesta del servidor:", res.status, res.data);
        return { msg: 'Error en la respuesta del servidor', error: true };
      }
    } catch (error) {
      // Error en la solicitud
      console.error("Error en la solicitud:", error);
      return { msg: 'Error en la solicitud', error: true };
    }
  };

  const obtenerMisRespuestas = async () => {
    try {
        const data = await axiosClient(`/respuesta/obtenerCalificaciones`, {
            withCredentials: true,
        });
        return data
    } catch (error) {
        console.log(error);
        return error;
    }
}

const obtenerAllRespuestas = async () => {
  try {
      const data = await axiosClient(`/respuesta/obtenerAllCalificaciones`, {
          withCredentials: true,
      });
      return data
  } catch (error) {
      console.log(error);
      return error;
  }
}

  return (
    <RespuestaContext.Provider
      value={{
        crearRespuesta,
        obtenerMisRespuestas,
        obtenerAllRespuestas
      }}
    >
      {children}
    </RespuestaContext.Provider>
  );
};

export { RespuestaProvider };

export default RespuestaContext;
