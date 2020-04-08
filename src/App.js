import React from 'react';
import logo from './logo.svg';
import './App.css';

import Selecao from "./Views/Selecao";
import Resultado from "./Views/Resultado";

function App() {
  var fadeOut = "";
  const calcularResultado = function (filmes) {
    
  }
  return (
    <div className="App">
      <Selecao onFilmesSelected={calcularResultado} className={fadeOut}></Selecao>
    </div>
  );
}

export default App;
