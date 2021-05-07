import React from 'react';

import Header from './components/Header';
import Catalogue from './components/Catalogue';

class AnimeYT extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Catalogue />
      </div>
    );
  }
}

export default AnimeYT;
