import React from 'react';
import exerciseImg from '../images/logo.png'
import './styles/Card.css'
class Card extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={exerciseImg} alt=""/>
        </div>
        <div>
            <h1>Technique Guides</h1>
            <p>Learn amazing street workout and calisthenics</p>
        </div>
      </div>
    );
  }
}

export default Card;
