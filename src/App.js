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

  const calcularResultado = function (selecionados) {
    console.log("Clicou: ", selecionados);
    var selected = Array.from(selecionados);
    setSelecao(SlidePosition.OUT);
    setResultado(SlidePosition.IN);
    setFilmes(selected);
  };

  return (
    <div className="App">
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
