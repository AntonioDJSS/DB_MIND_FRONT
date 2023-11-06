import { useContext } from "react";
import RespuestaContext from "../context/RespuestaProvider";

const useRespuesta = () => {
    return useContext(RespuestaContext)
}

export default useRespuesta;