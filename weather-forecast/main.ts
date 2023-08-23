function searchCity() {
    const cityHtml = document.getElementById("city") as HTMLInputElement;
    const cityName:string = cityHtml.value
    console.log(cityName);
    const apiUrl:string = `http://api.weatherapi.com/v1/forecast.json?key=4bb42da4a7bf4be19dd103831232208&q=${cityName}&days=5&aqi=no&alerts=no`;
    const data = fetch(apiUrl)
                .then((resp) => {
                    console.log(resp);
                    const res = resp.json();
                    console.log(res);
                    return res;
                })
                .then((resp) => {
                    console.log("here: ", resp);
                    const forecastTable = document.getElementById("forecast") as HTMLTableElement;
                    // let curDay = resp.forecast.forecastday[0]
                    for(let curDay of resp.forecast.forecastday) {
                        console.log(curDay);
                        
                        // forecastDiv.innerHTML += curDay.date+" &emsp;&emsp;&emsp; "+curDay.day.maxtemp_c+" &emsp;&emsp;&emsp; "+curDay.day.mintemp_c+" &emsp;&emsp;&emsp; "+curDay.day.mintemp_c+" &emsp;&emsp;&emsp; "+curDay.day.avghumidity+"<br>";
                        // forecastDiv.innerHTML += `<td>${curDay.date}</td> <td>${curDay.day.maxtemp_c}</td> <td>${curDay.day.mintemp_c}</td> <td>${curDay.day.maxtemp_c}</td> curDay.day.avghumidity` 
                        forecastTable.innerHTML += `<td>${curDay.date}</td> <td>${curDay.day.avgtemp_c}</td> <td>${curDay.day.maxtemp_c}</td> <td>${curDay.day.mintemp_c}</td> <td>${curDay.day.avghumidity}</td>` 
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
}