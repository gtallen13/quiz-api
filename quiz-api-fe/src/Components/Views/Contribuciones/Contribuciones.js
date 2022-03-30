import Page from "../../UX/Page/Page";
import { PrimaryButton } from "../../UX/Forms/Button"
import Nav from "../../UX/Nav/Nav"
import "./Contribuciones.css"

const Contribuciones = ({preguntas}) =>{
    return(
        <Page header={(<h2>&nbsp;Tus Contribuciones</h2>)} footer={<Nav />}>
            <div className="content-contribuciones">
                <p>hola papi</p>
                <p>Pura tilapia</p>
                <PrimaryButton className={["btnContribuciones"]}>Editar</PrimaryButton>
            </div>
        </Page>
        )
}

export default Contribuciones;