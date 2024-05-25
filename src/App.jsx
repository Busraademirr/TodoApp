import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {

  return (
    <>
      <section className="todoapp">
        <Header/>
        <TodoList/>
        <Footer/>
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
      </footer>  
    </>
  )
}

export default App
