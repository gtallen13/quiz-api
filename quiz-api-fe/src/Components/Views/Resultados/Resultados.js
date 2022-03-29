import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import Nav from "../../UX/Nav/Nav";
import "./ResultadosCss.css"
const Resultados = ({Informacion}) => {
  return (
    <Page header={<h2>&nbsp;Resultados</h2>} footer={<Nav />}>
      <div class="divClass">
        <p>Hola Mundo</p>
        <p></p>
        <Input
            className={["checkBox"]}
            type="checkbox"
            label="Marcar"
        />
      </div>
    </Page>
  );
};

export default Resultados;
