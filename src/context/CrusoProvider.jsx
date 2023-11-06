import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

const CursoContext = createContext();

const CursoProvider = ({ children }) => {
    const obtenerCursos = async () => {
        try {
            const data = await axiosClient(`/curso/buscarCursos`, {
                withCredentials: true,
            });
            return data
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    const crearCurso = async (curso) => {
        try {
          const res = await axiosClient.post("/curso/crearCurso", curso, {
            withCredentials: true,
          });
          console.log(res)
          return { msg: res.data.message, error: false };
        } catch (error) {
          return { msg: 'Error al crear el curso, puede ser que algun campo este vacio, o el curso ya exista', error: true };
        }
      };

      const obtenerCurso = async (id) => {
        try {
          const response = await axiosClient(`/curso/buscarCurso/${id}`, {
            withCredentials: true,
          });
          return response.data;
        } catch (error) {
          console.log(error);
          return error;
        }
      };

    return(<CursoContext.Provider
        value={{
            obtenerCursos,
            crearCurso,
            obtenerCurso
        }}
    >
        {children}
    </CursoContext.Provider>)
};

    export {CursoProvider}
    
    export default CursoContext