import InputArea from "components/todo/InputArea";
import TodoList from "components/todo/TodoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="layout">
      <InputArea todos={todos} setTodos={setTodos} />

      {/* TodoList */}
      <TodoList todos={todos} setTodos={setTodos} />

      {/* Footer */}
      <div></div>
    </div>
  );
}

export default App;
