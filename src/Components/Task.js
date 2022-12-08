// import React, { useState } from 'react'

import styled from 'styled-components';



export const ToDoContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    
    
`

const ToDo = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    height: 100%;
    color: #edf2f4 ;
    font-size: 1.2rem;
    border-top: 1px solid;
    margin: 0 auto;
    

`

export const Task = ({todos}) => {
    // const [edit, setEdit] = useState({
    //     id:null,
    //     value: ''
    // })

  return todos.map((todo) =>(
    <ToDoContain>
    <ToDo key={todo.id} >
        {todo.text}
    </ToDo>
    </ToDoContain>
  ));
}
