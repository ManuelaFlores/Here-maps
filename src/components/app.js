import React from 'react';
import Header from './Header/Header';
import Main from './home/Main';
import OptionsList from './home/OptionsList';
import Favorites from './Favorites/Favorites';

const data = [
  {descripcion: 'Sporting Goods', mapaurl: 'src/assets/images/mapa.png'},
  {descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', mapaurl: 'src/assets/images/mapa.png'}
]


const App = () => (
  <div className ="">
    <Header/>
    <Main/>
    <OptionsList/>
    <Favorites information={data}/>
    </div>
)

export default App;
