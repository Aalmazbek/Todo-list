import { useState } from 'react'
import css from './CreateTodo.module.css'


let checkSpaces = (str) => str.trim() === "";


const CreateTodo = (props) => {
    
    const [inputValue, setInputValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        if (checkSpaces(inputValue)) {
            setInputValue("")
            return
        }

        props.addTodo(inputValue)
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
