import React from 'react';
import Header from './../Header/Header'
import Main from './Main';
import OptionList from './OptionsList';
import Responsive from './../Carrusel/carrusel';

import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';


const Home = ( {model} ) => {
    return(
    <div>
        <Header/>
        <Main/>
        <OptionList/>
    </div>
    )
}

export default Home;