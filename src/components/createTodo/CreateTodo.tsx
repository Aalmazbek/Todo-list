import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../redux';

import { addTodo } from '../../redux/todosSlice';
import css from './CreateTodo.module.css'


let checkSpaces = (str: string) => str.trim() === "";


const CreateTodo = () => {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState("")


    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (checkSpaces(inputValue)) {
            setInputValue("")
            return
        }

        dispatch(addTodo(inputValue))
        // props.addTodo(inputValue)
        setInputValue("")
    }


    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(e.target.value)
    }

    return (
        <form onSubmit={submit} className={css.CreateTodo}>
            <input value={inputValue} onChange={handleChange} type="text" placeholder='Add some todo' />
            <input type="submit" value="+Add" />
        </form>
    )
}


export default CreateTodo
