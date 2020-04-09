import React, { Component } from "react";

export default class Header extends Component {
    render = () => <div className="box box-header">
        <div className="header-app-title">
            <span>Copa de Filmes</span>
        </div>
        <div className="header-title">
            <h1>{this.props.title}</h1>
        </div>
        <div className="header-subtitle">
            <span>{this.props.subtitle}</span>
        </div>
    </div>
}