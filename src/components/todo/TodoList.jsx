import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      <Todo todos={todos} setTodos={setTodos} checkDone={false} />
      <Todo todos={todos} setTodos={setTodos} checkDone={true} />
    </div>
  );
}

export default TodoList;
