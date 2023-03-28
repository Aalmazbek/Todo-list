import { useState, useSyncExternalStore } from 'react';
import './App.css';
import Header from './components/header/Header'
import CreateTodo from './components/createTodo/CreateTodo';
import Todo from './components/todo/Todo';
import { useEffect } from 'react';






function App() {
  const [todosArray, setTodosArray] = useState([])

  // const getTodosFromLocalStorage = (setTodosFunc, storageKey) => {
  useEffect(() => {
    if (localStorage.getItem("todosArray")) {
      setTodosArray(JSON.parse(localStorage.getItem("todosArray")))
    }
  }, [])
  // }

  // getTodosFromLocalStorage(setTodosArray, "todosArray")

  const addTodo = (str) => {
    let todosArrayCopy = todosArray.concat()
    todosArrayCopy.unshift({
      id: Date.now(),
      title: str,
      status: false,
    })

    localStorage.setItem('todosArray', JSON.stringify(todosArrayCopy))
    setTodosArray(todosArrayCopy)
  }


  const deleteTodo = (id) => {
    let todosArrayCopy1 = todosArray.concat()
    let todos = document.querySelectorAll('.todosWrapper > div')
    // console.log();
    todos[todosArrayCopy1.findIndex(item => item.id === id)].style.transition = "0.3s"
    todos[todosArrayCopy1.findIndex(item => item.id === id)].style.transform = "translateX(100%)"

    let todosArrayCopy2 = todosArray.filter(el => el.id !== id)
    localStorage.setItem('todosArray', JSON.stringify(todosArrayCopy2))
    setTimeout(() => {
      setTodosArray(todosArrayCopy2)
    }, 300)
  }

  const changeStatus = (status, id) => {
    let todosArrayCopy = todosArray.concat()
    let index = todosArrayCopy.findIndex(item => item.id === id)
    todosArrayCopy[index].status = !status

    localStorage.setItem('todosArray', JSON.stringify(todosArrayCopy))
    setTodosArray(todosArrayCopy)
  }


  const changeTodo = (id, str) => {
    let todosArrayCopy = todosArray.concat()
    todosArrayCopy[todosArrayCopy.findIndex(elem => elem.id === id)].title = str

    localStorage.setItem('todosArray', JSON.stringify(todosArrayCopy))
    setTodosArray(todosArrayCopy)
  }



  const newTodos = todosArray ? todosArray.map((elem, id) => (
    <Todo 
      key={elem.id} 
      title={elem.title} 
      status={elem.status} 
      id={elem.id} 
      deleteTodo={deleteTodo} 
      changeStatus={changeStatus} 
      changeTodo={changeTodo}
    />
  )) : []

  const [number, setNumber] = useState(0)

  const handleClick = (e) => {
    if (e.target.textContent === 'minus') {
      setNumber(number - 1)
    }

    if (e.target.textContent === 'plus') {
      setNumber(number + 1)
      let todos = todosArray.concat()
      todos.push({title: "Купить молоко", status: false, id: 5})
      setTodosArray(todos)
    }
  }

  return (
    <div className="App">

      <Header array={todosArray}/>

      <div className='content'>

        <CreateTodo addTodo={addTodo} />

        <div className='todosWrapper'>

          {/* <Todo title="Купить сахар"/> 
          <Todo title="Купить соль"/> 
          <Todo title="Сделать журавлика"/> 
          <Todo title="Погулять"/>  */}

          {newTodos}

        </div>
      </div>

    </div>
  );
}

export default App;