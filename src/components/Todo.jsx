import React, { useEffect, useRef, useState } from 'react'
import todo from '../assets/todo.png'
import ToDoItems from './ToDoItems'


const Todo = () => {

  const [TodoList,SetTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);

  const inputRef = useRef()

  const add = ()=>{
    const inputText =inputRef.current.value.trim();

    if(inputText === ""){
     return null;
    }
    
    const newTodo ={
      id : Date.now(),
      text : inputText,
      isCompleted : false,
    }
    SetTodoList((prev)=>[...prev,newTodo]);
    inputRef.current.value = "";
  }

  // delete icon function

  const deleteTodo = (id)=>{
    SetTodoList((prevTodos)=>{
      return prevTodos.filter((todos)=>todos.id !== id)
    })
  }

  // is complete incomplete function

  const toggle = (id)=>{
      SetTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
          if(todo.id === id){
            return {...todo,isCompleted:!todo.isCompleted}
          }
          return todo;
        })
      })
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(TodoList));
    
  },[TodoList])

  return (
    <div className='flex flex-col w-11/12 max-w-md place-self-center bg-white min-h-[550px] rounded-xl p-7 '>

{/* ----title---- */}

  <div className="flex items-center self-center gap-3">
    <img src={todo} className='w-8' alt="" />
    <h2 className='text-3xl font-semibold capitalize'>to-do list</h2>
  </div>

  {/* input box */}

   <div className=" flex bg-red-300 my-5 w-10/12 self-center rounded-full h-12">
     <input type="text" ref={inputRef} className='bg-transparent flex-1 text-red-400 placeholder:text-red-400 capitalize pl-6 pr-2 focus:outline-none ring-0 caret-red-400' placeholder='enter your task' name="" id="" />

     <button onClick={add} className='text-red-400 pr-3 capitalize font-bold bg-red-500 rounded-full h-19 w-20 pl-3 focus:outline-none ring-0'>add +</button>
   </div>
   {/* todo list items */}

   <div className="">
    {TodoList.map(
      (item,index)=>{
        return <ToDoItems key={index} text={item.text}
        isCompleted={item.isCompleted} deleteTodo={deleteTodo}
        id={item.id} toggle={toggle}
        />
      }
    )}
   </div>
   
   

    </div>
  )
}

export default Todo