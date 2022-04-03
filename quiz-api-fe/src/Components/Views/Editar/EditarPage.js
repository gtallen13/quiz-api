import Editar from './Editar';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import { privateAxios, privatecAxios } from '../../../Lib/apiClient';
import { set } from 'express/lib/response';

const EditarPage = ()=>{

  const{jwtToken} = useSelector((state)=>state.security);
  const {idPregunta} =useParams();
  const dispatch = useDispatch();

  
  const [txtPregunta, setTxtPregunta] = useState('');
  const [cmbRespuesta, setcmbRespuesta] = useState(true);
  const [cmbCategoria, setcmbCategoria] = useState("Deportes");
  const [cmbDificultad, setcmbDificultad] = useState("Facil");
  //const[isLoadingPregunta, setIsLoadingPregunta] = useState(true);
  const [currentPregunta, setCurrentPregunta] = useState({})

  useEffect(()=>{
    const loadPregunta = async ()=>{
      try{
        const {data: {preguntas,status}}=await privateAxios.het(`/byid${idPregunta}`)
       // setIsLoadingPregunta(false)
      }
       catch(e){
         console.log(e);
       }
    }
    loadPregunta();
    console.log(currentPregunta);
  });

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
      const data = await privateAxios.post(
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