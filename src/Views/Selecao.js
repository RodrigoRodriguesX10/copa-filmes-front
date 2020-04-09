import React, { Component } from "react";
import Header from "../Components/Header";
import FilmesAPI from "../Util/FilmeApi";

export default class Selecao extends Component {
    constructor() {
        super();
        this.state = { filmes: [], count: 0, selecionados: new Set() };
        this.onFilmesSelected = () => this.props.onFilmesSelected(this.state.selecionados);
    }

    componentDidMount = async () => {
        var data = await FilmesAPI.getAll().catch(e =>
            alert("Não foi possível acessar o servidor para listar os filmes")
        );
        if (data.status == 200)
            this.setState({ filmes: data.data || [] });
    }

    render() {
        return (<div>
            <Header title="Fase de Seleção"
                subtitle="Selecione 8 filmes que deseja que entrem na competição e depois clique no botão Gerar Resultado"></Header>
            <div className="form">
                <h2>Seleção {this.state.count}/8</h2>
                <button disabled={this.state.count != 8} onClick={this.onFilmesSelected}>Gerar resultado</button>
                <div className="board-selector">

                    {this.state.filmes.map(f => <div key={f.id}>
                        <input name="filme" id={"i" + f.id} type="checkbox" onChange={({ target }) => {
                            target.checked ? this.state.selecionados.add(f.id) : this.state.selecionados.delete(f.id);
                            this.setState({
                                count: target.checked ? this.state.count + 1 : this.state.count - 1
                            });
                        }
                        } />
                        <label htmlFor={"i" + f.id}>{f.titulo}</label>
                    </div>)}
                </div>

            </div>
        </div>);
    }
}