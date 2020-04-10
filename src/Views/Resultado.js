import React, { Component } from "react";
import FilmesApi from "../Util/FilmeApi";
import Header from "../Components/Header";
import OrderList, { Item } from "../Components/OrderList";

export default class Resultado extends Component {
    constructor({ filmes }) {
        super();
        this.updateResultado = this.updateResultado.bind(this);
        if (!filmes) throw new Error("O parâmetro filmes é obrigatório");
    }

    componentDidMount(){
        if (this.props.filmes.length === 8) this.updateResultado(this.props.filmes);
    }

    updateResultado = (filmes) => {
        FilmesApi.criarCompeticao(filmes).then(res => {
            if (res.status === 200) {
                this.setState(res.data);
            } else {
                this.setState({ error: res.status + ": " + (res.data.error || res.data.message) })
            }
        }).catch(e => {
            alert("Não foi possível receber o resultado");
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.filmes && this.props.filmes.length && prevProps.filmes != this.props.filmes) {
            this.updateResultado(this.props.filmes);
        }
    }
    state = {}
    render = () => (<div className="content">
        <Header title="Resultado Final"
            subtitle="Veja o resultado da Copa de Filmes rapidamente"></Header>
        <OrderList>
            <Item order="1º">
                {this.state.vencedor && this.state.vencedor.titulo}
            </Item>
            <Item order="2º">
                {this.state.vice && this.state.vice.titulo}
            </Item>
        </OrderList>

        <div className="message-error">{this.state.error}</div>
    </div>)
}