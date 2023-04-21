import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux';

import css from './Header.module.css'


const Header = () => {
    const todosArray = useAppSelector(state => state.data)

    return (
        <div className={css.header}>
            <h1>Todos ({todosArray.reduce((sum, current) => current.status ? sum + 1 : sum, 0)} / {todosArray.length})</h1>
        </div>
    )
}

export default Header;