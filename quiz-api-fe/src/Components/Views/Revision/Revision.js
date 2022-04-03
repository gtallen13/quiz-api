import Page from "../../UX/Page/Page";
import { PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import './Revision.css'
const Revision = ({preguntas})=> {
  return (
    <Page header={(<h2>&nbsp;Preguntas para Revision</h2>)} footer={<Nav />}>
      {preguntas.map((item,key)=>(
        <section className="info-wrapper" key={key}>
            <div className="info-container">
              <p>{item.pregunta}</p>
              <p>{item.respuesta? "Verdadero":"Falso"}</p>
            </div>
            <div className="top-right">
              <PrimaryButton>Editar</PrimaryButton>
              <SecondaryButton>Marca como Revisado</SecondaryButton>
            </div>
        </section>
      ))}
    </Page>
  );
}

export default Revision;
