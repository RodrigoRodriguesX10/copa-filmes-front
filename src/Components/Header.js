import React, { Component } from "react";

export default class Header extends Component{
    render = () => <h1>{this.props.children}</h1>
}