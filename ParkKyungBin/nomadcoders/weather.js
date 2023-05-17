const API_KEY = "af13632367d07bb8704339bd8f072441";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector("#weather span:last-child");
        const cityContainer = document.querySelector("#weather div:first-child");
        cityContainer.innerText = `현재 위치: ${data.name}`;
        weatherContainer.innerText = `오늘의 날씨: ${data.weather[0].main}
        현재 온도: ${data.main.temp}도`;
    });
}
function onGeoError() {
    alert("Cant't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);