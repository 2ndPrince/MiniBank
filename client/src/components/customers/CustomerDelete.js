import React from 'react';

export default class CustomerDelete extends React.Component {

    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.customerId)}}>DELETE</button>
        )
    }
}