import css from './CreateTodo.module.css'

let checkSpaces = str => str.trim() != ""


const CreateTodo = (props) => {

    function handleClick(e){
        if(checkSpaces(e.target.previousElementSibling.value)){
            console.log(e.target.previousElementSibling.value);
            e.target.previousElementSibling.value = ''
        }
    }

    
    
    return (
        <div className={css.CreateTodo}>
            <input type="text" />
            <input type="submit" value="+Add" onClick={handleClick} />
        </div>
    )
}


export default CreateTodo
