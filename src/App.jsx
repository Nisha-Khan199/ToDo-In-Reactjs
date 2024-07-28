import React, { useState } from 'react'
import './index.css'
import Form from './Form'
import ToDo from './ToDo'



const App = () => {
  const [todo,setTodo] = useState([
    {

    id : 1,
    title:"Wake Early",
    description : "Exactly at 4am"
  },
  {

    id : 2,
    title:"code",
    description : "Atleat 6 hours"
  },
  {

    id : 3,
    title:"Sleep",
    description : "From 9pm to 4am"
  }
  

])
const [id,setId]=useState("");



const deleteTodo = (id) =>{
  setTodo(todo.filter((d)=>d.id!=id))
}

  return (
    <>
      <h1 className='text-4xl text-center pt-4 '>CRUD TODO APP</h1>
     
    <div className='w-[700px] bg-yellow-700 h-[700px]'>
    <div className='container mt-[40px]' > <h2  className='text-4xl text-center pt-4 bg-green-400 w-[22vw] ml-[15vw] pb-4'>Things To do</h2>
       
       <Form todo = {todo} setTodo={setTodo} id = {id} setId={setId
       
       }/>
       <ToDo todo = {todo} deleteTodo={deleteTodo} setId={setId}/>
       
       
       </div>
      </div>
      </>
  )

}

export default App
