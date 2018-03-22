import React, {Component} from 'react';
import Home from './home/Home';
import Favorites from './Favorites/Favorites';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

const data = [
	{descripcion: 'Sporting Goods', mapaurl: 'src/assets/images/mapa.png'},
	{descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', mapaurl: 'src/assets/images/mapa.png'}
  ]

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
			<Route  path="/Home" render={() => <Home model={model} />}/>

			<Route  path="/Favorites" render={() => <Favorites model={model} information={data}/>}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;