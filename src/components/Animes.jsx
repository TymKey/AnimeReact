import React from 'react';

class Animes extends React.Component {
  render() {
    return (
      <div className="cover">
        <img src={this.props.image} alt="" className="anime" />
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

export default Animes;
