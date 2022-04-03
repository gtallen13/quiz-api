import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Login = ({
  txtCorreoValue,
  txtPasswordValue,
  onChange: onChangeHandler,
  errorTxtCorreo,
  errorPassword,
  onConfirmClick,
  onCancelClick
}) => {
  let navigate = useNavigate()
  
  return (
    <Page header={(<h2>&nbsp;Iniciar Sesión</h2>)} footer={<Nav/>}>
      <div className="center-page">
        <section className="form-wrapper">
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
            hasError={!!(errorPassword && true)}
            onChange={onChangeHandler}
          />
          <div className="button-container column">
            <PrimaryButton onClick={onConfirmClick}>
              Iniciar Sesión
            </PrimaryButton>
            <p>No tiene cuenta ? 
              <a href="/Signin">Crear cuenta</a>
            </p>
          </div>
        </section>

      </div>
    </Page>
  );
}

export default Login;
