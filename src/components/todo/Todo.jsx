import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, onSatusChange } from '../../redux/todosSlice';
import css from './Todo.module.css'



const Todo = (props) => {
    const dispatch = useDispatch()
    
    const [inputValue, setInputValue] = useState(props.title ? props.title : "")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


    const handleStatus = () => {
        dispatch(onSatusChange(props.id))
    }



    const closeEdit = (e) => {
        e.target.parentElement.parentElement.parentElement.style.transform = "translateX(0)"
    }

    const openEdit = (e) => {
        e.target.parentElement.parentElement.parentElement.style.transform = "translateX(-50%)"
    }



    const deleteTodoFunc = (e, id) => {
      let todo = e.target.parentElement.parentElement.parentElement

      todo.style.transition = "0.3s"
      todo.style.transform = "translateX(100%)"

      setTimeout(() => {
        dispatch(deleteTodo(id))
      }, 300)
    }


    const editTodoFunc = (id) => {
        dispatch(editTodo({id: props.id, title: inputValue}))
    }

    



    return (
        <div className={css.Todo}>
            <div className=''>
                <div>
                    <input type="checkbox" name="" id="" checked={props.status} onChange={handleStatus} />
                    <p className={props.status ? css.completed : ""} >{props.title}</p>
                </div>

                <div>
                    <button onClick={openEdit}>Edit</button>
                    <button onClick={(e) => deleteTodoFunc(e, props.id)}>Del</button>
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
                        editTodoFunc()
                    }}>Save</button>
                    <button onClick={closeEdit}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;