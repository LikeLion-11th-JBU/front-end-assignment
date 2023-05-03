// localStorage: https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage

// const loginForm = document.querySelector("#login-form ");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// login-form ( 위쪽 코드와 같다.)
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

//반복되는 변수나 요소 정리하기 
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault();
  // preventDefault(); : 브라우저의 기본 동작을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // username 저장하기
  localStorage.setItem(USERNAME_KEY, username); 
  paintGreetings();
  //  HTML input 요소에서 required 와 maxlength로 대체 가능 
  //   if (username === "") {
  //     alert("Please write your name :)");
  //   } else if (userName.length > 15) {
  //     alert("Your name is too long :(")
  //   }
  // //console.log("Hello ", loginInput.value);
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);  
  // argument를 없애고 함수자체에서 localStorage에 있는 값을 불러옴
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 저장된 유저이름이 없으면 #login-form 을 보여줌

if( SavedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
// show the greetings( hello )

paintGreetings();

}




