import React, { Component } from "react";

export default class Checkbox extends Component {
    constructor(){
        super();
        this.onChange = ({target}) => {
            this.props.options.add(this.props.key);
            this.props.onSelect(this.props.options);
        }
    }
    render = () => <div className="checkbox-option">
        <input id={"checkbox"+this.props.key} class="checkbox" type="checkbox" onChange={this.onChange}></input>
        <label for={"checkbox"+this.props.key}>{this.props.label}</label>
    </div>
}