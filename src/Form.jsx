import React, { useEffect, useState } from "react";
import "./index.css";

const Form = ({ setTodo ,todo,id,setId}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e)=>{
e.preventDefault();


if(id){
  updateById(id)
  setId("");
}else{

  const obj={
    id:Math.random(),
    title,
    description,
  
  }

  setTodo([...todo,obj])
  
}
setTitle("");
setDescription("");

  }

useEffect(()=>{
  if(id){
    const updateData= todo.filter((d)=>d.id===id)
    console.log(updateData[0])
    setTitle(updateData[0].title)
    setDescription(updateData[0].description)
  }
},[id])
const updateById=(id)=>{
  let obj={
    title,
    description
  }
  setTodo((prevData)=>prevData.map((todo)=>todo.id=== id? {...todo,...obj}:todo));
}

  return (
    <>
    <form  onSubmit={handleSubmit}>
      <div className="m-7 text-center flex justify-center items-center">
        <input
          value={title} onChange={(e)=>setTitle(e.target.value)}
          className=" px-[20px] py-1 mr-4 rounded-sm"
          type="text"
          placeholder="Title"
        />
        <input
          value={description} onChange={(e)=>setDescription(e.target.value)}
          className=" px-[30px] py-1 rounded-sm"
          type="text"
          placeholder="Description"
        />
        {
          id && ( <button  className="bg-black text-white p-[6px] px-4 rounded-sm  ml-5">
          Edit
        </button>)
        }
        {
          !id && ( <button  className="bg-black text-white p-[6px] px-4 rounded-sm  ml-5">
          Add
        </button>)
        }
        
        
        
       
      </div>
      </form>
    </>
  );
};

export default Form;
