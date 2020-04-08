import React from 'react';
import logo from './logo.svg';
import './App.css';

import Selecao from "./Views/Selecao";
import Resultado from "./Views/Resultado";

function App() {
  return (
    <div className="App">
      <Selecao></Selecao>
      <Resultado></Resultado>
    </div>
  );
}

export default App;
