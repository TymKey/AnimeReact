import React from 'react';
import playImg from '../images/play.png';
import backImg from '../images/back.png';
import nextImg from '../images/next.png';

class Paginator extends React.Component {
  render() {
    return (
      <div className="paginador">
        <div className="left">
          <img src={playImg} alt="" className="play" />
          <p className="text">{this.props.text}</p>
        </div>
        <div className="right">
          <img src={backImg} alt="" className="back" />
          <img src={nextImg} alt="" className="next" />
        </div>
      </div>
    );
  }
}

export default Paginator;
