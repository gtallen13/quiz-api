import Resultados from "./Resultados";
import { useState } from "react";
import { publicAxios } from "../../../Lib/apiClient";

const ResultadosPage = () => {
    const [resultados, setResultados] = useState(null);

  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await publicAxios.get("/api/v1/preguntas/byAmount/3");
      console.log("Los resultados son: ", data);
      setResultados(data);
    } catch (ex) {
      console.log("Error al extraer preguntas", ex);
    }
  };
  onConfirm();

  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return <Resultados 
    Informacion = {resultados}
  />;

  
};


export default ResultadosPage;
