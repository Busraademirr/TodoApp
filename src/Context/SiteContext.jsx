import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ( {children})=>{

    const [todo , setTodo]=useState([]);
    const [value, setValue]=useState('');
    const [filter, setFilter] = useState('all');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoContent, setEditTodoContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      }
    
      const handleInput = (e)=>{
        setValue(e.target.value);
      }
    
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
    
          const newListItem = {
            id: Math.floor(Math.random() * 999999999999),
            content : value,
            completed: false
          }
    
          setTodo(prev => ([...prev , newListItem]))
          setValue('');
        }
      }
    
      const handleDelete = (item)=> {
        setTodo(todo.filter((todo)=>todo.id!==item.id));
      }
      
      const changeType = (id)=>{
        setTodo(prev => prev.map(item =>
          item.id === id ? { ...item, completed: !item.completed } : item
        ));
      }
    
      const filteredTodos = todo.filter(item => {
        if (filter === 'active') {
          return !item.completed;
        } else if (filter === 'completed') {
          return item.completed;
        } else {
          return true;
        }
      });
      
    
      const handleClickListActive = ()=>{
        setFilter('active');
      }
      const handleClickListCompleted = ()=>{
        setFilter('completed');
      }
      const handleClickListAll = ()=>{
        setFilter('all');
      }
      const handleClickClearCompleted = ()=>{
        setTodo(todo.filter(item=>!item.completed))
      }
    
      const handleEdit =(id, content)=>{
        setEditTodoId(id);
        setEditTodoContent(content);
      }
    
      const inputChangeValue = (e)=>{
        
        setEditTodoContent(e.target.value);
      }
    
    
      const handleBlur= (id)=>{
          setTodo(prev => prev.map(item =>
            item.id === id ? { ...item, content: editTodoContent, completed:false } : item
          ));
          setEditTodoId(null);
          setEditTodoContent('');
      }

      const data = {
        todo,
        setTodo,
        value,
        setValue,
        filter,
        setFilter,
        editTodoId,
        setEditTodoId,
        editTodoContent,
        setEditTodoContent,
        handleSubmit,
        handleInput,
        handleKeyDown,
        handleDelete,
        changeType,
        filteredTodos,
        handleClickListActive,
        handleClickListCompleted,
        handleClickListAll,
        handleClickClearCompleted,
        handleEdit,
        inputChangeValue,
        handleBlur,
      };

    return (

        <Context.Provider value={ data}>
            {children}
        </Context.Provider>
    )   
}

export default Provider

