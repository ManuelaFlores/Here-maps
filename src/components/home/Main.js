import React from 'react';
import image from '../../assets/images/mapa.png';


const Main = () => (
  <div className="row">
  <div className="col-md-3 col-sm-4 col-xs-4">
    </div>
    <div className="col-md-6 col-sm-4 col-xs-4">
      <br />
      <img className="col-md-6 col-sm-8 col-xs-12 w-100 img-size justify-content-center align-items-center" src={image} alt="here-maps" />
    </div>
    <div className="col-md-3 col-sm-4 col-xs-4">
    </div>
  </div>
)

export default Main;