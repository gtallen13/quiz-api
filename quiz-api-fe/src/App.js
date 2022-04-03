import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './Store';
import Private from './Components/UX/Private/Private';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
import Todo from './Components/Views/Todo/TodoPage';
import ResultadosPage from './Components/Views/Resultados/ResultadosPage';
import Contribuciones from './Components/Views/Contribuciones/ContribucionesPage';
import Agregar from './Components/Views/AgregarPreguntas/AgregarPage';
import Solicitud from './Components/Views/Solicitud/SolicitudPage'
import Editar from './Components/Views/Editar/EditarPage';
import Revision from './Components/Views/Revision/RevisionPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/Resultados" element={<Private><ResultadosPage /></Private>} />
            <Route path="/contribuciones" element={<Private><Contribuciones /></Private>} />
            <Route path='/agregar' element={<Private>< Agregar /></Private>} />
            <Route path="/editar/:idPregunta" element={<Private><Editar/></Private>}/>
            <Route path="/revision" element={<Private><Revision/></Private>}/>
            <Route path="/solicitud" element={<Private><Solicitud/></Private>}/>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
