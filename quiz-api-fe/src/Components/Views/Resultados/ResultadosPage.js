import Resultados from "./Resultados";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { privateAxios } from "../../../Lib/apiClient";
import { useParams } from "react-router-dom";

const ResultadosPage = () => {
  const { jwtToken } = useSelector((state) => state.security);
  const { preguntas,isLoading,errors } = useSelector((state) => state.preguntas);
  const dispatch = useDispatch();
  const {categoria, dificultad, cantidad} = useParams();

  const onConfirm = async (e) => {
    console.log(e)
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await privateAxios.put(
        `/api/v1/preguntas/revision/623610ebc78c3741634739f3`,
        {
          revision:true,

        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      // setResultados(result);
      console.log(preguntas)
    } catch (ex) {
     
      console.log("Error al extraer preguntas", ex);
    }
  };

  useEffect(()=>{

    const loadData = async() =>{
      dispatch({type:"PREGUNTAS_LOADING",payload:{}})
      try {
        const {data:{preguntas,state}} = await privateAxios.get(
          `/api/v1/preguntas/getCategories/${categoria}/${dificultad}/${cantidad}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        dispatch({type:"PREGUNTAS_SUCCESS",payload:{preguntas}})
        // setResultados(result);
      } catch (ex) {
        dispatch({type:"PREGUNTAS_FAILED",payload:{}})
        console.log("Error al extraer preguntas", ex);
      }
    }
    loadData();
  },[])

  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return <Resultados Informacion={preguntas}
  onConfirmClick={onConfirm} />;
};

export default ResultadosPage;
