import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Home from './home/Home';
import Favorites from './Favorites/Favorites';


const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
			<Route  path="/Lyft-app-react"
				       render={() => <Redirect to= {'/home'}/>}/>
			<Route  path="/Favorites" render={() => <Favorites model={model} />}/>

				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;