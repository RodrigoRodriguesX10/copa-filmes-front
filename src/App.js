import React, { useState } from 'react';
import './App.css';

import Selecao from "./Views/Selecao";
import Resultado from "./Views/Resultado";
import SlidePage, { SlidePosition } from './Components/SlidePage';

function App() {
  var fadeOut = "";
  const [selecao, setSelecao] = useState(SlidePosition.IN);
  const [resultado, setResultado] = useState(SlidePosition.INITIAL);
  const [filmes, setFilmes] = useState([]);
  
  const calcularResultado = function (filmes) {
    console.log("Clicou: ", filmes);
    setSelecao(SlidePosition.OUT);
    setResultado(SlidePosition.IN);
    setFilmes(filmes);
  };

  return (
    <div className="App">
      {selecao} - {resultado}
      <SlidePage position={selecao}>
        <Selecao onFilmesSelected={calcularResultado} className={fadeOut}></Selecao>
      </SlidePage>
      <SlidePage position={resultado}>
        <Resultado className="Resultado" filmes={filmes}></Resultado>
      </SlidePage>
    </div>
  );
}

export default App;
