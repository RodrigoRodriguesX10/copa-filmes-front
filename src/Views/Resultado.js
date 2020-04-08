import React from "react";
import FilmesApi from "../Util/FilmeApi";

function Resultado({ filmes }) {
    if (!filmes) throw new Error("O parâmetro filmes é obrigatório");

    return (<div>
        <h1>Resultado</h1>
        <div>Vencedor: </div><br />
        <div>Vice-Vencedor: </div>
    </div>);
}

export default Resultado;