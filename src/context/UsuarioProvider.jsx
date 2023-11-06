import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    const obtenerUsuarios = async () => {
        try {
            const data = await axiosClient.get(`/usuariodb/buscarUsuarios`, {
                withCredentials: true,
            });
            return data
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return(<UsuarioContext.Provider
        value={{
            obtenerUsuarios,
        }}
    >
        {children}
    </UsuarioContext.Provider>)
};

    export {UsuarioProvider}
    
    export default UsuarioContext