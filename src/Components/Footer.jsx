import React, { useContext } from 'react';
import { Context } from '../Context/SiteContext';

function Footer() {

    const { todo,handleClickListActive, handleClickListCompleted, handleClickListAll, handleClickClearCompleted} = useContext(Context);

  return (
    <div>
        <footer className="footer">
          <span className="todo-count">
            <strong>{todo.filter(item => !item.completed).length}</strong>
            items left
          </span>
          <ul className="filters">
            <li>
              <a href="#/" onClick={handleClickListAll}>All</a>
            </li>
            <li>
              <a href="#/" onClick={handleClickListActive} >Active</a>
            </li>
            <li>
              <a href="#/" onClick={handleClickListCompleted}>Completed</a>
            </li>
          </ul>
          <button className="clear-completed" onClick={handleClickClearCompleted}>
            Clear completed
          </button>
        </footer>
    </div>
  )
}

export default Footer
