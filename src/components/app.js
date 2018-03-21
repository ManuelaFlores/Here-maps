import React from 'react';
import Header from './Header/Header';
import ResultSearch from './ResultSearch/ResultSearch';

const data = [
  {descripcion: 'Sporting Goods', mapaurl: 'src/assets/images/mapa.png'},
  {descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', mapaurl: 'src/assets/images/mapa.png'}
]

const App = () => (
  <div>
  <Header/>
  <ResultSearch information={data}/>
  </div>
)

export default App