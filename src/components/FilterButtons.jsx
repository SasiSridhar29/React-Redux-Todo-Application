/* eslint-disable no-unused-vars */
// FilterButtons.jsx
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';
import TodoItem from "./TodoItem";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
     <button className="text-sm px-2 py-1 rounded border-gray-300"  value={currentFilter} onClick={() => handleFilter('ALL')}>All</button> 
    <button className="text-sm px-2 py-1 rounded  border-gray-300"  value={currentFilter} onClick={() => handleFilter('COMPLETED')}>Completed</button>
    <button className="text-sm px-2 py-1 rounded  border-gray-300"  value={currentFilter} onClick={() => handleFilter('INCOMPLETE')}>Incomplete</button>


      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    
    </div>
  // add index
/*
<div>
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  </div>*/
  );
};

export default FilterButtons;