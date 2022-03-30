import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import ComboBox from "../../UX/Forms/ComboBox";
import {PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
//import Nav from "../../UX/Nav";

const Solicitud = ({
    txtCantidadValue,
    errorTxtCantidad,
    onChange: onChangeHandler,

}) => {
   const categorias = ["Deportes", "Ciencia", "Historia", "Media", "Juegos", "Programacion","Geografia"];
   const dificultad = ["Facil", "Medio", "Dificil"];

    return (
        <Page header={(<h2>&nbsp;Solicitud de Preguntas</h2>)}>
            <div className="center-page">
                <section className="form-wrapper">
                    <Input
                        label="Cantidad"
                        type="number"
                        name="txtCantidad"
                        value={txtCantidadValue}
                        error={errorTxtCantidad}
                        onChange={onChangeHandler}
                    />

                    <ComboBox
                        label="Categoria"
                        name="txtCategoria"
                        comboBoxOptions={categorias}
                    />
                    <ComboBox
                        label="Dificultad"
                        name="txtDificultad"
                        comboBoxOptions={dificultad}
                    />
                    <div >
                        <PrimaryButton> Solicitar</PrimaryButton>
                        <SecondaryButton>Limpiar</SecondaryButton>
                    </div>
                </section>
            </div>
        </Page>
    )
}

export default Solicitud;