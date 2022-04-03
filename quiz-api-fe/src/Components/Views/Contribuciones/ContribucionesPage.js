import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

import Contribuciones from "./Contribuciones";
import { privateAxios } from "../../../Lib/apiClient";
import Loading from "../../UX/Loading/Loading";

const ContribucionesPage = () => {


  const {email, jwtToken} = useSelector((state)=>state.security);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(email);
  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: "PREGUNTAS_LOADING", payload: {} });
      try {
        const {
          data: { preguntas, status }
        } = await privateAxios.get(`/api/v1/preguntas/getPreguntas/${email}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        dispatch({ type: "PREGUNTAS_SUCCESS", payload: { preguntas } });
      } catch (ex) {
        console.log(ex);
        dispatch({ type: "PACIENTES_FAILED", payload: {} });
      }
    };
    loadData();
  }, []);

  const Sapito = () => {
    navigate('/editar')
  }

  const { preguntas, isLoading, errors } = useSelector(
    (state) => state.preguntas
  );
  return (
    <>
      {isLoading && <Loading />}
      <Contribuciones preguntas={preguntas} onConfirmClick={Sapito} />
    </>
  );
};
export default ContribucionesPage;
