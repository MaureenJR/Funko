
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Formulario from './componentes/Formulario';
import Todos from './componentes/Todos';
import Actualizar from './componentes/Actualizar';
import VerProducto from './componentes/VerProducto';

const App = () => {
  return (
    <div className="App">
      <div className='bar'>
        <Link to="/" className="btn btn-outline-light m-3">Inicio</Link>
        <Link to="/nuevo" className="btn btn-outline-light m-3">Agregar Producto</Link>
        <img src="https://vignette.wikia.nocookie.net/funko/images/7/7b/Pop-logo.png/revision/latest?cb=20130305201121" alt="logo" className="logo"/>
      </div>
      <Routes>
        <Route path='/' exact element={<Todos/>} />
        <Route path='/nuevo' element={<Formulario/>}/>
        <Route path='/editar/:id' element={<Actualizar/>}/>
        <Route path='/producto/:id' element={<VerProducto/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
