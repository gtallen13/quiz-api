import Solicitud from "./Solicitud";
import { useEffect ,useState } from "react";
import { useSelector, dispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import {privateAxios} from '../../../Lib/apiClient'

const SolicitudPage = () => {
  const { jwtToken } = useSelector((state) => state.security);
  const [txtCantidad, setTxtCantidad] = useState(true);
  const [cmbCategoria, setcmbCategoria] = useState("Deportes");
  const [cmbDificultad, setcmbDificultad] = useState("Facil");

  const onClear = (e) =>{
    e.preventDefault()
    e.stopPropagation()
    setTxtCantidad("");
  }

  const onChangeHandler = ({ target: { name, value } }) =>  {
    switch (name) {
      case "txtCantidad":
        setTxtCantidad(value);
        break;
        case "cmbCategoria":
        setcmbCategoria(value);
        break;
        case "cmbDificultad":
        setcmbDificultad(value);
        break;
    }
  };


  return <Solicitud
      txtCantidadValue={txtCantidad}
      cmbCategoriaValue = {cmbCategoria}
      cmbDificultadValue = {cmbDificultad}
      onChange={onChangeHandler}
      errorTxtCantidad= ""
      onClear={onClear}
      //onClickConfirmSolicitud={loadData}
  />;

};

export default SolicitudPage;
