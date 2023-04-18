/*
 *  함수(functions)
 *  - 작업의 묶음
 * - 코드를 반복하여 작성하는 비효율 줄임
 */


// function multiply(a , b){
//   return a * b;
// } 

// console.log(multiply(10, 5)); 

// var result = multiply(435, 24)

// console.log(result);

// 함수 표현식 
// var multiply = function calc (a, b){
//   return a * b
// }; 
/* 함수의 이름은 변수로 할당, 
함수는 익명함수로 변수에다가 대입하는 방식으로 표현
자바스크립트에서는 함수도 하나의 객체로 속성을 가지는 요소로 취급한다, 값의 성질을 가지므로 배열의 요소로써, 속성의 값으로, 변수에 할당 할 수도 있다. (객체의 성질을 가짐)
 */


// console.log(multiply(10,5));
// console.log(calc(10,5)); 
/* 이름을 정의했지만 변수로써
 불러왔으므로 레퍼런스 오류가 난다. 변수로 함수를 표현하는 식 연습할 것.*/ 


 /* 13-17 함수(2)
  
  * 변수 키워드 - var, let, const 

  */

//  var a =10;

//  while(true){
//   var a = 1000;
//   break;
//  }

//  console.log(a);

 // a의 값이 구분되는 것이 아닌 전역적으로 적용되므로 주의해야한다. 

 // 호이스팅 , 함수 선언이 나중에 되어도 알아서 먼저 끌어올려서 쓴다.

  // console.log(word); //undefined

  // word= "happy"; 

  // console.log(word); // happy

  // var word; 

  //따라서 var로 선언할때 호이스팅을 조심해야한다. 

  // let , 호이스팅이 일어나지 않음.. 따라서 순서에 맞추어 써야한다.  
  
  // let word;

  //   console.log(word);//undefined

  //   word = 'happy'; 

  //   console.log(word); // happy

//     let a =10;

//  while(true){
//   let a = 1000;
//   break;
//  } 
 
//  console.log(a); // 10으로 출력된다(전역적 작용 x)

 // const, 값설정(초기화)가 필요함, 재할당 불가능

//  const b = 2;

//  console.log(b);

// b = 3; // Error: 변수값 재할당 불가능(상수처럼 작용)

// // const로 선언된 변수에 할당된 객체
// const student = {
//   grade: 1,
//   class: 3

// };

// student.grade = 3; // 객체의 값은 변경가능 1- => 3

// student={
//   num: 20123,
//   grade: 2
// }// const로 선언된 변수에 새로운 객체를 추가하는 것은 불가능


// console.log(student);


// //각각의 변수가 동작하는 요소들 잘 파악하기 




// 13-18 함수 (3)

// 화살표 함수

// let plus =(a, b) => {
//   return a+b;

// };

// let plus = (a,b) => a + b; // 위쪽 화살표 함수와 같음

// console.log(plus(2, 3));


// let print = word => {
//   console.log(word);
// };

// print("Hello!");

let myfunc = () => {
  return 1;

} 
console.log(myfunc()); 
// 파라미터가 없는 함수를 표현할 수 있다. 