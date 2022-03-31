import Page from "../../UX/Page/Page";
import { PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import './Revision.css'
const Revision = ()=> {
  return (
    <Page header={(<h2>&nbsp;Preguntas para Revision</h2>)} footer={<Nav />}>
      <section className="info-wrapper">
          <div className="info-container">
            <p>Est labore anim sunt minim. Nulla velit magna nisi reprehenderit tempor aliqua labore ea laborum mollit. Lorem nisi irure eiusmod sit minim occaecat. Esse excepteur ullamco qui reprehenderit elit mollit sint adipisicing exercitation esse enim fugiat. Sint eu sint anim consequat consectetur ullamco ex esse duis sunt laboris.</p>
            <p>True</p>
          </div>
          <div className="top-right">
            <PrimaryButton>Editar</PrimaryButton>
            <SecondaryButton>Marca como Revisado</SecondaryButton>
          </div>
      </section>
    </Page>
  );
}

export default Revision;
