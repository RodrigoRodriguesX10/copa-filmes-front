import React, { useState } from 'react';
import './App.css';

import Selecao from "./Views/Selecao";
import Resultado from "./Views/Resultado";
import SlidePage, { SlidePosition } from './Components/SlidePage';

function App() {
  var path = window.location.pathname;
  const [selecao, setSelecao] = useState(path === "/resultado" ? SlidePosition.OUT : SlidePosition.IN);
  const [resultado, setResultado] = useState(path === "/resultado" ? SlidePosition.IN : SlidePosition.INITIAL);
  const [filmes, setFilmes] = useState([]);

  window.onpopstate = function (event) {
    changeState(window.location.pathname);
  };

  const changeState = function (state) {
    switch (state) {
      case "/resultado":
        setSelecao(SlidePosition.OUT);
        setResultado(SlidePosition.IN);
        break;
      default:
        setSelecao(SlidePosition.IN);
        setResultado(SlidePosition.INITIAL);
        break;
    }
  }

  const calcularResultado = function (selecionados) {
    var selected = Array.from(selecionados);
    window.history.pushState("", "", "/resultado");
    changeState("/resultado");
    setFilmes(selected);
  };

  return (
    <div className="App">
      <SlidePage position={selecao}>
        <Selecao onFilmesSelected={calcularResultado}></Selecao>
      </SlidePage>
      <SlidePage position={resultado}>
        <Resultado className="Resultado" filmes={filmes}></Resultado>
      </SlidePage>
    </div>
  );
}

export default App;
