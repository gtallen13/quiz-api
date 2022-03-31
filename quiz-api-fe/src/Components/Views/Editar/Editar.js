import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Editar = ({
  txtPreguntaValue,
  onChange: onChangeHandler,
  errorTxtPregunta,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Editar Preguta</h2>)} footer={<Nav />}>
      <div className="center-page">
        <section className="form-wrapper">
        <Input
            label=" Ingrese Pregunta"
            type="text"
            name="txtPregunta"
            placeholder="Su Pregunta"
            value={txtPreguntaValue}
            error={errorTxtPregunta}
            onChange={onChangeHandler}
          />
         <section className="form_field">
            <label for="cmbRespuesta">Respuesta</label>
            <select id="cmbRespuetsa">
                <option value={true}>Verdadero</option>
                <option value={false}>Falso</option>
            </select>
          </section>
          <section className="form_field">
            <label for="cmbCategoria">Categoria</label>
            <select id="cmbCategoria">
                <option value="Deportes">Deportes</option>
                <option value="Ciencia">Ciencia</option>
                <option value="Historia">Historia</option>
                <option value="Media">Media</option>
                <option value="Juegos">Juegos</option>
                <option value="Programacion">Programacion</option>
                <option value="Geografia">Geografia</option>
            </select>
          </section>
          <section className="form_field">
            <label for="cmbDificultad">Dificultad</label>
            <select id="cmbDificultad">
                <option value="Facil">Facil</option>
                <option value="Media">Media</option>
                <option value="Dificil">Dificil</option>
            </select>
          </section>
          <div className="button-container">
            <PrimaryButton onClick={onConfirmClick}>
              Agregar
            </PrimaryButton>
            <SecondaryButton>Limpiar</SecondaryButton>
            
          </div>
        </section>

      </div>
    </Page>
  );
}

export default Editar;