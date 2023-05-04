/**  참고사이트1: https://developer.mozilla.org/ko/docs/Web/API/GeolocationPosition
 * 참고사이트2: https://openweathermap.org/current
 * latitude: 위도
 * longitude: 경도
 * */

const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY = '129b40a06bd025dc08c17c3d0453bee7';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //&
  
  //fetch를 통한 url 불러오기 

  fetch(url)

  //반환된 정보 추출하기
    .then((response) => response.json()) 

    // 도시 이름 , 날씨 정보, 온도 가져오기 
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. :( ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);