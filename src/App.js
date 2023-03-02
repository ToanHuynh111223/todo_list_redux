import ListTodos from "./components/ListTodos";
import AddTodos from "./components/AddTodos";
function App() {
  return (
    <div className="App" style={{ fontSize: "26px" }}>
      <AddTodos />
      <ListTodos />
    </div>
  );
}

export default App;
