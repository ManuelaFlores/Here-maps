import React from 'react';
import CardFavorite from './CardFavorite';
import Header from './../Header/Header';
import './Favorites.css';
const Favorites = ({ information }) => {
  return (
    <div>
        <Header/>
    <section>
      <div className="title">
        <h4 className="d-flex justify-content-center">Mis Favoritos</h4>
      </div>
      {information.map(fav =>
        <CardFavorite
          fav={fav.descripcion}
          mapaurl={fav.mapaurl}
          key={fav.descripcion} />)}

    </section>
    </div>
    )
}
export default Favorites