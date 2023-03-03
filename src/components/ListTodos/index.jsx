import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../actions/todo";
function ListTodos() {
  const listTodos = useSelector((state) => state.todo.listTodos);
  const dispatch = useDispatch();
  const onClickDeleteTodo = (index) => {
    const action = removeTodo(index);
    dispatch(action);
  };
  return (
    <ul>
      {listTodos.map((todo, index) => {
        return (
          <li style={{ marginBottom: "10px" }} key={index}>
            {todo}
            <button
              style={{ marginLeft: "50px", padding: "10px" }}
              onClick={() => onClickDeleteTodo(index)}
            >
              Xóa
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListTodos;
