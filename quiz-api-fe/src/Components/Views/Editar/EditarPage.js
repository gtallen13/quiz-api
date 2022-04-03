import Editar from './Editar';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import { privatecAxios } from '../../../Lib/apiClient';

const EditarPage = ()=>{

  const{jwtToken} = useSelector((state)=>state.security);
  const dispatch = useDispatch();

  
  const [txtPregunta, setTxtPregunta] = useState('');
  const [cmbTespuesta, setCmbRespuesta] = useState('');
  const [cmbcategoria, setCmbCategoria] = useState('');
  const [txtPregunta, setTxtPregunta] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtPregunta':
        setTxtPregunta(value);
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
          pregunta: textPregunta,
          respuesta: txtRespuesta
        }
        
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
        onChange={onChangeHandler}
        errorTxtPregunta=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default EditarPage;