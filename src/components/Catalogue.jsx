import React from 'react';
import './styles/Catalogue.css';

import Paginator from './Paginator';
import Animes from './Anime';

const datosAnime = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/915yUg7qU9L.jpg',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Noragami Aragoto',
    text: 'Descripcion del Anime',
  },
  {
    image:
      'https://i.pinimg.com/originals/71/03/bf/7103bfad2dbfb74d381d358de750bc51.png',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Kyoukai no Kanata',
    text: 'Descripcion del Anime',
  },
  {
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421561226/my-neighbor-totoro-picture-book-new-edition-9781421561226_hr.jpg',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Totoro',
    text: 'Descripcion del Anime',
  },
  {
    image: 'https://i1.sndcdn.com/artworks-000128137511-pp3z0y-t500x500.jpg',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Charlotte',
    text: 'Descripcion del Anime',
  },
  {
    image: 'https://i1.sndcdn.com/artworks-000090830416-ertftf-t500x500.jpg',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Centimeters Per Second',
    text: 'Descripcion del Anime',
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/81aQhXYZoQL.jpg',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Magi',
    text: 'Descripcion del Anime',
  },
  {
    image:
      'https://i.pinimg.com/originals/61/b4/12/61b412751111d73947454863c5398d9e.jpg',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Erased',
    text: 'Descripcion del Anime',
  },
  {
    image:
      'https://i.pinimg.com/736x/f2/11/eb/f211eb83e2d88a796b9e67ea6b26e218.jpg',
    imagenAtras:
      'https://i.pinimg.com/originals/aa/35/f4/aa35f4e1317af49d7affcad7af75fecc.jpg',
    name: 'Attack on Titan',
    text: 'Descripcion del Anime',
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
              <Animes
                image={anime.image}
                name={anime.name}
                imagenAtras={anime.imagenAtras}
                text={anime.text}
              />
            ))}
        </div>
        <Paginator text="Últimos Animes" />
        <hr className="pass1" />
        <div className="animes">
          {datosAnime
            .filter((anime) => datosAnime.indexOf(anime) >= 4)
            .map((anime) => (
              <Animes
                image={anime.image}
                name={anime.name}
                imagenAtras={anime.imagenAtras}
                text={anime.text}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Catalogue;
