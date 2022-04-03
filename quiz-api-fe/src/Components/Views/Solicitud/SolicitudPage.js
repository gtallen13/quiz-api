import Solicitud from "./Solicitud";
import { useState } from "react";

const SolicitudPage = () => {
  const [txtCantidad, setTxtCantidad] = useState("");
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case "txtCantidad":
        setTxtCantidad(value);
        break;
    }
  };
  return <Solicitud 
      txtCantidadValue={txtCantidad}
      onChange={onChangeHandler}
      errorTxtCantidad= ""
  />;
};

export default SolicitudPage;
