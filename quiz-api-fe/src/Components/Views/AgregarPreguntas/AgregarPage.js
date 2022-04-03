import Agregar from './Agregar';
import { useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';
import { useSelector } from "react-redux"
const AgregarPage = ()=>{
  //trae el usuario logueado uwu
  const {email} = useSelector((state)=>state.security); 
  const [txtPregunta, setTxtPregunta] = useState('');
  const [cmbRespuesta, setcmbRespuesta] = useState(true);
  const [cmbCategoria, setcmbCategoria] = useState("Deportes");
  const [cmbDificultad, setcmbDificultad] = useState("Facil");
  const onChangeHandler = ({target: {name, value}})=>{
    console.log(email);
    switch (name) {
      case 'txtPregunta':
        console.log(value);
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
    try{
      const data = await publicAxios.post(
        '/api/v1/preguntas/new',
        {
          pregunta: txtPregunta,
          respuesta: cmbRespuesta,
          categoria: cmbCategoria,
          dificultad: cmbDificultad,
          autor: email, 
        }
      );
      console.log('Pregunta Request: ', data)
    } catch(ex) {
      console.log('Error on Pregunta submit', ex);
    }
  }
  const onClear = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    

  }
  // const onChangeHandler = (e) => {
  //   const {name, value} = e.target;
  // }
  return (
    <>
      <Agregar
        txtPreguntaValue={txtPregunta}
        cmbRespuestaValue={cmbRespuesta}
        cmbCategoriaValue={cmbCategoria}
        cmbDificultadValue={cmbDificultad}
        onChange={onChangeHandler}
        errorTxtPregunta=''
        onConfirmClick={onConfirm}
        onClearClick={onClear}
      />
    </>
  )
}

export default AgregarPage;
