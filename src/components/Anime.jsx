import React from 'react';

class Anime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isVisibleDescription: false,
      contador: 0,
    };
    this.cambiarPortada = this.cambiarPortada.bind(this);
    this.mostrarDescripcion = this.mostrarDescripcion.bind(this);
    this.aumentarContador = this.aumentarContador.bind(this);
  }

  cambiarPortada() {
    let nuevoEstado;
    if (this.state.isClicked) {
      nuevoEstado = false;
    } else {
      nuevoEstado = true;
    }
    this.setState({ isClicked: nuevoEstado });
    this.aumentarContador();
  }

  mostrarDescripcion() {
    let boton;
    if (this.state.isVisibleDescription) {
      boton = false;
    } else {
      boton = true;
    }
    this.setState({ isVisibleDescription: boton });
  }

  aumentarContador() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div className="cover">
        <img
          src={this.state.isClicked ? this.props.imagenAtras : this.props.image}
          alt=""
          className="anime"
          onClick={this.cambiarPortada}
        />
        <p className="name">{this.props.name}</p>
        <p className="description">
          se ha clickeado la imagen {this.state.contador} veces
        </p>
        <p className="descriptionText" hidden={this.state.isVisibleDescription}>
          {this.props.text}
        </p>
        <p className="description" onClick={this.mostrarDescripcion}>
          {this.state.isVisibleDescription
            ? 'Ver Descripción'
            : 'Ocultar Descripción'}
        </p>
      </div>
    );
  }
}

export default Anime;
