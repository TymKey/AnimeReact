import React from 'react';
import logoImg from '../images/logo.png';
import lupaImg from '../images/lupa.png';
import userImg from '../images/user.png';
import './styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="top">
          <div className="left">
            <div>
              <img src={logoImg} alt="" className="logo" />
            </div>
            <div className="menu">
              <div className="btn">
                <p>Inicio</p>
              </div>
              <div className="btn">
                <p>Anime</p>
              </div>
              <div className="btn">
                <p>Fecha de estrenos</p>
              </div>
              <input type="text" placeholder="Buscar..." className="box" />
              <img src={lupaImg} alt="" className="lupa" />
            </div>
          </div>
          <div className="right">
            <img src={userImg} alt="" className="userImg" />
            <div className="btn">
              <p>TymKey</p>
            </div>
          </div>
        </div>
        <hr className="pass" />
      </div>
    );
  }
}

export default Header;
