import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ExpenceItem extends Component {

    constructor() {
        super();
        console.log("[ExpenceItem] constructor");

        this.onRemove = this.onRemove.bind(this);
    }

    componentDidMount() {
        console.log("[ExpenceItem] componentDidMount");
    }
    
    componentWillUnmount() {
        console.log("[ExpenceItem] componentWillUnmount");
    }

    onRemove(id, e) {
        e.preventDefault();
    
        console.log(`[ExpenceItem] onRemove - ${id}`);
        // const request = {
        //     expenceItemId : id
        // };

        fetch(`http://localhost:8080/api/expense/${id}/remove`, {
          method: "PUT",
          headers: {
            "content-type" : "application/json"
          }
          //body: JSON.stringify(request)
        }).then(function(response) {
            console.log(`[ExpenceItem] onRemove - fetch.then(${response})`);
            
        }).catch(function(error) {
            console.log(`[ExpenceItem] onRemove - fetch.catch(${error})`);
        });
      } 

    render() {
        console.log("[ExpenceItem] render");        

        const item = this.props.item;
        return (
            <tr key={ item.id }>
                <td>{ item.id }</td>
                <td>{ item.description }</td>
                <td>{ item.amount }</td>
                <td>{ item.currency }</td>
                <td><button onClick={(e) => this.onRemove(item.id, e)}>Remove</button></td>
                <td><Link to={"/expense/" + item.id}>Details</Link></td>
            </tr>
        );
    }
}

export default ExpenceItem;