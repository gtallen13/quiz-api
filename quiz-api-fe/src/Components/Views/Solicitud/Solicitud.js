import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import ComboBox from "../../UX/Forms/ComboBox";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import { Link } from "react-router-dom";
//import Nav from "../../UX/Nav";


const Solicitud = ({
  txtCantidadValue,
  cmbCategoriaValue,
  cmbDificultadValue,
  errorTxtCantidad,
  onChange: onChangeHandler,
  onClear,
}) => {
  const categorias = [
    "Deportes",
    "Ciencia",
    "Historia",
    "Media",
    "Juegos",
    "Programacion",
    "Geografia",
  ];
  const dificultad = ["Facil", "Medio", "Dificil"];

  return (
    <Page header={<h2>&nbsp;Solicitud de Preguntas</h2>} footer={<Nav />}>
      <div className="center-page">
        <section className="form-wrapper">
          <Input
            label="Cantidad"
            type="number"
            min="0"
            name="txtCantidad"
            value={txtCantidadValue}
            error={errorTxtCantidad}
            onChange={onChangeHandler}
          />

          <ComboBox
            label="Categoria"
            name="cmbCategoria"
            comboBoxOptions={categorias}
            value = {cmbCategoriaValue}
            onChange = {onChangeHandler}
          />
          <ComboBox
            label="Dificultad"
            name="cmbDificultad"
            comboBoxOptions={dificultad}
            value = {cmbDificultadValue}
            onChange = {onChangeHandler}

          />
          <div>
            <Link to = {`/Resultados/${cmbCategoriaValue}/${cmbDificultadValue}/${txtCantidadValue}`}>
              <PrimaryButton>
                {" "}
                Solicitar
              </PrimaryButton>
            </Link>
            <SecondaryButton onClick = {onClear}>Limpiar</SecondaryButton>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Solicitud;
