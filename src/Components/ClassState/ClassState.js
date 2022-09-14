import React, { Component } from "react";

class ClassState extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        <input placeholder="Codigo de seguridad"/>
        <button>Comprobar</button>  
      </React.Fragment>
    );
  }
}

export { ClassState };
