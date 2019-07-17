var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LM21pz0@",
    database: "vacay",
});



app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)