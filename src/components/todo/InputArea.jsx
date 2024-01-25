import { useState } from "react";
import { v4 as idv4 } from "uuid";

function InputArea({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentsChangeHandler = (e) => {
    setContents(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!title || !contents) {
      alert("내용을 작성해주세요");
      return;
    } else {
      const newTodo = {
        id: idv4(),
        title,
        contents,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      alert("추가되었습니다.");
      setTitle("");
      setContents("");
    }
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>제목 : </label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={titleChangeHandler}
        />
        <label>내용 : </label>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={contents}
          onChange={contentsChangeHandler}
        />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}

export default InputArea;
