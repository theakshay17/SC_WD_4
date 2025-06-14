import { useState } from "react";
import "./Input.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TextArea({ todos, setTodos }: InputProps) {
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  return (
    <div className="textArea">
      <input
        id="textbox"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a task..."
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TextArea;
