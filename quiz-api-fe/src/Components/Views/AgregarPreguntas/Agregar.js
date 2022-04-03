import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import ComboBox from "../../UX/Forms/ComboBox";

const Agregar = ({
  txtPreguntaValue,
  cmbRespuestaValue,
  cmbCategoriaValue,
  cmbDificultadValue,
  onChange: onChangeHandler,
  errorTxtPregunta,
  onConfirmClick,
  onClearClick
})=> {

  const respuestas = ["Verdadero","Falso"]
  const categorias= [
    "Deportes",
    "Ciencia",
    "Historia",
    "Media",
    "Juegos",
    "Programacion",
    "Geografia"
  ]
  const dificultades = [
    "Facil",
    "Media",
    "Dificil"
  ]
  return (
    <Page header={(<h2>&nbsp;Crear Cuenta</h2>)} footer={<Nav />}>
      <div className="center-page">
        <section className="form-wrapper">
        <Input
            label="Pregunta"
            type="text"
            name="txtPregunta"
            placeholder="Escriba la pregunta"
            value={txtPreguntaValue}
            error={errorTxtPregunta}
            onChange={onChangeHandler}
            
          />
          <ComboBox 
          label="Respuesta" 
          comboBoxOptions={respuestas}
          value={cmbRespuestaValue}
          onChange={onChangeHandler}
          name="cmbRespuesta"
          />
          <ComboBox 
          label="Categoria" 
          comboBoxOptions={categorias}
          value={cmbCategoriaValue} 
          name="cmbCategoria"
          onChange={onChangeHandler}
          />
          <ComboBox
          label="Dificultad" 
          value={cmbDificultadValue}
          comboBoxOptions={dificultades} 
          name="cmbDificultad"
          onChange={onChangeHandler}
          />
          <div className="button-container">
            <PrimaryButton onClick={onConfirmClick}>Agregar Pregunta</PrimaryButton>
            <SecondaryButton onClick={onClearClick}>Limpiar</SecondaryButton>
          </div>
        </section>
      </div>
    </Page>
  );
}

export default Agregar;
