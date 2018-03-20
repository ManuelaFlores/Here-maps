import React from 'react';

const OptionsList = () => (
    <ul className="bg-options-list m-0 p-0">
      <li  className="text-white p-3 item-styles d-flex justify-content-center font-weight-light">
      <div className="box-input-styles w-50 d-flex justify-content-between"><input className="input-styles text-white p-1 w-75 font-weight-light" type="text" placeholder="Buscar rutas ..."/><i className="fas fa-search icon-search-styles icon-color"></i></div>
      </li>
      <li className="text-white p-3 item-styles d-flex justify-content-center font-weight-light ">
        Iniciar ruta <i className="fas fa-map-signs px-3 icon-color"></i>
      </li>
      <li  className="text-white p-3 item-styles d-flex justify-content-center font-weight-light">
        Mis rutas <i className="fas fa-heart px-3 icon-color"></i>
      </li>
    </ul>
)

export default OptionsList;