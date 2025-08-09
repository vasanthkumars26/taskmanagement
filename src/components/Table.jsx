import React from 'react'
import { useNavigate } from 'react-router-dom';

const Table = ({tableData,handleEdit,handleDelete,checked,handlechecked}) => {
    
  return (
    <div className='text-center justify-items-center'>
        <table className='border border-gray-300 bg-yellow-500 w-[70%] mt-10 mb-20'>
            <thead>
                <tr>
                    <th className='border p-3'>TO-DO</th>
                    <th className='border '>STATUS</th>
                    <th className='border '>ACTIONS</th>

                </tr>
            </thead>
            <tbody  >{tableData.map((data,idx)=>{
                return(
                    <tr key={idx} style={{backgroundColor:data.completed ?"green":"red"}}>
                        <td className='items-center border'>{data.task}</td>
                            <td className='items-center border'><input type="checkbox" onChange={()=>handlechecked(idx)} checked={data.completed} className='p-5'/> <span  >{data.completed? "Completed😉" : "Incomplete😒"} </span></td>
                        <td className='p-1 border' >
                            <button className='p-2 items-center py-0.5 m-2 rounded-lg bg-blue-400 text-white' onClick={()=>{
                                handleEdit(idx)
                            }} >Edit</button>
                            <button className='p-2 items-center py-0.5 rounded-lg m-2 bg-gray-300 text-red-600' onClick={()=>{
                                handleDelete(idx)
                            }} >Delete</button>   
                        </td> 
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Table