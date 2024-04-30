
const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>Due Date: {todo.dueDate}</p>
      <p>{todo.notes}</p>
      {todo.image && <img src={todo.image} alt="Todo" />}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
