var http = require("http");
var url = require('url');
var fs = require("fs");


var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    // password: "LM21pz0@",
    database: "vacay",
});

con.connect(function(err) {
  if (err) throw err;
      con.query("SELECT * FROM city", function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
  console.log("Connected!");
});

// con.connect(function(err) {
//   if (err) throw err;
//       con.query("SELECT * FROM poi", function (err, result, fields) {
//       if (err) throw err;
//       // console.log(result);
//   console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM inventory", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });