import React from 'react';
import exerciseImg from '../images/logo.png';
import './styles/Card.css';
class Card extends React.Component {
  render() {
    return (
      <div className="card mx-auto Anime-Card">
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={exerciseImg} alt="" />
            </div>
            <div className="col-6 Anime-Card-Info">
              <h1>Titulo del Anime</h1>
              <p>Leve Descripción del anime en especifico</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
