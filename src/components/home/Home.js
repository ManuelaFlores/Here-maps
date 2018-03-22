import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import Header from './../Header/Header'
import Main from './Main';
import OptionList from './OptionsList';
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