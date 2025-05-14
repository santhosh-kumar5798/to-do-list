import React from 'react'
import nontick from '../assets/non tick.png'
import tick from '../assets/tick icon.png'
import delete_icon from '../assets/delete.png'
function ToDoItems({text,id,isCompleted,deleteTodo,toggle}) {
  return (
    <div onClick={()=>{toggle(id)}} className='flex items-center my-3 gap-2'>
        <div className="flex cursor-pointer flex-1 items-center gap-3 capitalize
        ">
          <img src={isCompleted ? tick : nontick} className='w-6 ' alt="" />
          <p className={`text-red-400 text-[17px] decoration-red-800          ${isCompleted ? "line-through":""}`}>{text}</p>
        </div>
        <img src={delete_icon} onClick={()=>{deleteTodo(id)}} className='w-3.5 cursor-pointer' alt="" />
    </div>
  )
}

export default ToDoItems