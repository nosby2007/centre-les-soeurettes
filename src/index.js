const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const newProduct = require('./events');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'store',
    password: 'Yolande2017.@',
    database: 'store'
});
connection.connect();
const port = express.env.PORT || 8080;
const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(newProduct(connection));
app.listen(port, () => {
    console.log(`Express server listening ${port}`);
});