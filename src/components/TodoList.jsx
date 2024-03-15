// TodoList.js

import React,{ useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
const TodoList = () => {

  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [updateTodo, setUpdateTodo] = useState(false);

  const [updateId, setUpdateId]=useState("");

  const addTodoList = () =>
  {
    if(updateTodo)
    {
      const findTodo = todoList.find((current)=>current.id===updateId);
      findTodo.title=todo;
      // console.log(findTodo);
      // console.log(updateId);
      setUpdateTodo(false);
      setTodo("");
    }
    else
    {
      if(todo != "")
      {
        const newTodoObject={id:uuidv4(),title:todo,complete:false}
        setTodoList([...todoList, newTodoObject]);
        setTodo("");
      }
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>

        {/* Add Todo Form */}
          <input
            type="text"
            placeholder="Add a new todo"
            className="flex-1 border-b-2 border-gray-300 p-2 focus:outline-none"
            value={todo}
            onChange={(e)=> setTodo(e.target.value) }
          
          />
          { updateTodo?<button className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none" onClick={addTodoList}> Update </button>:<button className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none" onClick={addTodoList}> Add </button> }
          
        
        {/* Todo Items using TodoItem component */}
        <ul>
          {/* Sample Todo Items */}
             <TodoItem todoItem={todoList} setTodoList={setTodoList} setTodo={setTodo} setUpdateTodo={setUpdateTodo} setUpdateId={setUpdateId} />
           
          {/* <TodoItem todos={todoList} /> */}
          {/* End Sample Todo Items */}
        </ul>
        {  todoList.length>0 && <button className="bg-red-500 my-4 text-white p-2 rounded-md ml-2 hover:bg-red-600 focus:outline-none" onClick={()=>{setTodoList([])}}> Remove All Todo </button>}
      </div>
    </div>
  );
};

export default TodoList;
