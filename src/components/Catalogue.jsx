import React from 'react';
import './styles/Catalogue.css';

import Paginator from './Paginator';
import Animes from './Animes';
import anime1 from '../images/caratulas/anime1.jpg';
import anime2 from '../images/caratulas/anime2.jpg';
import anime3 from '../images/caratulas/anime3.jpg';
import anime4 from '../images/caratulas/anime4.jpg';
import anime5 from '../images/caratulas/anime5.jpg';
import anime6 from '../images/caratulas/anime6.jpg';
import anime7 from '../images/caratulas/anime7.jpg';
import anime8 from '../images/caratulas/anime8.jpg';

const datosAnime = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/915yUg7qU9L.jpg',
    name: 'Noragami Aragoto',
  },
  {
    image:
      'https://i.pinimg.com/originals/71/03/bf/7103bfad2dbfb74d381d358de750bc51.png',
    name: 'Kyoukai no Kanata',
  },
  {
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421561226/my-neighbor-totoro-picture-book-new-edition-9781421561226_hr.jpg',
    name: 'Totoro',
  },
  {
    image: 'https://i1.sndcdn.com/artworks-000128137511-pp3z0y-t500x500.jpg',
    name: 'Charlotte',
  },
  {
    image: 'https://i1.sndcdn.com/artworks-000090830416-ertftf-t500x500.jpg',
    name: 'Centimeters Per Second',
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/81aQhXYZoQL.jpg',
    name: 'Magi',
  },
  {
    image:
      'https://i.pinimg.com/originals/61/b4/12/61b412751111d73947454863c5398d9e.jpg',
    name: 'Erased',
  },
  {
    image:
      'https://i.pinimg.com/736x/f2/11/eb/f211eb83e2d88a796b9e67ea6b26e218.jpg',
    name: 'Attack on Titan',
  },
];

class Catalogue extends React.Component {
  render() {
    return (
      <div className="catalogo">
        <Paginator text="Últimos Capítulos" />
        <hr className="pass1" />
        <div className="animes">
          {datosAnime
            .filter((anime) => datosAnime.indexOf(anime) <= 3)
            .map((anime) => (
              <Animes image={anime.image} name={anime.name} />
            ))}
        </div>
        <Paginator text="Últimos Animes" />
        <hr className="pass1" />
        <div className="animes">
          {datosAnime
            .filter((anime) => datosAnime.indexOf(anime) >= 4)
            .map((anime) => (
              <Animes image={anime.image} name={anime.name} />
            ))}
        </div>
      </div>
    );
  }
}

export default Catalogue;
