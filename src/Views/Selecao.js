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
                    <input name="filme" id={"i" + f.id} type="checkbox" onChange={({ target }) =>
                        this.setState({ count: target.checked ? this.state.count + 1 : this.state.count - 1 })
                        } /> 
                        <label for={"i" + f.id}>{f.titulo}</label>
                </div>)}
                <button disabled={this.state.count != 8} onClick={this.props.onFilmesSelected(this.state.filmes)}>Gerar resultado</button>
            </form>
        </div>);
    }
}