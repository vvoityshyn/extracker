import React, { Component } from 'react';


class ExpenceItem extends Component {

    render() {
        const item = this.props.item;
        return (
            <tr>
                <td>{ item.id }</td>
                <td>{ item.description }</td>
                <td>{ item.amount }</td>
                <td>{ item.currency }</td>
            </tr>
        );
    }
}

export default ExpenceItem;