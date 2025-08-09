import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Task = ({handleTaskDataChange,handleSubmit,editIndex,taskData,user}) => {
 const navigate = useNavigate();

    useEffect(()=>{
      if(!user){
        navigate("/")
      }
    },[user,navigate])

  return (
    <div >
        <h1 className='text-sm md:text-2xl font-semibold italic mt-10 mr-[60%]' >HELLO <span className=' md:text-4xl' style={{fontWeight:'bold',fontStyle:'italic',color:'green'}}>{user}!</span>,LET'S SMASH ALL THE THINGS!!</h1>
        <h1 className=' text-3xl font-bold mt-10'>TASK MANAGEMENT</h1>
        <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='add your task' className='mt-6 p-3 border' onChange={(e)=>{
          handleTaskDataChange("task", e.target.value)
        }} required  value={taskData.task}/>
        <button className='ml-5 bg-gray-300 p-2 w-24 rounded-md text-gray-600' type='submit' >{ editIndex===null ? "ADD" : "EDIT"  }</button>
        
        </form>
    </div>
  )
}

export default Task