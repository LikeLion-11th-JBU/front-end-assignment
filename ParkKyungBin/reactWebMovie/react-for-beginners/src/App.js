import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos(currentArray => [todo, ...currentArray]);
    setTodo("");
  }


  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" 
               placeholder="Write your do...."
               value={todo}
               onChange={onChange}/>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li ke={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
