/* 2.0 Your First JS Project

alert("hi");  

*/

/* 2.1 Basic Data Types
자바스크립트는 여러가지 데이터 타입을 받아들일 수 있다. 

2 + 2 (integer - 정수형)
1.5 + 3.2(float - 실수형)
20 + 1.5 (integer + float - 정수 + 실수)
" Hello " / "Hello " + " my name is " 
( string - 문자열, 문자열+ 문자열) 

*/


/*  2.2 variables (변수)
* 변수의 이름은 띄어쓰기를 할수없으므로 camelCase를 이용한다. 
-> myName = camelCase / my_name(sneak_case: python에서 주로 사용)
return 56565656); -> 콘솔에 로그라거나 프린트하는 역할 (integer)return "lalalalalal")); -> 콘솔에 로그라거나 프린트하는 역할 (string)


1. const : constant(상수), 변하지 않는 값을 의미 
Ex) const a = 5; const b = 2;
return a + b)return a + b)

*/


/* 2.3  const and let

javascript에서 변수를 선언하는 방법은 두가지가 있다. 

1. const
: 초기 설정한 변수의 값을 변경할 수 없다. 

(위쪽 설명 참조)

2. let 
: 이후에 변수의 값을 변경할 수 있다. 

Ex) let myName  = "Doori"
  return.log = ("hello " + myName);


    myName =" Doori Lee"

  return.log = ("hello my name is " + myName);




  (출력시) =>  hello Doori 
  hello my name is Doori Lee 

  const 의 경우 값을 절대 바꿀 수 없다 (초기 선언값을 바꾸지 않는 이상은..)

  대부분의 defalut 값은 const 이고 이를 변경할 필요가 있을 때 let 으로 변경한다.

  var는 사용되지 않는다.( 명확하지 않기 떄문에)
  */



  /* 2.4 Boolean
 의미: 참인지 거짓인지 판단 
 true, false ("true", "false" 와 다름) -> Python 에서 True, False 와 같음
 null(비어있는, 값이 없다) -> Python에서 None 과 같음

 let something; ==> undefined (메모리를 차지하고있지만 값은 없는)
  */



/* 2.5 Array

const mon = "mon";
const tue = "tue";
const wed = "wed";

const daysOfWeek = [mon + tue + wed + thu + fri]; 
// => variable을 "[]"로 감싸면 배열로 인식하여 정리해준다. 


//Get Item from Array return daysOfWeek[4]); //=> fri 출력됨

// Add one more day to the array 
daysOfWeek.push("sun")
return daysOfWeek);



*/

/* 2.6 Object
: 설명이 필요하지 않은 데이터리스트는 Array로
설명이 필요한 정보가 담긴 데이터 리스트들은 Object로 만들기

// Ex)
const player = {
  name: "Doori",
  points: 10,
  fat: true,

};return player);return player.name); // ==return player["name"])
player.fat = false; // ->  Object 안의 값을 업데이트 할 수 있다.
player.points = player.points + 15 // ==> 10 +15인 25가 player.points 값이 된다. 
player.familyName = "Lee" // -> 객체 안에 새로운 값을 추가 할 수 있다.  

 */

/* 2.7~ 2.8 Function Pt.1, Pt.2

function sayHello(nameOfPerson, age){
return "Hello! my name is "+ nameOfPerson + " and I'm " + age);

}return ); // => 아무것도 출력하지 않음
sayHello(); // () = 실행을 의미 
// Argument = function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다.(nameOfPerson, age)

sayHello("nico", 10);
sayHello("dan", 22);
sayHello("Anthony", 25);


function plus(a, b){
return a + b);
}

function divide(a, b){
return a / b);
}

plus(8, 60);
divide(8, 50);

const player = {
  name: "Doori",
  sayHello: function(otherPersonsName) {
  return "hello! +" + otherPersonsName + "nice to meet you :)" );
  },
};

// Object 안에 있는 function 불러오기
player.sayHello("Doori");
player.sayHello("Nico");

// 이것은return ), Array.push() 와 같은하나의 객체 함수이다. 

*/


/** 2.9 Recap 
 * Data types
 
  const a = 5;
  const b  =  null; (means Empty)
  let isNicoFat = true;(Boolean)

undefined != null

* Arrays

const days =[mon, tue, wed, thu, fri];
return days)
Array는 1이 아닌 0 부터 시작한다.

// Array 요소 바꾸기 , 추가하기 
days[4] = "Friday";
days.push = ("sat");return days);
 */

/* 2.10 Recap II

* Object 

const player ={
  name: "Doori",
  age: 25,
}; // 객체 끝에 semicolon 잊지 말기 
return player,return); // player에 대한 객체와return에 대한 객체를 터미널에 출력한다. 

player.name = "Doori Lee"; // 객체 요소 바꾸기 
player.sexy = "soon"; // 객체 요소 추가하기return.log (player,return);

* Funtion

function plus(a, b) {  // a, b  == placeholder(자리표시자)
return.log (a + b);
} // function 의 중괄호 마지막에는 생략한다. 

plus(4, 7);
plus(100, 13456);
plus(675,765);

// Recap 과제 - 계산기 객체 만들기
const calculator = {
  
  add: function(a, b){
  console.log(a + b);
  },

  minus: function(a, b){
  console.log(a - b);
  },

  div: function(a, b){
  console.log(a / b);
  },
  multi: function(a, b){
  console.log(a * b);
  },
  powerOf: function(a, b){
  console.log(a ** b);
  },

};

calculator.add(10, 2)
calculator.minus(10, 2)
calculator.div(10, 2)
calculator.multi(10, 2)
calculator.powerOf(10, 2)

 */

/* 2.11 Returns , 2.12 Recap II

const calculator = {
  add: function (a, b) {
  return a + b;
  },

  minus: function (a, b) {
  return a - b;
  },

  div: function (a, b) {
  return a / b;
  },
  multi: function (a, b) {
  return a * b;
  },
  powerOf: function (a, b) {
  return a ** b;
  },
};

console.log(console.log(a + b));
// => undefined , 함수의 return 값이 아닌 하나의 타입이기 때문에 출력할 수 없다. 

// plus 의 return 값을 plusResult에 저장, 입력받은 값을 넣어 출력한다.
// const plusResult = calculator.plus(2,3);
// console.log(plusResult);

// 함수의 반환값을 가지고 상호 의존적으로 만들 수 있다. 

const plusResult = calculator.plus(100,1000);
const minusResult = calculator.minus(plusResult, 300);
const multiResult = calculator.multi(minusResult, 3);
const divResult = calculator.div(multiResult, 6);
const PowerOfResult = calculator.powerOf(divResult, 4);

// 이와 같이 return 값을 가지고 함수 밖에서도 활용할 수 있게 된다.

// return은 함수를 종료시킨다. 따라서 return을 만족했을 때 그 이후의 작업들은 실행되지 않는다. 

*/


/* 2.13 Conditonals (조건문), 2.14 Conditonals II, 2.15 Conditonals III
* if, else 
* 

*/

const age = prompt("How old are you? ") 
// prompt() 는 사용자에게 창을 띄울 수 있게 해준다.( 창을 띄워 메시지를 출력하고 값을 입력 할 수 있게 함) 하지만 지금은 사용하지 않는다.

console.log(age);
console.log(typeof age); // typeof: 해당변수의 타입을 알려준다
console.log(typeof '15', typeof parseInt('15')); 
// typeof: 해당변수의 타입을 알려준다 |  parseInt: String 형식을 int형식으로 바꿔준다. 하지만 숫자가 아니면 NaN (Not a Number)를 출력

const age1 = parseInt (prompt("How old are you? ") );

if (isNaN(age) || age < 0 ){ // isNaN : variable 의 값이 숫자이면 False 아니면 true 반환(NaN인지 아닌지 판단)
  console.log("Please write a number OR real positive number :( ");
// } else {
//   console.log("Thank you for writing your age :) ");
} else if (age < 18 ) {
console.log("You are too young :( ");

} else if (18 >= age && age <= 50 ) { 
console.log("You are too young :( ");

} else if (50 > age && age <= 80 ) { 
console.log("You should exercise :( ");

} else if (100 === age) { 
console.log("Wow you are wise :) ");

} else if (80 > age) { 
console.log("You can do whatever you want :) ");
}


/* <비교 연산자> 

&&: AND, (둘 다 참이여야 참) 
||: OR ,(둘 중에 하나만 참이여도 참)
=== : 해당값과 일치하는지 확인 
!== : 해당 값과 일치하지 않은지 확인  (<-> "==")

Ex) " ||"
true || true == true
true || false  == true
false || true  == true
false || false  == false

Ex2) " && "
true && true == true
true && false == false
false && true == false
false && false == false

Form) 아래 같은 형식도 가능 
if (a && b) || (c && d) || (e && f) {

} -> 셋중 하나라도 참이면 전체가 참이다. 

*/
