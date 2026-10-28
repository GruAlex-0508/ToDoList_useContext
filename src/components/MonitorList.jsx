import { useContext } from "react";
import ToDoContext from "../ToDoContext";

function MonitorList() {
  const toDoContext = useContext(ToDoContext);

  function toggleTodo(id) {
    toDoContext.setToDo((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    );
  }

  function deleteToDo(id) {
    toDoContext.setToDo((prevToDos) =>
      prevToDos.filter((toDo) => toDo.id !== id),
    );
  }

  return (
    <ul className="toDo-list">
      {toDoContext.todo.map((toDo) => (
        <li
          className={`toDo-item${toDo.completed ? " checked" : ""}`}
          key={toDo.id}
        >
          <span className="toDo-text" onClick={() => toggleTodo(toDo.id)}>
            {toDo.title}
          </span>
          <button
            className="delete-button"
            type="button"
            onClick={() => deleteToDo(toDo.id)}
            aria-label={`Delete ${toDo.title}`}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MonitorList;
