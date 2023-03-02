import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../actions/todo";
function AddTodos() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onClickAddNewTodo = () => {
    const action = addNewTodo(value);
    dispatch(action);
    setValue("");
  };
  return (
    <div style={{ display: "flex" }}>
      <form>
        <div>
          <label style={{ margin: "0 10px 0 0" }}>Nhập todo: </label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ padding: "10px", fontSize: "20px", width: "200px" }}
            type="text"
          />
        </div>
      </form>
      <button
        style={{ padding: "10px", fontSize: "20px" }}
        onClick={onClickAddNewTodo}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodos;
