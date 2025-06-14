import { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import TextArea from "./Input";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [bgImage, setBgImage] = useState<string>(() => {
    return localStorage.getItem("bgImage") || "";
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("bgImage", bgImage);
  }, [bgImage]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <Header setBgImage={setBgImage} />
      <List todos={todos} setTodos={setTodos} />
      <TextArea todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
