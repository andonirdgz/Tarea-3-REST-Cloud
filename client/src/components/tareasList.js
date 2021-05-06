import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const Tarea = props => {
  return (
    <tr>
      <td>{props.tarea._id}</td>
      <td>{props.tarea.name}</td>
      <td>{props.tarea.points}</td>
      <td>{props.tarea.course}</td>
      <td>{props.tarea.dueDate}</td>
      <td>{props.tarea.createdAt}</td>
    </tr>
  );
}

class TareasList extends Component {

  constructor(props) {
    super(props);
    this.state = {tareas: []};
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API)
    .then(response => {
      this.setState({tareas: response.data.data});
    })
    .catch(function (error){
      console.log(error);
    })
  }

  tareasList() {
    return this.state.tareas.map(function (currentTarea, i) {
      return <Tarea tarea={currentTarea} key={i} />;
    });
  }

  render() {
    
    return (

      <div className="container">
        <h2>La lista de las tareas</h2>
        <div>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Materia</th>
                <th>Puntos</th>
                <th>Fecha de Creación</th>
                <th>Fecha de entrega</th>
              </tr>
            </thead>
            <tbody>
              {this.tareasList()}
            </tbody>
          </table>
        </div>
      </div>
    
    ); // return
  } // render
} // App

export default TareasList;