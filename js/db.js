var http = require("http");
var url = require('url');
var fs = require("fs");

// show all pois

function get_all_poi () {

  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM POI", function (err, result) {
        if (err) reject(err);
        // console.log(result);
        resolve(JSON.stringify(result))
    }).catch(console.log)
  
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