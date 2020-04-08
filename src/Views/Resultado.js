import React, { Component } from "react";
import FilmesApi from "../Util/FilmeApi";

export default class Resultado extends Component {
    render = () => (<div>
        <h1>Resultado</h1>
        <div>Vencedor: </div><br />
        <div>Vice-Vencedor: </div>
    </div>)
}