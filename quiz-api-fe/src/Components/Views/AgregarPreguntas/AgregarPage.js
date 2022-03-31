import Agregar from './Agregar';
import { useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';

const AgregarPage = ()=>{
  const [txtPregunta, setTxtPregunta] = useState('');
  const [cmbRespuesta, setcmbRespuesta] = useState('');
  const [cmbCategoria, setcmbCategoria] = useState('');
  const [cmbDificultad, setcmbDificultad] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtPregunta':
        setTxtPregunta(value);
        break;
      case 'cmbRespuesta':
        setcmbRespuesta(value);
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
          respuesta: false,
          categoria: "Deportes",
          dificultad: "Facil",
          autor: "xd",
          
        }, {headers: {Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5yX2xvcGV6ckB1bmljYWguZWR1Iiwicm9sZXMiOlsicHVibGljIl0sIl9pZCI6IjYyNDRkOWY2ZGRmOGU0YzUwNjMzNjNmOSIsImlhdCI6MTY0ODY4MDQxMX0.iRD3BUzm_datD6qsOUQMVaTY_JK4f0YtmRCVGsGc9Ys'}}
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
        onChange={onChangeHandler}
        errorTxtPregunta=''
        onConfirmClick={onConfirm}
        onClearClick={onClear}
      />
    </>
  )
}

export default AgregarPage;
