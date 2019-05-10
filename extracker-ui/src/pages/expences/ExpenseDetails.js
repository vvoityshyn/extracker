import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ExpenseDetails extends Component {

    constructor() {
        super();
        console.log("[ExpenseDetails] constructor");

    }

    componentDidMount() {
        console.log("[ExpenseDetails] componentDidMount");
    }
    
    componentWillUnmount() {
        console.log("[ExpenseDetails] componentWillUnmount");
    } 

    render() {
        console.log("[ExpenseDetails] render");        

        const id = this.props.match.params.expenseId;
        return (
            <div>
                <Link to="/">Back Expense List</Link>
                <div>{id}</div>
            </div>
        );
    }
}

export default ExpenseDetails;