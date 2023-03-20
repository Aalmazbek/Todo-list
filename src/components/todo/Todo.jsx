import css from './Todo.module.css'



const Todo = (props) => {
    // console.log(props.status);

    function handleChange(){
        // props.status ? props.status = false : props.status = true
    }

    return (
        <div className={css.Todo}>
            <div>
                <input type="checkbox" name="" id="" checked={props.status} onChange={handleChange} />
                <p className={props.status ? css.completed : ""} >{props.title}</p>
            </div>

            <div>
                <button>Edit</button>
                <button>Del</button>
            </div>
        </div>
    )
}

export default Todo;