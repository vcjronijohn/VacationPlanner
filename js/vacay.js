var server = require()


var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LM21pz0@",
    database: "vacay",
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM vacay", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 

// var firstName = "Jabez";
// var lastName = "Dailey";
// var sql;
// sql = "INSERT INTO people (firstName, lastName) VALUES ('" + firstName +"', '" + lastName + "')";