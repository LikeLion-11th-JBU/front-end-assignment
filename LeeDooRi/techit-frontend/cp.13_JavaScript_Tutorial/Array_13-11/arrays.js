/**
 * 배열(Arrays)
 * - 복수의 데이터를 순서대로 담고있는 자료구조
 * - 배열의 순서는 0부터 시작
 * - 배열은 객체!
 * - 키 => 인덱스 , 값 => 요소
 */

// var mbti = ['INFJ','ENFJ','INTP','INFP','ENFP'];
// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = 'ESFP';
// console.log(mbti[3]);
// console.log(mbti.length);

// mbti[2] = 'ISTJ';
// console.log(mbti[2]);
//덮어 쓴 데이터 출력


//push() 
//배열 마지막에 추가할 요소 넣을 때 사용, 배열이 훼손 될 수도 있음

// console.log(mbti.push('ESFP', 'ISTJ')); 

// 스프레드 문법
// var newMbti = [...mbti, 'ESFP', 'ISTJ'];
// console.log(mbti);
// console.log(newMbti);
// 원본요소는 훼손되지 않고 새로운 배열을 구성할 수 있다. 

// var mbti = ['INFJ', 'ENFJ', 'INTP', 'INFP', 'ENFP'];
// pop()
//배열에서 마지막 요소를 뽑아냄, 기존 배열에서도 제거
// console.log(mbti.pop());
// console.log(mbti);


// //unshift() , push()의 반대 , 배열 앞쪽에 요소추가
// console.log(mbti.unshift('ESFP', 'ISTJ'));

// // 스프레드 문법 (unshift()처럼)
//  var newMbti = ['ESFP', 'ISTJ', ...mbti];
// console.log(mbti);
// console.log(newMbti);
// 원본요소는 훼손되지 않고 새로운 배열을 구성할 수 있다. 

//shift() ,배열 앞쪽에 있는 요소를 반환한다(pop()와 의 앞쪽 버전)
// console.log(mbti.shift());

// 13-12 배열 (2)

var mbti = ['INFJ', 'ENFJ', 'INTP', 'INFP', 'ENFP'];g

// silce( <시작위치>, <추출 요소 개수> )
console.log(mbti.slice(0, 2));
// console.log(mbti.slice()); // 전체 요소 추출
// console.log(mbti.slice(-1)); // 음수일땐 마지막부터 추출

// join() => 요소간 구별 텍스트 바꾸기 (기존','에서)
// console.log(mbti.join('-'));// INFJ-ENFJ
// console.log(mbti.join('|'));// INFJ|ENFJ
// console.log(mbti.join('')); 
//빈공간일 경우 붙여서 출력함(INFJENFJ)

// sort() , 오름차순 정렬 
console.log(mbti.sort());


//reverse(), 내림차순 정렬
console.log(mbti.sort().reverse());







