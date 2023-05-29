
 * <input> 들이 onChange과 각각의 value값(email, password)를 가지므로 그 안에 있는 값을 변경 할 수 있음
 * - Target 에서의  name: input에 부여한 이름 (email, Password)
 *  - Target에서의 value: 키보드를 통해 입력되는 값\
 * 
 *  [자바스크립트 구문에서 한 일]: name과 password가 각각 name 과 같아지면 state인 email과 password를 변경한다.
 * ==> 따라서 input값이 달라지면 onChange 함수를 실행시키고  입력된 input 값을 저장한다. input은 letter로 저장할 수 없다.
 *
 *onSubmit이 없다면(event.preventDefault() 가 없다면)
  -> 입력을 받아서 제출하면 그 값을 저장하지 못하고 새로고침 한다.
  ->preventDefault() : 
 


 * 참조사이트 모음
  * https://github.com/leemj0948/nwitter
  * https://firebase.google.com/docs/reference/js?authuser=0&hl=ko