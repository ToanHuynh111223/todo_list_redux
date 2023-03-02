import { useSelector } from "react-redux";

function ListTodos() {
  const listTodos = useSelector((state) => state.todo.listTodos);
  return (
    <ul>
      {listTodos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
}

export default ListTodos;
