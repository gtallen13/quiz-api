import Page from "../../UX/Page/Page";
import Nav from "../../UX/Nav/Nav";
import "./ResultadosCss.css"
import { PrimaryButton } from "../../UX/Forms/Button";
const Resultados = ({Informacion}) => {
  return (
    <Page header={<h2>&nbsp;Resultados</h2>} footer={<Nav />}>
      <div class="divClass">
        <p>Hola Mundo</p>
        <p>adios</p>
        <PrimaryButton className={["top-right"]}>Marca como revisado</PrimaryButton>
      </div>
    </Page>
  );
};

export default Resultados;
