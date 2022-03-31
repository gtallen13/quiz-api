import Editar from './Editar';
import { useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';

const EditarPage = ()=>{
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
        onChange={onChangeHandler}
        errorTxtPregunta=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default EditarPage;