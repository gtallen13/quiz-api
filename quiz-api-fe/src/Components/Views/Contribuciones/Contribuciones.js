import Page from "../../UX/Page/Page";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "./Contribuciones.css";

const Contribuciones = ({ preguntas, onConfirmClick }) => {
  return (
    <Page header={<h2>&nbsp;Tus Contribuciones</h2>} footer={<Nav />}>
      {preguntas.map((item, key) => {
          return (
            <div className="content-contribuciones" key={key}>
            <p>{item.pregunta}</p>
            <p>{item.respuesta?'verdadero':'falso'}</p>
            <PrimaryButton className={["btnContribuciones"]} onClick={onConfirmClick}>
              Editar
            </PrimaryButton>
          </div>
          )
      })}
    </Page>
  );
};

export default Contribuciones;
