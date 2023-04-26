import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux';

import css from './Header.module.css'

interface PropType {
    completedTodos: number,
    totalTodos: number
}

const Header: React.FC<PropType> = ({completedTodos, totalTodos}) => {

    return (
        <div className={css.header}>
            <h1>Todos ({completedTodos} / {totalTodos})</h1>
        </div>
    )
}

export default Header;