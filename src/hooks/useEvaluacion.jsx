import { useContext } from "react";
import EvaluacionContext from "../context/EvaluacionProvider";

const useEvaluacion = () => {
    return useContext(EvaluacionContext)
}

export default useEvaluacion;