import React, { useContext } from 'react';
import { Context } from '../Context/SiteContext';

function NewTodo() {
    const {
        editTodoId,editTodoContent, handleDelete, changeType, filteredTodos,handleEdit, inputChangeValue, handleBlur }=useContext(Context);

  return (
    <div>
        <ul className="todo-list">
            {filteredTodos.map((item)=>(
              <li key={item.id} className={editTodoId === item.id ? '' : (item.completed ? 'completed' : '')}>
                <div className="view">
                <input className="toggle" type="checkbox" onClick={()=>changeType(item.id)}/>
                  {editTodoId === item.id ? (
                    <input className='editTodoInput'
                    onClick={()=>changeType(item.id)}
                    onChange={inputChangeValue}
                    value={editTodoContent}
                    onBlur={() => handleBlur(item.id)}
                    />
                  ) : (
                    <label onClick={()=>handleEdit(item.id , item.content)}>{item.content}</label>
                  )}
                  <button className="destroy" onClick={()=>handleDelete(item)}></button>
                </div>
              </li>
            ))} 
          </ul>
    </div>
  )
}

export default NewTodo