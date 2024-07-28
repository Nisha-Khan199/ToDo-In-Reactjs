import React from "react";

const ToDo = ({ todo,deleteTodo,setId }) => {
  return (
    <div className="text-black text-center mx-14 ">
    <table>
        <thead>
          <tr>
            <th className="pr-28 pl-10" scope="col">
              Title
            </th>
            <th scope="col" className="pr-28 ">
              Description
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        { todo.map((items) => {
          return (
            <>
              <tbody key={items.id}>
                <tr >
                  <td  className="pr-20 pb-2 ">{items.title}</td>
                  <td className="pr-20 pb-2">{items.description}</td>
                  <td>
                    <div className="flex pb-2">
                    <button  onClick={()=>setId(items.id)}
                    className="bg-green-700 p-[3px] px-4 mr-4 rounded-sm  ">
                    
                      Edit
                    </button>
                    <button
                  onClick={()=>deleteTodo(items.id)}   className="bg-red-700 p-[3px] px-2 rounded-sm   ">
                   
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
    </table>
    </div>
  );
};

export default ToDo;
