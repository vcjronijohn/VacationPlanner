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
// show all pois

function get_all_poi () {

return new Promise((resolve, reject) => {
  con.query("SELECT * FROM POI", function (err, result) {
      if (err) reject(err);
      // console.log(result);
      resolve(JSON.stringify(result));
  })

});
}

// test listing pois

get_all_poi().then(result => {console.log(result)});


// add new poi

function add_new_poi(City, Poi) {
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
}
// test adding poi

// add_new_poi();

module.exports.getPoi = get_all_poi;
module.exports.addNew = add_new_poi;
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
