import React, { useState } from 'react'

import { Form, ButtonDeleteAll } from './Form';
import { Task } from './Task';




export const ToDoList = () => {
    
    const [todos, setTodos] = useState([]);
    
    const addToDo = todo =>{
        
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);
    }

    const handleDelate = e =>{
      if (e.target) {
        setTodos([])
      }
    }

  return (
    <>
    <Form onSubmit={addToDo}/>
    <ButtonDeleteAll onClick={handleDelate}>Borrar Tareas</ButtonDeleteAll>
    <Task todos={todos}/>
    
    </>
  )
}
