import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Todolist from './components/Todolist.jsx';
import { useState } from 'react';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div 
      className="container-fluid p-2"
      style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(to right bottom, #e1b382, #c89666)'
      }}
    >
      <div className='d-flex justify-content-center'>
        <div 
          className='justify-content-center bg-dark rounded-5 p-3 mt-3'
          style={{
            height: '80vh',
            width: '600px',
          }}
        >
          <div>
            <Header/>
            <hr className='border border-2 border-light'></hr>
            <Form
              input = {input}
              setInput = {setInput}
              todos = {todos}
              setTodos = {setTodos}
              editTodo = {editTodo}
              setEditTodo = {setEditTodo}
            />
          </div>
          <div>
            <Todolist
              todos = {todos}
              setTodos = {setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
