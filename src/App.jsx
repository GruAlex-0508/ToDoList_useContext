import ToDoList from "./toDoList";
import "./App.css";
import ToDoContext from "./ToDoContext";
import { useState } from "react";

function App() {
  const [todo, setToDo] = useState([]);

  return (
    <ToDoContext value={{ todo, setToDo }}>
      <ToDoList />;
    </ToDoContext>
  );
}

export default App;
