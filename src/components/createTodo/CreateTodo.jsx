import css from './CreateTodo.module.css'


const CreateTodo = (props) => {
    
    return (
        <div className={css.CreateTodo}>
            <input type="text" />
            <input type="submit" value="+Add" />
        </div>
    )
}


export default CreateTodo
