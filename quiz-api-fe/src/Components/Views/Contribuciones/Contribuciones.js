import Page from "../../UX/Page/Page";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "./Contribuciones.css";
import { Link } from 'react-router-dom'

const Contribuciones = ({ preguntas, onConfirmClick }) => {
  return (
    <Page header={<h2>&nbsp;Tus Contribuciones</h2>} footer={<Nav />}>
      {preguntas.map((item, key) => {
          return (
            <div className="content-contribuciones" key={key}>
            <p>{item.pregunta}</p>
            <p>{item.respuesta?'verdadero':'falso'}</p>
            <Link to = {`/editar/${item._id}`}>
              <PrimaryButton className={["btnContribuciones"]}>
              Editar
              </PrimaryButton>
            </Link>
          </div>
          )
      })}
    </Page>
  );
};

export default Contribuciones;
