import Page from "../../UX/Page/Page";
import Nav from "../../UX/Nav/Nav";
import "./ResultadosCss.css"
import { PrimaryButton } from "../../UX/Forms/Button";
const Resultados = ({Informacion, onConfirmClick}) => {
  console.log(Informacion);
  return (
    <Page header={<h2>&nbsp;Resultados</h2>} footer={<Nav />}>
     {Informacion.map((item,key)=>(
        <div className="divClass" key={key}>
        <p>{item.pregunta}</p>
        <p>{item.respuesta ?"verdadero":"falso"}</p>
        <PrimaryButton className={["top-right"]} onClick={onConfirmClick}>Marcar para revisar</PrimaryButton>
      </div>
     ))}
    </Page>
  );
};

export default Resultados;
