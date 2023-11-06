import { useContext } from "react";
import CursoContext from "../context/CrusoProvider";

const useCurso = () => {
    return useContext(CursoContext)
}

export default useCurso;