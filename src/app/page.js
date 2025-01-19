"use client";
import React, { useState } from 'react'

const page = () => {
  const [task,setTask]=useState()
  return (
    <div>
         <h1>To Do List</h1>
         <form>
           <input type="text" placeholder="Add task" onChange={()=>setTask(e.target.value)} />
           <button type="submit">Add</button>
         </form>
    </div>
  )
}

export default page