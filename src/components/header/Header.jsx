import css from './Header.module.css'


const Header = (props) => {
    return (
        <div className={css.header}>
            <h1>Todos ({props.array.reduce((sum, current) => sum + current.status, 0)} / {props.array.length})</h1>
        </div>
    )
}

export default Header;