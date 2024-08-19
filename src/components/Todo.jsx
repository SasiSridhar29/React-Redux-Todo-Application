
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { addTodo } from '../redux/actions';

const Todo = () => {
const todos = useSelector((state) => state.todos);
const filter = useSelector((state) => state.filter);
const dispatch = useDispatch(); 

const [newTodoText, setNewTodoText] = useState('');

  // console.log(newTodoText)

  const handleAddTodo = (text) => {
        dispatch(addTodo(text));
      };
      function handleSubmit(ev){
        ev.preventDefault();
        setNewTodoText('');
      }
    
      const handleAddTodoClick = () => {
        if (newTodoText.trim() !== '') {
          handleAddTodo(newTodoText.trim());
          setNewTodoText('');
        }
      };
  return(
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
        <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'> TODO </h2>
     <div className="flex items-center mb-4">
     <form  className="flex  justify-between gap-2 " onSubmit={handleSubmit}>
      <input 
      className="flex-grow p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
       type="text"
       placeholder=' What needs to be done?'
       value={newTodoText}
       onChange={(e) => setNewTodoText(e.target.value)}/>

       </form>
    </div>
    
    <div className="   justify-between gap-4"> 
       
  
    <TodoList />


    </div>

       <footer className='mt-5 flex items-center ' >
       <FilterButtons />
        </footer> 
    
    </div>
  )
}

export default Todo;
 /*
        
        <TodoList />
  */