import { useState, useContext } from "react";
import ToDoContext from "../ToDoContext";

function InputList() {
  const [value, setValue] = useState("");
  const [toDoId, setToDoId] = useState(0);

  const toDoContext = useContext(ToDoContext);

  function handleAddToDo(event) {
    event.preventDefault();
    const input = value.trim();
    if (input) {
      toDoContext.setToDo((prevTodo) => [
        ...prevTodo,
        { id: toDoId, title: input, completed: false },
      ]);
      setToDoId((prevId) => prevId + 1);
      setValue("");
    }
  }

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      <form className="form" onSubmit={handleAddToDo}>
        <input
          className="input"
          type="text"
          id="myInput"
          value={value}
          onChange={handleInputChange}
          placeholder="Title..."
        />
        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputList;
