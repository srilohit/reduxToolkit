import './App.css';
import Counter from './features/counter/Counter';
import Countries from './features/countries/Countries';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <div className="border border-dark m-3 p-3 ">
      <h3>App Component</h3>
      <Counter></Counter>
      <TodoList></TodoList>
      <Countries></Countries>
    </div>
  );
}

export default App;
