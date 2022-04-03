import Editar from './Editar';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'

import { privateAxios} from '../../../Lib/apiClient';

const EditarPage = ()=>{

  const{jwtToken} = useSelector((state)=>state.security);
  const {idPregunta} =useParams();
  const routeChanger = useNavigate()

  
  const [txtPregunta, setTxtPregunta] = useState('');
  const [cmbRespuesta, setcmbRespuesta] = useState(true);
  const [cmbCategoria, setcmbCategoria] = useState("Deportes");
  const [cmbDificultad, setcmbDificultad] = useState("Facil");
  //const[isLoadingPregunta, setIsLoadingPregunta] = useState(true);
  // const [currentPregunta, setCurrentPregunta] = useState({})

  useEffect(()=>{
    const loadPregunta = async ()=>{
      try{
        const {data: {pregunta,status}} = await privateAxios.get(`/api/v1/preguntas/byid/${idPregunta}`,
        {
          headers:{
            Authorization:`Bearer ${jwtToken}`
          }
        })
        setTxtPregunta(pregunta.pregunta)
        setcmbRespuesta(pregunta.respuesta?"Verdadero":"Falso")
        setcmbCategoria(pregunta.categoria)
        setcmbDificultad(pregunta.dificultad)

      }
      catch(e){
        console.log(e);
      }
    }
    loadPregunta();
  },[]);
  
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtPregunta':
        setTxtPregunta(value);
        break;
      case 'cmbRespuesta':
        if (value==="Verdadero") setcmbRespuesta(true);
        if (value==="Falso") setcmbRespuesta(false);
        break;
      case 'cmbCategoria':
        setcmbCategoria(value);
        break;
        case 'cmbDificultad':
        setcmbDificultad(value);
        break;
      default:
        break;
    }
  }

  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (txtPregunta){
        console.log("No esta vacio ");
    try{
      const data = await privateAxios.put(
        `/api/v1/preguntas/update/${idPregunta}`, 
        {
          pregunta: txtPregunta,
          respuesta: cmbRespuesta,
          categoria: cmbCategoria,
          dificultad: cmbDificultad
        },{
          headers:{
            Authorization: `Bearer ${jwtToken}`
          }
        }
        
      );
      routeChanger('/revision')
      console.log('Pregunta Request: ', data)
    } catch(ex) {
      console.log('Error on pregunta update', ex);
    }
    }
    else {
        console.log("Vacios");
    }
  }
 
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }
  // const onChangeHandler = (e) => {
  //   const {name, value} = e.target;
  // }
  return (
    <>
      <Editar
        txtPreguntaValue={txtPregunta}
        cmbRespuestaValue={cmbRespuesta}
        cmbCategoriaValue={cmbCategoria}
        cmbDificultadValue={cmbDificultad}
        onChange={onChangeHandler}
        errorTxtPregunta=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default EditarPage;