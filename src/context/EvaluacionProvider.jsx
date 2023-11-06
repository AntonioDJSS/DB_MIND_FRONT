import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

const EvaluacionContext = createContext();

const EvaluacionProvider = ({ children }) => {
    const obtenerEvaluaciones = async () => {
        try {
            const data = await axiosClient(`/evaluacion/ObtenerEvaluaciones`, {
                withCredentials: true,
            });
            return data
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    const crearEvaluacion = async (evaluacion) => {
        try {
          const res = await axiosClient.post("/evaluacion/crearEvaluacion", evaluacion, {
            withCredentials: true,
          });
          console.log(res)
          return { msg: res.data.message, error: false };
        } catch (error) {
          return { msg: 'Error al crear el curso, puede ser que algun campo este vacio, o el curso ya exista', error: true };
        }
      };

      const obtenerEvaluacion = async (id) => {
        try {
          const response = await axiosClient(`/evaluacion/ObtenerEvaluacion/${id}`, {
            withCredentials: true,
          });
          return response.data;
        } catch (error) {
          console.log(error);
          return error;
        }
      };

    return(<EvaluacionContext.Provider
        value={{
            obtenerEvaluaciones,
            crearEvaluacion,
            obtenerEvaluacion
        }}
    >
        {children}
    </EvaluacionContext.Provider>)
};

    export {EvaluacionProvider}
    
    export default EvaluacionContext