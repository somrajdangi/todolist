import { useState } from "react";
import Title from "./Title";
import Input from "./Input";
import ToDoList from "./ToDoList";
function App() {
  const [todos, setToDos] = useState([]);

  function handleDelete(event) {
    let id = event.target.id;
    let temptodos = todos.filter((item) => {
      if (item.title != todos[id].title) {
        return item;
      }
    });
    setToDos(temptodos);
  }
  function handleSubmit(inputs) {
    console.log(inputs);
    setToDos([...todos, { title: inputs }]);
  }

  return (
    <>
      <Title />
      <Input handleSubmit={handleSubmit} />
      <div className="todolist">
        <h1>Todo List</h1>

        {todos.map((item, index) => {
          return (
            <ToDoList
              key={index}
              index={index}
              item={item}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
