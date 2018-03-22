import React from 'react';
import CardFavorite from './CardFavorite';
import './Favorites.css';



const Favorites = ({ information }) => {
  return (
    <section>
      <div className="title">
        <h4 className="d-flex justify-content-center">Mis Favoritos</h4>
      </div>
      {information.map(fav =>
        <CardFavorite
          fav={fav.descripcion}
          mapaurl={fav.mapaurl}
          key={fav.descripcion} />)}

    </section>)
}
export default Favorites