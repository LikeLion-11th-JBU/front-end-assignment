/* 3.0 The Document Object 

* HTML 에서 document 콘솔 명령어를 통해 HTML의 항목을 변경할 수 있다. 

document == HTML 의 정보를 볼러옴
document.title == HTML 문서의 탭 제목을 불러옴
-> JS에서 document.title = "hihihihi" 같이 타이틀 변경 가능

document.body : HTML의 body 요소를 반환한다.

 */ 

/* 3.1 HTML in JS

 * documemt.getElementById("")
-> 해당하는 id의 string을 전달받는 함수이다.

document.title = "Hello I'm Javascript"

document.getElementById("title")

title.innerText = "Got You!" //  => title 요소에 있는 string 바꾸기

console.log(title.className) // title의 클래스 이름 가져오기

// 따라서 JS로 HTML과 HTML의 요소에 접근하고 변경가능하다.

// h1, h2, div, section, button 등 해당하는 태그에 대한 요소를 가져온다. (Array 형식)
 const title = document.getElementsByTagName("h1")

// 해당하는 class의 요소를 가져온다. (Array 형식으로)
const title1 = document.getElementsByClassName("Hello")


** document.querySelector(".hello h1") **

*  element 를 CSS 방식으로 검색할 수 있게 해줌, 
* 위 같은 경우 "hello" div에 있는 "h1"태그 요소에 대해 가져오는 것.
* 클래스의 이름과 그 태그를 입력 해주어야한다.
* ***querySelector는 하나의 element만 반환한다. ***
* querySelectorAll은 해당하는 모든 요소를 Array 형식으로 가져온다.
* " . " : class / " # " : id 
document.getElementById("hello") === document.querySelector("#hello")

*/



/** 3.3 Event 
 * 참고링크:https://developer.mozilla.org/ko/docs/Web/API/Window 
 -> DOM의 Window Event 확인
 
 * HTMl안에 JS파일을 불러왔기 때문에 자바스크립트로 HTML요소를 불러올 수 있는 것이다.

 * 마우스 포인터를 올리는것, 키를 입력하는것 , 클릭하는걸 등등 모든 동작이 모두 Event에 해당한다.

  * console.dir() : 해당요소의 내부를 보여준다. 
여기서 보여지는  object들은 모두 JS의 object이다 

 *  addEventListener("[Event], function / string ...")
: 해당되는 이벤트가 발생했을 때 뒤쪽 요소들을 실행한다. 
<실습>
const title = document.querySelector("div.hello:first-child h1")


function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
  
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("Copier!");
}
function handleWindowOffline() {
  alert("SOS There is no INTERNET :(");
}
function handleWindowOnline() {
  alert("ALL Goood :)");
}




title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick; 과 같음, 하지만 

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

*/

/* 3.6  CSS in JS Pt.1
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitileClick() {
  const currentColor = h1.style.color;
  let newcolor;
  
  if (currentColor === "blue"){
    newColor= "tomato";
  } else {
    newColor = "blue";
  } 
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitileClick);

*/

// CSS를 이용하여 JS 간단하게 표현
// Dom tokenList 명령어를 통한 클래스 추가와 지우기 
//참고링크: https://developer.mozilla.org/ko/docs/Web/API/DOMTokenList

// //아래 코드는  .sexy-font는 유지하면서 clicked 클래스를 제거한다.

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
// h1.addEventListener("click", handleTitleClick);


// .toggle로 위에 있는 코드를 더 간편하게 표현 할 수 있다.  

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
h1.classList.toggle("clicked"); // 해당요소를 추가하거나 제거 할 수 있게 해준다.
}

h1.addEventListener("click", handleTitleClick); // 클릭 시 handleTitleClick 함수를 실행한다.