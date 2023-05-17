/**
 * 제어문(contro flow)
 * 1. 조건문
 * 2. 반복문
 *
 */

// var a = 5;

// // 1. if... else
// if(a > 2) {
//   console.log('a > 2');
// } else{
//   console.log('a <= 2');
// }

// // 2.if...else if ...else
// if(a > 2) {
//   console.log('a > 2');

// } else if (a == 2){
//   console.log('a = 2');
// } else if (a == 0){
//   console.log('a = 0');
// } else if (a < 2){
//   console.log('a < 2');
// }

// if 문을 사용할때 true 인 분기점이 나오면 다른 분기는 확인하지 않으므로 주의해야한다.

//  else{
//   console.log('a < 2');
// }

// 3. switch
// case를 만족해도 break; 문이 없으면 끝까지 비교한다.(defalut값 출력)

// var mbti = 'INFJ';

// switch (mbti) {
//   case 'INFJ':
//     val = 'INFJ';
//     break;
//   case 'ENFP':
//     val = 'ENFP';
//     break;
//   case 'ISTJ':
//     val = 'ISTJ';
//     break;
//   default:
//     val = '유효한 값이 아닙니다.';
// }

// console.log(val);



// 챕터 13-14 반복문 (loop)


// 1. for

// for (var i =0; i<10; i++){ // i가 10 미만이 될 때까지 반복해라
//   console.log(i);
// } // result: 0~9까지 출력 

// //코드불록 ({}) 끝에는 ; 이 필요없다.

// for (var i = 10; i > 0; i--){
//   console.log(i); //10~1 까지 출력 
// }

// 이중 for문, 겉에 감싼 for 문을 만족하고 속에 있는 for 문을 돌림
for (var i=0; i<10; i++){
  for(var j = 0; j<10; j++){
    console.log(`${i}-${j}`);
  }
}

// 2. while

var flag = 10; 

while (flag > 0){ // while 조건이 true 일때만 실행된다 (flag > 0)
  console.log(flag); // 여기까지만 실행하면 무한루프이다
  flag --; //의도하지 않는 무한루프를 막을 대책이 있어야 한다. 
}

// do ... whlie , 최초 조건과 상관없이 무조건 한번은 실행한다.  

var flag = 10;

do {
  console.log(flag);
  flag --;
}while (flag > 0);
/* while (flag < 0); 의 경우에서 조건이 false 이기 때문에 
  while 에서는 출력되지 않으나 do.. while 에서는 flag의 값인 10을 출력한다.
*/

//조건과 상관없이 로직을 한번 돌린다 -> do...while