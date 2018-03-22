import React from 'react';
import CardFavorite from './CardFavorite';
import Header from './../Header/Header';
import css from "./Favorites.css"

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
const Favorites = ({ information }) => {
  return (
    <div>
        <Header/>
    <section>
      <div className="title">
        <h4 className="d-flex justify-content-center">Mis Favoritos</h4>
      </div>
      <NavLink to={"/Home"} className="btn btn-lyft btn-lg btn-block" >
      <div className="back"><i className="fas fa-arrow-left"></i></div>

        </NavLink>
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