import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos }) => {
    return (
        <div>
            <h2>Todo List</h2>
            {todos && todos.length > 0 ? (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
                <p>No hay TODOs todavía.</p>
            )}
        </div>
    );
};

export default TodoList
