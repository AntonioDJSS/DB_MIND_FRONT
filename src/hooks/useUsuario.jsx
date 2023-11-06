import { useContext } from "react";
import UsuarioContext from "../context/UsuarioProvider";

const useUsuario = () => {
    const { obtenerUsuarios } = useContext(UsuarioContext);
    return { obtenerUsuarios }; // Devuelve la función obtenerUsuarios
}

export default useUsuario;
