import './App.css';
import Header from './components/header/Header'
import CreateTodo from './components/createTodo/CreateTodo';
import Todo from './components/todo/Todo';



const todosArray = [
  {
    id: 1,
    title: "Купить бананы",
    status: false
  },
  {
    id: 2,
    title: "Купить помидоры",
    status: true
  },
  {
    id: 3,
    title: "Сходить на день рождения",
    status: false
  },
  {
    id: 4,
    title: "Погулять",
    status: false
  },
]


function App() {

  const newTodos = todosArray.map((elem, id) => <Todo title={elem.title} status={elem.status} id={elem.id} />)

  return (
    <div className="App">

      <Header array={todosArray}/>

      <div className='content'>

        <CreateTodo />

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