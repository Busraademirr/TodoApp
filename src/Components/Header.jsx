import React, { useContext } from 'react';
import { Context } from '../Context/SiteContext';

function Header() {
    const { handleSubmit, handleInput, handleKeyDown, value } = useContext(Context);

  return (
    <div>
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={handleSubmit}>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={handleInput} onKeyDown={handleKeyDown} value={value}/>
          </form>
        </header>
    </div>
  )
}

export default Header