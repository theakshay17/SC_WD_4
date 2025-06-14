import "./List.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function List({ todos, setTodos }: ListProps) {
  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="toDoList">
      {todos.map((todo) => (
        <ul className="list" key={todo.id}>
          <li className="listItems">
            <div className="complete">
              <input
                type="checkbox"
                id={`checkbox-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              <label
                htmlFor={`checkbox-${todo.id}`}
                className={todo.completed ? "strike" : ""}
              >
                {todo.text}
              </label>
            </div>
            <div className="button">
              <button id="button" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default List;
