import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton} from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const SignIn = ({
  txtCorreoValue,
  txtPasswordValue,
  txtUsernameValue,
  onChange: onChangeHandler,
  errorTxtCorreo,
  errorPassword,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Crear Cuenta</h2>)} footer={<Nav />}>
      <div className="center-page">
        <section className="form-wrapper">
        <Input
            label="Nombre de Usuario"
            type="text"
            name="txtUsername"
            placeholder="Su Nombre de Usuario"
            value={txtUsernameValue}
            error={errorTxtCorreo}
            onChange={onChangeHandler}
          />
          <Input
            label="Correo Electrónico"
            type="text"
            name="txtCorreo"
            placeholder="Su Correo Electrónico"
            value={txtCorreoValue}
            error={errorTxtCorreo}
            onChange={onChangeHandler}
          />
          <Input
            label="Contraseña"
            type="password"
            name="txtPassword"
            placeholder="Contraseña"
            value={txtPasswordValue}
            info="Mínimo 8 caractéres, una Mayuscula, una minuscula, un numero y un simbolo"
            error={errorPassword}
            onChange={onChangeHandler}
          />
          <div className="button-container column">
            <PrimaryButton onClick={onConfirmClick}>
              Crear Cuenta
            </PrimaryButton>
            <p>Tienes una cuenta?<a href="/Login">Inicia Sesion</a></p>
          </div>
        </section>

      </div>
    </Page>
  );
}

export default SignIn;
