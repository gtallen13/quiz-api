import Editar from './Editar';
import { useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';

const EditarPage = ()=>{
  const [txtPregunta, setTxtPregunta] = useState('');
  const [cmbRespuesta, setcmbRespuesta] = useState(true);
  const [cmbCategoria, setcmbCategoria] = useState("Deportes");
  const [cmbDificultad, setcmbDificultad] = useState("Facil");
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
      const data = await publicAxios.post(
        '/api/v1/seguridad/signin',
        
      );
      console.log('Signin Request: ', data)
    } catch(ex) {
      console.log('Error on Sigin submit', ex);
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