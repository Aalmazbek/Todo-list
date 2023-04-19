import './App.css';
import Header from './components/header/Header'
import CreateTodo from './components/createTodo/CreateTodo';
import Todo from './components/todo/Todo';
import { useSelector } from 'react-redux';






function App() {
  const todosArray = useSelector(state => state.data)
  console.log(todosArray);

  return (
    <div className="App">

      <Header />

      <div className='content'>

        <CreateTodo />

        <div className='todosWrapper'>

          {/* <Todo title="Купить сахар"/> 
          <Todo title="Купить соль"/> 
          <Todo title="Сделать журавлика"/> 
          <Todo title="Погулять"/>  */}

          {todosArray.map(elem => (
            <Todo 
              key={elem.id} 
              title={elem.title} 
              status={elem.status} 
              id={elem.id} 
            />
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;