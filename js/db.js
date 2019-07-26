var http = require("http");
var url = require('url');
var fs = require("fs");


var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LM21pz0@",
    database: "vacay",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
