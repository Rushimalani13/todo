// TodoItem.js

import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem = ({ todoItem, setTodoList, setTodo, setUpdateTodo, setUpdateId}) => {
  
 const deleteTodo = (id)=>{
  if(window.confirm("You want to delete this todo?"))
  {
    setTodoList(todoItem.filter((current)=>current.id!==id));
  }
   
  }
  
  const updateTodo = (id)=>{
    const findTodo = todoItem.find((current)=>current.id===id);
    setTodo(findTodo.title);
    setUpdateTodo(true);
    setUpdateId(findTodo.id);
    // console.log(findTodo.title);
  }

  const todoCompleted = (id)=>{
    const findTodo = todoItem.find((current)=>current.id===id);
    findTodo.complete =!findTodo.complete;
    setTodoList([...todoItem]);
  }

  return ( 
    <>
      { 
      todoItem.map((item)=>(
      <li className="flex items-center justify-between mb-2" key={item.id}>
         <div className="flex items-center">
           <input type="checkbox" className="mr-2 text-blue-500 focus:outline-none" onClick={()=>todoCompleted(item.id)} />
           <span className={`${item.complete?'line-through':''}`}>{item.title}</span>
         </div>
         <div className="flex items-center">
           <button className="text-yellow-500 hover:text-yellow-700" onClick={()=>updateTodo(item.id)}>
             <FaEdit />
           </button>
           <button className="text-red-500 hover:text-red-700 ml-2" onClick={()=>deleteTodo(item.id)}>
             <FaTrash />
           </button>
       </div>
     </li>
    ))
    }
    </>   
  );
};

export default TodoItem;
