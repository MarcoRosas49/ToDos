import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import { getTodos, saveTodos } from './utils/localStorage';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = getTodos();
    setTodos(storedTodos);
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    saveTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Header />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos || []} />
    </div>
  );
};

export default App;