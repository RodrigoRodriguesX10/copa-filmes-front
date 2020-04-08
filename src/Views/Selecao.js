import React, { Component } from "react";
import Header from "../Components/Header";
import FilmesAPI from "../Util/FilmeApi"
import Resultado from "./Resultado";

export default class Selecao extends Component {
    constructor() {
        super();
        this.state = { filmes: [], count: 0, resultado: false };
    }

    componentDidMount = async () => {
        var data = await FilmesAPI.getAll().catch(e =>
            alert("Não foi possível acessar o servidor para listar os filmes")
        );
        console.log(data);
        this.setState({ filmes: data || [] });
    }

    render() {
        if (this.state.resultado) return <Resultado></Resultado>
        return (<div>
            <Header>Seleção {this.state.count}/8</Header>
            <form>
                {this.state.filmes.map(f => <div key={f.id}>
                    <input type="checkbox" onChange={({ target }) =>
                        console.log(target) || this.setState({ count: target.checked ? this.state.count + 1 : this.state.count - 1 })} /> <label>{f.titulo}</label>
                </div>)}
                <button disabled={this.state.count != 8} onClick={() => this.setState({ resultado: true })}>Gerar resultado</button>
            </form>
        </div>);
    }
}