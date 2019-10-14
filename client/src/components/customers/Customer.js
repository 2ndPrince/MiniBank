import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

export default class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.customerId}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.ssn}</TableCell>
                <TableCell>{this.props.yymmdd}</TableCell>
                <TableCell>{this.props.address1}</TableCell>
                <TableCell>{this.props.address2}</TableCell>
                <TableCell>{this.props.city}</TableCell>
                <TableCell>{this.props.myState}</TableCell>
                <TableCell>{this.props.zipCode}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} customerId={this.props.customerId} /></TableCell>
            </TableRow>
        )
    }
}