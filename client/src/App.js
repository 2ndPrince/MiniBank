import React from 'react';
import './App.css';
import Customer from './components/customers/Customer'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%", 
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    'customerId': 1,
    'image': 'https://placeimg.com/64/64/5',
    'name': 'Youngseok Lee',
    'ssn': '123456789',
    'yymmdd': '880405',
    'address1': '1609 Fairview avenue',
    'address2': '',
    'city': 'Royal oak',
    'state': 'Michigan',
    'zipCode': '48073',
    'isActivated': 1
  },
  {
    'customerId': 2,
    'image': 'https://placeimg.com/64/64/8',
    'name': 'Jonnie Nason',
    'ssn': '578204852',
    'yymmdd': '690530',
    'address1': '153 Main street',
    'address2': '',
    'city': 'Los angeles',
    'state': 'California',
    'zipCode': '90073',
    'isActivated': 1
  },
  {
    'customerId': 3,
    'image': 'https://placeimg.com/64/64/11',
    'name': 'Edward General',
    'ssn': '973659190',
    'yymmdd': '941102',
    'address1': '1105 island park blvd',
    'address2': 'apt 312',
    'city': 'Shreveport',
    'state': 'Louisiana',
    'zipCode': '71105',
    'isActivated': 1
  }
]
function App() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>CUSTOMER ID</TableCell>
            <TableCell>IMAGE</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>SSN</TableCell>
            <TableCell>YYMMDD</TableCell>
            <TableCell>ADDRESS1</TableCell>
            <TableCell>ADDRESS2</TableCell>
            <TableCell>CITY</TableCell>
            <TableCell>STATE</TableCell>
            <TableCell>ZIPCODE</TableCell>
            <TableCell>ISACTIVATED</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      {customers.map(c => {
        return <Customer key={c.customerId} customerId={c.customerId} image={c.image} name={c.name} ssn={c.ssn} yymmdd={c.yymmdd} address1={c.address1} address2={c.address2} city={c.city} state={c.state} zipCode={c.zipCode} isActivated={c.isActivated} />
      })}
      </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(styles)(App);
