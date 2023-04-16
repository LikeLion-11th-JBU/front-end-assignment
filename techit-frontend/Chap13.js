document.write("<p>JavaScript는 재밌어:)</p>");

/* 
변수: 데이터를 담아 놓기 위해 이름표를 붙여놓은 공간
*/

// 변수 선언
// var num;

// 변수 초기화
// num = 10;

// 변수 선언 + 초기화
var num = 10;
num = 20;

console.log(num);

// 사용할 수 없는 변수명
// var 4you;
// var !important;

// 예약어: 프로그래밍 언어 자체적으로
// 사용할 단어 혹은 키워드 => 변수X

// 변수명(식별자)
// 1. camelCase
// var sendEmailDate
// 2. snake_case
// var send_email_date

// 주석(comments)
// 1. 싱글라인 //
/*
  2. 멀티라인
  2. 멀티라인
  2. 멀티라인
  2. 멀티라인
  2. 멀티라인
*/

/*
자료형

1. 기본형, 단순형, 원시형
- number
- string
- boolean
- undefined
- null
- symbol

2. 참조형, 객체(Object)

*/

// number
// 정수(integer), 실수 구분이 없음
var price = 10000;
console.log(price);

// string
var myname = "테킷";
console.log(myname);
var myname2 = "멋사";
console.log(myname2);
// var myname3 = "멋쟁이";
var myname4 = "'멋쟁이'";
console.log(myname4);
var myname5 = '"사자"';
console.log(myname5);

// boolean
var isTrue = true;
console.log(isTrue);
var isFalse = false;
console.log(isFalse);

// undefined
var a;
console.log(a);

/*
  객체(object)
  - 속성의 모음으로 이루어진 데이터
  - 속서에는 어떤 데이터 타입이라도 할당 가능
  - 속성의 구분 ,
  - 속성의 정의 속성명(키):속성값
*/
var student = {
  grade: 1,
  school: "lion school",
};

// 객체의 값 호출
var gradeInfo = student.grade;
console.log(gradeInfo);

// 객체의 키 호출
var key = Object.keys(student)[0];
console.log(key);

// 객체에 속성 추가
student.class = 3;
console.log(student);

console.log(student["class"]);
console.log(student.class);

// 비어 있는 객체
var teacher = newObject();
var teacher = {};

// 자료형(3)
var name1 = "김멋사";
var name2 = "김멋사";

// console.log(name1 == name2);

var name3 = Symbol("이테킷");
var name3 = Symbol("이테킷");

console.log(name3 == name4);

var myclass = {
  [Symbol("이테킷")]: 1,
  [Symbol("이테킷")]: 2,
};

/*
  연산자
  - 1개의 표현식에 대해 산술, 대입, 논리, 타입 등을
    평가하여 값을 생성하는 작업
*/

// 1. 산술 연산자

var a = 10;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a);
console.log(b);

var c = 7;
// console.log(++c);
// console.log(c++);
// console.log(--c);
// console.log(c--);
// console.log(c);

// 2. 대입 연산자, 할당 연산자

var d = 2;
// d = 10;
// console.log(d);

// console.log(d += 3); // d = d + 3
// console.log(d -= 3); // d = d - 3
// console.log(d *= 3); // d = d * 3
// console.log(d /= 3); // d = d / 3
// console.log(d %= 3); // d = d % 3

// 3. 비교 연산자
// console.log(2 == 2);
// console.log(2 == "2");
// console.log(2 === "2");

// console.log(2 != 2);
// console.log(2 != "2");
// console.log(2 !== "2");

// console.log(4 > 2);
// console.log(4 < 2);
// console.log(4 >= 2);
// console.log(4 <= 2);

// 4. 논리 연산자

// 논리합(or)
// 피연산자 중에 하나라도 참이면 참
// console.log(true || true);
// console.log(true || false || false);
// console.log(false || false);
// console.log(2 > 3 || 5 == 5);

// 논리곱(and)
// 피연산자 모두가 참
// console.log(true && true);
// console.log(true && false && false);
// console.log(false && false);
// console.log(2 > 3 && 5 == 5);
// console.log(2 < 3 && 5 == 5);

// 부정(not)
// 피연산자의 boolean 값을 부정
// console.log(!true);
// console.log(!false);
// console.log(!(5 > 4));

// 5. typeof 연산자
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null);

// 문자열 선언
var greeting = "Hello!";
var farewell = "Bye!";
var myname = "김테킷";

var sentence = greeting + "\n" + myname;
// console.log(sentence);

// console.log(farewell + 2);

// 이스케이프 시퀀스
// var sentence = greeting + "\n" + myname;
// var sentence = greeting + "\t" + myname;
// var sentence = greeting + "\"" + myname;
// var sentence = greeting + "\"" + myname;
var sentence = greeting + "\\" + myname;
// console.log(sentence);

// 템플릿 리터럴(ES6)
// 멀티라인 텍스트 작업 가능
// 이스케이프 시퀸스 필요X

// var a = `안녕하세요!`;
var a = `안녕하세요!
여러분:)`;
console.log(a);

var price = 1000;
var b = "이 물건은 " + price + "원 입니다.";
console.log(b);

var c = `이 물건은 ${price}원 입니다.`;
console.log(c);

var d = `이 물건은 ${200 + 450}원 입니다.`;
console.log(d);

// 문자열 함수
var abc = "I am Iron man";

// indexOf
// 문자열의 특정 값이 시작되는 위치
console.log(abc.indexOf("man"));
console.log(abc.indexOf("I"));

// slice
// 문자열의 일부를 잘라낼 때
console.log(abc.slice(0, 4));

// toUpperCase(), toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startsWith()
var efg = "This is my car.";
console.log(efg.startsWith("Th"));
console.log(efg.startsWith("th"));

console.log(efg.endsWith("car."));

// includes()
console.log(efg.includes("is"));

/*
  배열(Array)
  - 복수의 데이터를 순서대로 담고 있는 자료구조
  - 배열의 순서는 0부터 시작
  - 배열은 객체!
  - 키 => 인덱스, 값 => 요소
*/

// var mbti = ["INFP", "ENFJ", "INTJ"];
// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = "ESFP";
// console.log(mbti[3]);
// console.log(mbti.length);

// mbti[2] = "ISTJ";
// console.log(mbti[2]);

// push()
// console.log(mbti.push("ESFP", "ISTJ"));

// 스프레드 문법
// var newMbti = [...mbti, "ESFP", "ISTJ"];
// console.log(mbti);
// console.log(newMbti);

// var mbti = ["INFP", "ENFJ", "INTJ"];
// pop()
// console.log(mbti.pop());
// console.log(mbti);

// unshift()
// console.log(mbti.unshift("ESFP", "ISTJ"));

// 스프레드 문법
// var newMbti = ["ESFP", "ISTJ", ...mbti];
// console.log(mbti);
// console.log(newMbti);

// shift()
// console.log(mbti.shift());
// console.log(mbti);

var mbti = ["INFP", "ENFJ", "INTJ"];

// slice()
// console.log(mbti.slice(0, 2));
// console.log(mbti.slice());
// console.log(mbti.slice(-1));

// join()
// console.log(mbti.join());
// console.log(mbti.join("-"));
// console.log(mbti.join("|"));
// console.log(mbti.join(""));

// sort()
// console.log(mbti.sort());

// reverse()
console.log(mbti.sort().reverse());

/*
  제어문(control flow)
  1. 조건문
  2. 반복문
*/

var a = 2;

// 1. if...else
if (a > 2) {
  console.log("a > 2");
} else {
  console.log("a <= 2");
}

// 2. if...else if...else
if (a > 2) {
  console.log("a > 2");
} else if (a == 2) {
  console.log("a = 2");
} else if (a == 0) {
  console.log("a = 0");
} else if (a < 2) {
  console.log(" a < 2");
}

// 3. switch

var mbti = "INFP";
var val;

switch (mbti) {
  case "INFP":
    val = "INFP";
    break;
  case "ENFP":
    val = "ENFP";
    break;
  case "ISTJ":
    val = "ISTJ";
    break;
  default:
    val = "유효한 값이 아닙니다";
}

console.log(val);

// 반복문(loop)

// 1. for

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (var i = 10; i--) {
//   console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     console.log(`${i}-${j}`);
//   }
// }

// 2. while

// var flag = 10;

// while (flag > 0) {
//   console.log(flag);
//   flag--;
// }

// 3. do...while

var flag = 10;

do {
  console.log(flag);
  flag--;
} while (flag < 0);

/*
  예외(에러) 처리
*/

try {
  // 에러가 발생할 가능성이 있는 코드
  // myfunc();
  throw new Error("에러");
} catch (error) {
  // 에러가 발생했을 때 실행되는 코드
  console.log("에러발생");
  console.log(error);
} finally {
  // 에러 발생여부와 상관없이 무조건 실행
  console.log("무조건 실행");
}

/*
  함수(functions)
  - 작업의 묶음
  - 코드를 반복해서 작성하는 비효율 줄임
*/

// 함수 선언문
function multiply(a, b) {
  return a * b;
}

console.log(multiply(10, 5));

var result = multiply(435, 24);

console.log(result);

// 함수 표현식
var multiply = function calc(a, b) {
  return a * b;
};

console.log(multiply(10, 5));
console.log(10, 5);

/*
  변수 키워드 - var, let, const
*/

var a = 10;

while (true) {
  var a = 1000;
  break;
}

console.log(a);

// 호이스팅

console.log(word);

word = "happy";

console.log(word);

var word;

// let

let word;

console.log(word);

word = "happy";

console.log(word);

let a = 10;

while (true) {
  var a = 1000;
  break;
}

console.log(a);

// const

const b = 2;

console.log(b);

b = 3;

// const로 선언되 변수에 할당된 객체
const student = {
  grade: 1,
  class: 3,
};

// student.grade = 2;

student = {
  num: 20123,
  grade: 2,
};

console.log(student);

// 화살표 함수
// let plus = (a, b) => {
//   return a + b;
// };

// let plus = (a, b) => a + b;

// console.log(plus(2, 3));

let print = (word) => {
  console.log(word);
};

print("Hello!");

let myfunc = () => {
  return 1;
};

console.log(myfunc());
