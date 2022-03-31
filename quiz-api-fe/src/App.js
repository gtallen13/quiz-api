import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import store from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
import Todo from './Components/Views/Todo/TodoPage';
import ResultadosPage from './Components/Views/Resultados/ResultadosPage';
import Contribuciones from './Components/Views/Contribuciones/ContribucionesPage';
import Agregar from './Components/Views/AgregarPreguntas/AgregarPage';
import Editar from './Components/Views/Editar/EditarPage';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/Resultados" element={<ResultadosPage />} />
        <Route path="/contribuciones" element={<Contribuciones />} />
        <Route path='/agregar' element={< Agregar />} />
        <Route path="/editar" element={<Editar/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
