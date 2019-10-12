const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
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

app.get('/api/customers', (req, res) => {
    res.send(customers
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`));