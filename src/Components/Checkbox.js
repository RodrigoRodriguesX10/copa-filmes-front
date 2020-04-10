import React, { Component } from "react";

export default class Checkbox extends Component {
    constructor() {
        super();
        this.onChange = ({ target }) => {
            target.checked ?
                this.props.options.add(this.props.id) :
                this.props.options.delete(this.props.id);
            this.props.onSelect(this.props.options);
        }
    }
    render = () => <div className="checkbox">
        <input id={"checkbox" + this.props.id}  type="checkbox" onChange={this.onChange}></input>
        <label title={this.props.label} htmlFor={"checkbox" + this.props.id}>
            <span>{this.props.label}</span></label>
        {this.props.children}
    </div>
}