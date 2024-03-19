import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id? {title, id, completed} : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
        }else {
            setInput("");
        }
    }, [setInput, editTodo])
    
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <div className="d-flex">
                <input type="text" 
                    className="form-control"
                    placeholder="Add a task"
                    value={input}
                    onChange={onInputChange}
                />
                {/* <button type="submit" className="btn btn-primary ms-3">Add</button> */}
                <button className='btn btn-primary ms-3' type="submit">
                    {editTodo ? "OK" : "Add"}   
                </button>
            </div>
        </form>
    );
}

export default Form;