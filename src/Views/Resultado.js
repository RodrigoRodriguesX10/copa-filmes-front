import React, { Component } from "react";
import FilmesApi from "../Util/FilmeApi";

export default class Resultado extends Component {
    constructor({ filmes }) {
        super();
        if (!filmes) throw new Error("O parâmetro filmes é obrigatório");
    }
    render = () => (<div>
        <h1>Resultado</h1>
        <div>Vencedor: </div>
    </div>)
}