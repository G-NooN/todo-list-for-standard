function Todo({ todos, setTodos, checkDone }) {
  return (
    <div>
      <h2>{!checkDone ? "Working" : "Done"}</h2>
      <div>
        {todos
          .filter((todo) => todo.isDone === checkDone)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <button
                  onClick={() => {
                    const checkDelete = window.confirm("삭제하시겠습니까?");
                    if (checkDelete) {
                      const newTodos = todos.filter((todoItem) => todoItem.id !== todo.id);
                      setTodos(newTodos);
                      alert("삭제되었습니다.");
                    } else return;
                  }}
                >
                  삭제하기
                </button>
                <button
                  onClick={() => {
                    const checkEditDone = window.confirm("상태를 변경하시겠습니까?");
                    if (checkEditDone) {
                      const newTodos = todos.map((todoItem) => {
                        if (todoItem.id === todo.id) {
                          return {
                            ...todoItem,
                            isDone: !todoItem.isDone,
                          };
                        } else {
                          return todoItem;
                        }
                      });
                      setTodos(newTodos);
                      alert("변경되었습니다.");
                    }
                  }}
                >
                  {!checkDone ? "완료" : "취소"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Todo;
