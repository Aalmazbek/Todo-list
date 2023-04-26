import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header'
import CreateTodo from './components/createTodo/CreateTodo';
import Todo from './components/todo/Todo';
import { useAppSelector } from './redux';






function App() {
  const todosArray = useAppSelector(state => state.data)

  const completedTodos = todosArray.reduce((sum, current) => current.status ? sum + Number(current.status) : sum, 0)
  const totalTodos = todosArray.length

  const [test, setTest] = useState()

  return (
    <div className="App">

      <Header completedTodos={completedTodos} totalTodos={totalTodos} />

      <div className='content'>

        <CreateTodo />

        <div className='todosWrapper'>

          {/* <Todo title="Купить сахар"/> 
          <Todo title="Купить соль"/> 
          <Todo title="Сделать журавлика"/> 
          <Todo title="Погулять"/>  */}

          {todosArray.map(elem => (
            <Todo key={elem.id} {...elem} />
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;