function TodoList({ todos, setTodos }) {
  return (
    <div>
      {/* Working.. */}
      <div>
        <h2>Working</h2>
        <div>
          {todos
            .filter((todo) => todo.isDone === false)
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
                    완료
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      {/* Done!! */}
      <div>
        <h2>Done</h2>
        <div>
          {todos
            .filter((todo) => todo.isDone === true)
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
                    취소
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
