//참고링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

// ** setInterval(), SetTimeout() 설명

// function sayHello() {
//   cnosole.log("hello");
// }

// setInterval(sayHello, 5000); // 5초마다 sayHello 실행(반복)
// setTimeout(sayHello, 5000); // 5초 뒤 sayHello 실행(1회) 

const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
/*
padStart는 문자열에서 사용할 수 있기 대문에 string()을 통해 문자열로 출력
padStart((전체 문자열길이),(채울 텍스트)) 를 통해 한 자리수로 표시하지 않게 함 

*/

getClock();
setInterval(getClock, 1000);
