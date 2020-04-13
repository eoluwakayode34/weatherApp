
// // var myOject = JSON.parse(start);
// // console.log(myOject)

// // document.getElementById('message').innerHTML = myOject.first.degree.tertiary;


// // AJAX

// var     xhr = new XMLHttpRequest();

// xhr.open('GET', 'data.json', true);
// xhr.responseText = 'text'



// xhr.onload = function(){

//     if(xhr.status===200)
//    { var myStuff = JSON.parse(xhr.responseText);
//     console.log(myStuff)
//     for(i=0; i<myStuff.presidents.length; i++){
//         console.log(myStuff.presidents[i].first);
//         console.log(myStuff.presidents[i].last);
//         console.log(myStuff.presidents[i].served);
//         console.log(myStuff.vicepresidents[i].first);
//         console.log(myStuff.vicepresidents[i].last);
//     }
// }


// }

// xhr.send();



//GET THE CONDTIONS
'use strict'



var weatherConditions =  new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// remove http: so the website work both on secure and non-secure transfer protocol
weatherConditions.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=7eaa63dc2c86b63696d34e966ed2f24f&units=imperial', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload =  () => {
    if(weatherConditions.status === 200){
         cObj = JSON.parse(weatherConditions.responseText);
         //console.log(cObj);
        document.getElementById('weather-city').innerHTML = cObj.name;
        document.getElementById('weather-decription').innerHTML = cObj.weather[0].description;
        document.getElementById('weather-degree').innerHTML = cObj.main.temp ;
        document.getElementById('weather-degree-description').innerHTML = "wind speed: " + cObj.wind.speed ;

    }
}



//GET THE FORECARST
weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=84653,us&appid=7eaa63dc2c86b63696d34e966ed2f24f&units=imperial', true)
weatherForecast.responseType = 'text'
weatherForecast.send();

weatherForecast.onload = function(){
    if(weatherForecast.status === 200){
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);

        var date_raw = fObj.list[0].dt_txt;
        date_raw = date_raw.substring(5,11)
        document.getElementById('r1c1').innerHTML=date_raw;

        var iconcode = fObj.list[0].weather[0].icon;
        var icon_path = "http://openweathermap.org/img/w/" + iconcode + '.png';
        document.getElementById('r1c2').src = icon_path;
        document.getElementById('r1c3').innerHTML= fObj.list[0].main.temp_min + "&deg;";
        document.getElementById('r1c4').innerHTML= fObj.list[0].main.temp_max + "&deg;";

        var date_raw = fObj.list[8].dt_txt;
        date_raw = date_raw.substring(5,11)
        document.getElementById('r2c1').innerHTML=date_raw;

        var iconcode = fObj.list[8].weather[0].icon;
        var icon_path = "http://openweathermap.org/img/w/" + iconcode + '.png';
        document.getElementById('r2c2').src = icon_path;
        document.getElementById('r2c3').innerHTML= fObj.list[8].main.temp_min + "&deg;";
        document.getElementById('r2c4').innerHTML= fObj.list[8].main.temp_max + "&deg;";

        var date_raw = fObj.list[16].dt_txt;
        date_raw = date_raw.substring(5,11)
        document.getElementById('r3c1').innerHTML=date_raw;

        var iconcode = fObj.list[16].weather[0].icon;
        var icon_path = "http://openweathermap.org/img/w/" + iconcode + '.png';
        document.getElementById('r3c2').src = icon_path;
        document.getElementById('r3c3').innerHTML= fObj.list[16].main.temp_min + "&deg;";
        document.getElementById('r3c4').innerHTML= fObj.list[16].main.temp_max + "&deg;";

        
    }
}