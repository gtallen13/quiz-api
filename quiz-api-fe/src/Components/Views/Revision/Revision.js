import Page from "../../UX/Page/Page";
import { PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import { Link } from "react-router-dom";
import './Revision.css'
const Revision = ({preguntas, onEditClick,onReviewClick, msgRevisado})=> {
  return (
    <Page header={(<h2>&nbsp;Preguntas para Revision</h2>)} footer={<Nav />}>
      {preguntas.length===0 && <h1>No hay preguntas para revisar</h1>}
      {preguntas.map((item,key)=>(
        <section className="info-wrapper" key={key}>
            <div className="info-container">
              <p>{item.pregunta}</p>
              <p>{item.respuesta? "Verdadero":"Falso"}</p>
              <p className="msg-revisado">{msgRevisado}</p>
            </div>
            <div className="top-right">
              <Link to={`/editar/${item._id}`}>
                <PrimaryButton onClick={onEditClick} value={item._id}>Editar</PrimaryButton>
              </Link>
              <SecondaryButton onClick={onReviewClick} value={item._id}>Marca como Revisado</SecondaryButton>
            </div>
        </section>
      ))}
    </Page>
  );
}

export default Revision;
