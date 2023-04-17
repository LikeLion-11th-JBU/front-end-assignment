// 문자열 선언
var greeting = "Hello!";
var farewell = 'Bye!';
var myname = '김테킷';

var sentence = greeting + '\n' + myname;
console.log(sentence);

// console.log(farewell +2); 
// => 숫자같은 경우 문자로 전환되어 뒤에 붙여짐

//이스케이프 시퀀스
var sentence = greeting + '\n' + myname; // 줄바꿈
var sentence = greeting + '\t' + myname; // TAB
var sentence = greeting + '\'' + myname; // ' 표현하기
var sentence = greeting + "\"" + myname; // T"표현하기
var sentence = greeting + "\\" + myname; // \ 표현하기

  console.log(sentence);
  
  

//템플릿 리터럴(ES6)
//멀티라인 텍스트 작업가능
//이스케이프 시퀀스 필요 x


var a = `안녕하세요!
여러분 :)`;
console.log(a);

var price = 1000;
/*
일반적인 텍스트 표현식 
var b = '이 물건은 ' + price + '원 입니다.'; 
*/

//템플릿 리터럴 활용시
var c = `이 물건은 ${price}원 입니다 `
console.log(c)

var d = `이 물건은 ${200 + 500}원 입니다 `;
console.log(d);




//문자열 함수

var abc = "I am Iron man";

//indexOf
//문자열의 특정 값이 시작되는 위치
console.log(abc.indexOf("man"));
console.log(abc.indexOf("I"));

//slice
//문자열의 일부를 잘라낼 때 사용
console.log(abc.slice(0,3));
console.log(abc.slice(0,4));

//toUppperCase() , toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startsWith(), endWith()
//특정 문자열로 반환하는지를 T / F 반환
var efg = 'This is my car.' ;
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('th'));

console.log(efg.endsWith('car.'));

//includes()
//문자열 안에 특정 요소가 포함되어 있는지 T / F로 나타냄
console.log(efg.includes('is'));









