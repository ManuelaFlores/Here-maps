import React from 'react';
import CardFavorite from './CardResultSearch';
import './ResultSearch.css';
const ResultSearch = ({ information }) => {
  return (
    <section>
      <div className="title">
        <h4 className="d-flex justify-content-center">Ruta</h4>
      </div>
      {information.map(fav =>
        <CardFavorite
          fav={fav.descripcion}
          mapaurl={fav.mapaurl}
          key={fav.descripcion} />)}

    </section>)
}
export default ResultSearch