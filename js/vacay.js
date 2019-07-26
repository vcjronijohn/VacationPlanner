var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LM21pz0@",
    database: "vacay",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql;
    sql = "INSERT INTO POI (City, Poi) VALUES ('" + City +"', '" + Poi + "')";
		con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("1 record inserted");
    });
      console.log(result);
    });
  ;
  


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 

// var firstName = "Jabez";
// var lastName = "Dailey";
// var sql;
// sql = "INSERT INTO people (firstName, lastName) VALUES ('" + firstName +"', '" + lastName + "')";

// var http = require("http");
// var url = require('url');
// var fs = require("fs");


// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "LM21pz0@",
//     database: "vacay",
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
