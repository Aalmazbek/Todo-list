import { useState } from 'react';
import css from './Todo.module.css'



const Todo = (props) => {
    // console.log(props.status);
    const [inputValue, setInputValue] = useState(props.title ? props.title : "")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }



    const closeEdit = (e) => {
        // e.target.parentElement.parentElement.parentElement.style.transform = "translateX(-50%)"
        e.target.parentElement.parentElement.parentElement.style.transform = "translateX(0)"
    }

    const openEdit = (e) => {
        e.target.parentElement.parentElement.parentElement.style.transform = "translateX(-50%)"
        // e.target.parentElement.parentElement.parentElement.style.transform = "translateX(0)"
    }

    



    return (
        <div className={css.Todo}>
            <div className=''>
                <div>
                    <input type="checkbox" name="" id="" checked={props.status} onChange={() => props.changeStatus(props.status, props.id)} />
                    <p className={props.status ? css.completed : ""} >{props.title}</p>
                </div>

                <div>
                    <button onClick={openEdit}>Edit</button>
                    <button onClick={() => props.deleteTodo(props.id)}>Del</button>
                </div>
            </div>

            <div className=''>
                <div>
                    <input type="text" value={inputValue} onChange={handleChange}/>
                </div>

                <div>
                    <button onClick={(e) => {
                        setTimeout(() => {
                            closeEdit(e)
                        }, 200)
                        props.changeTodo(props.id, inputValue)
                    }}>Save</button>
                    <button onClick={closeEdit}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;