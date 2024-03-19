import React from "react";

const Todolist = ({ todos, setTodos, setEditTodo }) => {
    const onTodoEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }

    const onTodoDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const onTodoComplete = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };
    return (
        <div>
            <div className="text-white mt-4">
                {todos.map((todo) => (
                    <div key={todo.id} className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded">
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
                        <div>
                            <button onClick={() => onTodoComplete(todo.id)} className="btn btn-success me-2">
                                {todo.completed ? 'Incompleted' : 'Complete'}
                            </button>
                            <button onClick={() => onTodoEdit(todo.id)} className="btn btn-warning me-2">Edit</button>
                            <button onClick={() => onTodoDelete(todo.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todolist;