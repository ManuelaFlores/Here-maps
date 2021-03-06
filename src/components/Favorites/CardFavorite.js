import React from 'react';
import imag from '../../assets/images/mapa.png';

const CardFavorite = ({ fav, mapaurl }) => (
  <div className="sectFavorites">
    <div className="card mb-4 box-shadow">
    <div className="col-4">
          <div class="text-center">
          <img src={imag} className="card-img-top" alt="Card image cap" />
          </div>     
        </div>
      <div className="card-body">
        <p className="card-text">
          {fav}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
            <i className="fas fa-heart text-danger"></i>
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-share-alt text-info"></i>
            </button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div></div>
)
export default CardFavorite