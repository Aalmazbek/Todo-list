import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';
import css from './CreateTodo.module.css'


let checkSpaces = (str) => str.trim() === "";


const CreateTodo = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")


    const submit = (e) => {
        e.preventDefault()
        if (checkSpaces(inputValue)) {
            setInputValue("")
            return
        }

        dispatch(addTodo(inputValue))
        // props.addTodo(inputValue)
        setInputValue("")
    }


    const handleChange = (e) => {
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
