import React from "react";

export default function OrderList(props) {
    if (Array.isArray(props.children)) {
        console.log(props.children.map(t => t.type));
        if (!props.children.every(p => p.type === Item)) {
            throw new Error("The list must contain an array of Item");
        }
    } else {
        throw new Error("The list must contain an array of Item");
    }

    return (<div className="order-list">
        {props.children}
    </div>);
}

export function Item(props) {
    return (
        <div className="order-list-item">
            <div className="item-number"> {props.order}</div>
            <div className="item-content">
                <span>
                    {props.children}
                </span>
            </div>
        </div>
    )
}

Item.prototype.setOrder = function (o) { this.order = o; }