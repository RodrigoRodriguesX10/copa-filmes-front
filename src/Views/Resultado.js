import React, { Component } from "react";
import FilmesApi from "../Util/FilmeApi";
import Header from "../Components/Header";

export default class Resultado extends Component {
    constructor({ filmes }) {
        super();
        if (!filmes) throw new Error("O parâmetro filmes é obrigatório");
    }

    componentDidUpdate(prevProps) {
        if (this.props.filmes && this.props.filmes.length && prevProps.filmes != this.props.filmes) {
            FilmesApi.criarCompeticao(this.props.filmes).then(res => {
                if (res.status == 200) {
                    this.setState(res.data);
                } else {
                    this.setState({ error: res.status + ": " + (res.data.error || res.data.message) })
                }
            }).catch(e => {
                alert("Não foi possível receber o resultado");
            });
        }
    }
    state = {}
    render = () => (<div className="content">
        <Header title="Fase de Seleção"
            subtitle="Selecione 8 filmes que deseja que entrem na competição e depois clique no botão Gerar Resultado"></Header>

        <div>Vencedor: {this.state.vencedor && this.state.vencedor.titulo}</div>
        <div>Vice-Vencedor: {this.state.vice && this.state.vice.titulo}</div>

        <div className="message-error">{this.state.error}</div>
    </div>)
}