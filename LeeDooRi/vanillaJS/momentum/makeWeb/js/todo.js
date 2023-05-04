/**
 * JSON.strinify() => 뭐든지 문자열로 변환하여 표현해준다.
 * JSON.parse() => 배열로 변환해준다.
 * .filter : 함수에서 true에 해당하는 값만을 새로운 배열에 반환한다.
    Ex) function sexyFilter() {return true, return false, return item !== 3 등등} 
    [1, 2, 3, 4, 5].filter(sexyfilter) ==> [1, 2, 3, 4, 5]
 * 
 */

const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = []; //항상 빈 배열로 시작한다. , 데이터 베이스에 ToDo 내용을 추가

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} 
// 이전에 가지고있던 모든 배열값을 저장한다.
  

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); 
  // 각 부모 요소를 잡아 지움
  
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  //todo.id는 숫자이고, li.id는 문자열로 받기 때문에 filter가 적용되지 않는다. 따라서 parseInt()를 통해 숫자로 바꾸어준다.
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  // span 텍스트 === newTodo 텍스트
  const button = document.createElement('button');
  button.innerText = '❌';

  // 클릭시 deleteToDo
  button.addEventListener('click', deleteToDo);

  //  span을 li안에 집어넣기
  li.appendChild(span);

  //  button을 li안에 집어넣기
  li.appendChild(button);
  
  //todo list 저장
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';

  // newToDoObj 객체 생성, ToDos에 text가 아닌 object를 저장힘
  // 입력받은 newTodo 값을 저장
  // 무작위값을 대신해 현재시간을 받음
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //사용자가 추가한 todo push(추가)
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

  //saveToDos가 비어있지 않으면 실행
if (savedToDos !== null) {
  // saveToDos를 배열로 paesedToDos에 저장
  // ParsedToDos의 값을 각각 PaintToDo를 실행하여 나타낸다.
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
 
  /**  forEach ->array의 각 item에 대해 function을 실행하게 해준다.
   parsedToDos.forEach((item) => console.log('this is the turn of ', item));
  
   *위 함수는 parsedToDos의 각각의 item 에 관해 console.log를 한다는 의미이다. (화살표 함수)
   * function sayHello(item) {
      console.log("this is the turn of " , item)
  }  과 같다.
*/






