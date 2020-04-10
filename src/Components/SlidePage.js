import React, { Component } from "react";

const SlidePosition = Object.freeze({
    IN: "IN",
    OUT: "OUT",
    INITIAL: "INITIAL"
});

export default class SlidePage extends Component {
    constructor({ position }) {
        super();
        this.state = { className: "" };
        switch (position) {
            case SlidePosition.IN:
                this.state.className = "slide-box-in";
                break;
            case SlidePosition.OUT:
                this.state.className = "slide-box-out";
                break;
            default:
                break;
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.position !== this.props.position) {
            switch (this.props.position) {
                case SlidePosition.IN:
                    return this.setState({ className: "slide-box-in" });
                case SlidePosition.OUT:
                    return this.setState({ className: "slide-box-out" });
                case SlidePosition.INITIAL:
                    return this.setState({ className: "" });
                default: break;
            }
        }
    }
    /* defer content until position get IN */
    render = () => <div className={"slide-box " + this.state.className}>
        {SlidePosition.INITIAL === this.props.position ? "" : this.props.children}
    </div>
}

export { SlidePosition };