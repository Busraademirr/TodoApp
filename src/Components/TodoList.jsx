import React from 'react'
import NewTodo from './NewTodo';

function TodoList() {
  return (
    <div>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>
          <NewTodo/>
        </section>
    </div>
  )
}

export default TodoList