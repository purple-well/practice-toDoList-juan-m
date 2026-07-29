
import './App.css'
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ToDoList />
    </div>
  );
}
export default App