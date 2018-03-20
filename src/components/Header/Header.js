import React from 'react';
import Navbar from './Navbar';

const listMenu=['Ver Rutas', 'Encuentra tu ruta'];

const Header = () => (
    <div>
    <Navbar menu={listMenu} />
    </div>

)


export default Header