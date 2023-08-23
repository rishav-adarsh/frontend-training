function searchCity() {
    var cityHtml = document.getElementById("city");
    var cityName = cityHtml.value;
    console.log(cityName);
    var apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=4bb42da4a7bf4be19dd103831232208&q=".concat(cityName, "&days=5&aqi=no&alerts=no");
    var data = fetch(apiUrl)
        .then(function (resp) {
        console.log(resp);
        var res = resp.json();
        console.log(res);
        return res;
    })
        .then(function (resp) {
        console.log("here: ", resp);
        var forecastTable = document.getElementById("forecast");
        // let curDay = resp.forecast.forecastday[0]
        for (var _i = 0, _a = resp.forecast.forecastday; _i < _a.length; _i++) {
            var curDay = _a[_i];
            console.log(curDay);
            // forecastDiv.innerHTML += curDay.date+" &emsp;&emsp;&emsp; "+curDay.day.maxtemp_c+" &emsp;&emsp;&emsp; "+curDay.day.mintemp_c+" &emsp;&emsp;&emsp; "+curDay.day.mintemp_c+" &emsp;&emsp;&emsp; "+curDay.day.avghumidity+"<br>";
            // forecastDiv.innerHTML += `<td>${curDay.date}</td> <td>${curDay.day.maxtemp_c}</td> <td>${curDay.day.mintemp_c}</td> <td>${curDay.day.maxtemp_c}</td> curDay.day.avghumidity` 
            forecastTable.innerHTML += "<td>".concat(curDay.date, "</td> <td>").concat(curDay.day.avgtemp_c, "</td> <td>").concat(curDay.day.maxtemp_c, "</td> <td>").concat(curDay.day.mintemp_c, "</td> <td>").concat(curDay.day.avghumidity, "</td>");
        }
    })
        .catch(function (err) {
        console.log(err);
    });
}
