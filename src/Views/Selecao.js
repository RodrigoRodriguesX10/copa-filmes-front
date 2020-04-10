import React, { Component } from "react";
import Header from "../Components/Header";
import FilmesAPI from "../Util/FilmeApi";
import Checkbox from "../Components/Checkbox";

export default class Selecao extends Component {
    constructor() {
        super();
        this.state = { filmes: [], count: 0, selecionados: new Set() };
        this.onFilmesSelected = () => this.props.onFilmesSelected(this.state.selecionados);
    }

    componentDidMount = async () => {
        try {
            var data = await FilmesAPI.getAll();
            if (data.status === 200)
                this.setState({ filmes: data.data || [] });
        } catch (e) {
            alert("Não foi possível acessar o servidor para listar os filmes")
        }
    }

    updateSelector = (selected) => {
        this.setState({ count: selected.size, selecionados: selected })
    }

    render() {
        return (<div className="content">
            <Header title="Fase de Seleção"
                subtitle="Selecione 8 filmes que deseja que entrem na competição e depois clique no botão Gerar Resultado"></Header>
            <div>
                <div className="form-header">
                    <h2>Selecionados <br /> {this.state.count} de 8</h2>
                    <button className="botao-resultado" disabled={this.state.count !== 8} onClick={this.onFilmesSelected}>Gerar resultado</button>
                </div>
                <div className="board-selector">
                    <div className="checkbox-group">
                        {this.state.filmes.map(f =>
                            <Checkbox
                                options={this.state.selecionados}
                                label={f.titulo}
                                id={f.id}
                                key={f.id}
                                onSelect={this.updateSelector} >
                                <span className="ano-filme">{f.ano}</span>
                            </Checkbox>)}
                    </div>
                </div>

            </div>
        </div>);
    }
}