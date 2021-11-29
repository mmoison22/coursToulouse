const API_KEY = "5c7db9448ba3249820e127d284b7004a";
let ville = document.getElementById("inputCity").innerText;
let city_name = "paris";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${API_KEY}`;

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

fetch(API_URL)
.then((resp)=>{
    console.log(resp);
    return resp.json();
})
.then((data)=>{
    console.log(data);
    city.innerText = data.name;
    temp.innerText = data.main.temp;
    humidity.innerText = data.main.humidity;
    wind.innerText = data.wind.speed;
    
})
.catch();