const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const multer = require('multer');
const upload = multer({dest: './upload'})

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

app.get('/api/customers', (req, res) => {
  connection.query(
    'SELECT * FROM CUSTOMER',
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let ssn = req.body.ssn;
  let yymmdd = req.body.yymmdd;
  let address1 = req.body.address1;
  let address2 = req.body.address2;
  let city = req.body.city;
  let zipcode = req.body.zipCode;
  let state = req.body.state;
  let isactivated = req.body.isActivated;
  let params = [image, name, ssn, yymmdd, address1, address2, city, zipcode, state, isactivated];

  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.get('/api/accounts', (req, res) => {
  connection.query(
    'SELECT * FROM ACCOUNT',
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.listen(port, () => console.log(`Listening on port ${port}`));