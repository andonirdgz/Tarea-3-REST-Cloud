import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CrearTarea from './components/crearTarea';
import BorrarTarea from './components/borrarTarea';
import TareasList from './components/tareasList';
import TareasListHook from './components/tareasListHook';
import ActualizarTarea from './components/actualizarTarea';

class App extends Component {

  render() {
    
    return (
      <Router>
        <div>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Tareas App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Tareas</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/crear" className="nav-link">Crear Tarea</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/borrar" className="nav-link">Borrar Tarea</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/hook" className="nav-link">Lista tareas hook</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/actualizar" className="nav-link">Actualizar Tarea</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <Route exact path="/" component={TareasList} />
        <Route exact path="/crear" component={CrearTarea} />
        <Route exact path="/borrar" component={BorrarTarea} />
        <Route exact path="/hook" component={TareasListHook} />
        <Route exact path="/actualizar" component={ActualizarTarea} />
        
      </Router>
    ); // return
  } // render
} // App

export default App;
