import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); //submit 되는것을 막는다.
    if (toDo === '') {
      return; //toDo가 비어있다면 함수를 작동하지 않게한다.
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    //현재 state 불러오기, 새로운 배열에 state 값을 이어서 저장한다.(array.push와 같음 )
    setToDo(''); //setToDo 를 다시불러와 toDo를 비운다.
    //setTodo 는 toDo값을 바꾸고 toDo값은 input value와 연결되어있다.
  };
  return (
    //자바스크립트를 사용할때는 중괄호가 필수이다.(아래 toDos.length)
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
    /* map은 배열에 있는 아이템을 내가 원하는 무엇이든지로 바꿔준다.
    EX) [].map(()) => ":)"  -> 배열속 요소가 모두 ":)" 로 바뀐다 
    
    (+) map 으로 만든 element 들은 key 를 꼭 가져야한다.
    또한 key 값은 각 element 마다 고유한 값으로 가져야함
    => 적절한 게 없다면 index 이용 
    
    (+) map => 배열의 아이템 만큼 새로운 배열을 만들어서 return
    첫 번째 argument 로 item, 두 번재 argument 로 index 를 가져옴
    EX) ["a", "b", "c"].map((item) => )

    */
  );
}

export default App;
