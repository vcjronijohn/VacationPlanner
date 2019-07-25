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



exports.server = function () {
	http.createServer(function (request, response) {

		var parUrl = url.parse(request.url, true);
		var filePath = '.' + parUrl.pathname;
		
		if (parUrl.pathname === "/") {
			var vclength = parUrl.query.vclength;
			var poi_day = parUrl.query.poi_day;
			var city = parUrl.query.city;
			var poi = parUrl.query.poi;
			var res = "";
			
			var db = fs.readFileSync("./db.txt").toString();
			var users = db.split("\n");
			mysql = "INSERT INTO poi (name, citiname, ) VALUES ('"poi +"', '" + city"')";
			mysql = "INSERT INTO city (citiname) VALUES ('"city"')";
			// var authenticated = 0;

			// users.forEach(function(user) {
			// 	var dbusername = user.split(",")[0];
			// 	var dbpassword = user.split(",")[1];

			// 	if(username === dbusername) {
			// 		if(password === dbpassword) {
			// 			authenticated = 1;
			// 		}
			// 	}
			// });

			// if(authenticated) res = "Authenticated";
			// console.log(db);
			// response.writeHead(200, { 'Content-Type': "text/plain" });
			// response.end(res);
			// return;
		}
	
    if (filePath == './') {
        filePath = './index.html';
		} else {
			filePath += ".html";
		}

		console.log('request ', request.url);

		fs.readFile(filePath, function (err, content) {
		
			if(request.url === "/" || request.url === "/login") {
				response.writeHead(200, { 'Content-Type': "text/html" });
				response.end(content, 'utf-8');

			} else {
				fs.readFile('./404.html', function(error, content) {
					response.writeHead(404, { 'Content-Type': "text/html" });
					response.end(content, 'utf-8');
				});
			}
		})
	})
		.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});
}

