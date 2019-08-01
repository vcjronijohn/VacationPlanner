var form = document.forms["vplan"];
      var submit = document.querySelector("button");
      var vclength = form["VacaLength"];
      var poi_day = form["POIPerDay"];
      var city = form["City"];
      var poi = form["POI"];
        
      submit.addEventListener("click", function(event) {
        event.preventDefault();
        
        var xhr = new XMLHttpRequest();
  
        xhr.onreadystatechange = function () {
          if(this.readyState == 4 && this.status == 200) {
            console.log('ready');
            // console.log(this.responseText);
          }
        }
        var request = "/?VacaLength=" + form["VacaLength"] + "&PoiPerDay=" + form["POIPerDay"] + "&City=" + form["City"] + "&POI=" + form["POI"];
        // var request = "/?VacaLength=" + vclength.value + "&PoiPerDay=" + poi_day.value + "&City=" + city.value + "&POI=" + poi.value;
        xhr.open("GET", request, true);
        xhr.send();
      });
  