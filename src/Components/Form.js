import React, { useState } from 'react'
import styled from 'styled-components'
import { Task} from './Task'





const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: 0 auto;
    gap: 10px;
    padding-top: 10px;

`
const InputText = styled.input`
    width: 90%;
    height: 40px;
    border: none;
    background-color: #8d99ae;
    color:#edf2f4;
    padding-left: 15px;
    font-size: 15px;
    border-radius: 20px;
    margin: 0 auto;
    :hover{
        outline: none;
        border: none; 

    }
`
const ButtonAdd = styled.button`
    display: flex;
    width: 80%;
    height: 35px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background-color: #d90429 ;
    color: #edf2f4;
    margin: 0 auto;
`

export const ButtonDeleteAll = styled.button`
    display: flex;
    width: 80%;
    height: 35px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background-color: #d90429 ;
    color: #edf2f4;
    margin: 0 auto;
`




export const Form = (props) => {
    const [Input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value);

    };

    const handleSubmit = e =>{
        e.preventDefault();
        if (!Input.length == 0) {
            
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: Input

        })

    }
        setInput('');


    }


  return (
    <Forms onSubmit={handleSubmit}>
        <InputText 
        type='text' 
        placeholder='agregar tarea' 
        value={Input}
        name='text'
        onChange={handleChange}
         />
         <ButtonAdd>Agregar tarea</ButtonAdd>
    </Forms>

  )
}
