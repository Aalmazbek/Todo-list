import { useSelector } from 'react-redux';
import css from './Header.module.css'


const Header = () => {
    const todosArray = useSelector(state => state.data)

    return (
        <div className={css.header}>
            <h1>Todos ({todosArray.reduce((sum, current) => sum + current.status, 0)} / {todosArray.length})</h1>
        </div>
    )
}

export default Header;