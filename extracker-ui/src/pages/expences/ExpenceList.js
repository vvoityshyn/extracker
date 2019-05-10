import React, { Component } from 'react';
import ExpenceItem from './ExpenceItem';

class ExpenceList extends Component {

    constructor() {
        super();
        console.log("[ExpenceList] constructor");
    }

    componentDidMount() {
        console.log("[ExpenceList] componentDidMount");
    }
    
    componentWillUnmount() {
        console.log("[ExpenceList] componentWillUnmount");
    }

    render() {
        console.log("[ExpenceList] render");

        let items = [
            { id : 1, description : "First", amount : 10, currency : "UAH" },
            { id : 2, description : "Second", amount : 20, currency : "UAH" },
            { id : 3, description : "Third", amount : 30, currency : "UAH" },
            { id : 4, description : "Fourth", amount : 40, currency : "UAH" },
            { id : 5, description : "Fifth", amount : 50, currency : "UAH" },
        ];    

        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>currency</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map(item => <ExpenceItem item={ item } />)
                }
                </tbody>
            </table>
        );
    }
}

export default ExpenceList;