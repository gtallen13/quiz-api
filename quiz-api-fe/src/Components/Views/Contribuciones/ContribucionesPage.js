import Contribuciones from "./Contribuciones"
import { publicAxios } from "../../../Lib/apiClient"
import { useState } from "react";

const ContribucionesPage = () =>{
    const [preguntas, setPreguntas] = useState();

    const getContribuciones = async() =>{
        try{
            const data = await publicAxios.get(
              '/api/v1/preguntas/all', {
                  headers: {Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…AwMH0.be2X_XYiG-LeMfkPg7XteHj97Ho-h9Vb_KPayTQePZs"}
              }
            );
            console.log('Signin Request: ', data)
            setPreguntas(data);
          } catch(ex) {
            console.log('Error on Sigin submit', ex);
          }
    }
    getContribuciones();
    return(
        <Contribuciones preguntas = {preguntas}/>
    )
}

export default ContribucionesPage;