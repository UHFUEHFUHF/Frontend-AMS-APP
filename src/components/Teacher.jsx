import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ToastContainer } from 'react-toastify'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { StudentContext } from '../Context/ContextAPI';

 const Teacher = () => {

    const {Data , fetchStudent} = useContext(StudentContext)

    let FilteredTeacher = Data.filter(teacher => (teacher.role === 'teacher'))
    

      const HandleDelete = async (id) =>{
     try {

        if(window.confirm("are you sure ??")){
           
            let response = await axios.delete(`http://localhost:8000/api/v1/${id}`)

            if(response.status == 200){
                toast.success("data deleted successfully")
            } else{
                toast.error("error while deleting")
            }
            fetchStudent();

            } else {
                    alert("Cancelled")
                }
     }
         catch (error) {
                console.log("error while deleting teacher")
            }
      }



  return (
    <> 
    <ToastContainer position='top-right' autoClose={3000} />
    <div className='flex justify-center mt-5 mb-4 '>
    <img className='h-24 rounded-2xl' src="https://imgs.search.brave.com/6l2356TnBQTAIRUDG5rcw7Tj6xkduku-teTTxmmlU1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/aGFuZC1kcmF3bi10/ZWFjaGVyLXMtZGF5/LWlsbHVzdHJhdGlv/bi1zcGFuaXNoXzIz/LTIxNDkzNjg1ODcu/anBn" alt="" />
    <p className='mt-7 ml-3 text-4xl text-green-600 font-medium'>Teacher List</p>
    </div>
    <table className='border min-w-full font-medium'> 
        <thead className='bg-green-500 border'>
        <tr className='text-green-100 border '>
            <th className='p-2'>No.</th>
            <th className='p-2'>Teacher</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>Time</th>
            <th>Action</th>
        </tr>
        </thead>
    {
        FilteredTeacher.map((teacher , index) => 
           
               <tbody className='bg-amber-50 text-center border-blacks'>
                <tr className='border'>
                    <td className='py-2 px-2 text-green-500'>{index + 1}</td>
                    <td className='bg-amber-400 py-2 px-2 '>{teacher.username}</td>
                    <td className='py-2 px-2 '>{teacher.email}</td>
                    <td className='py-2 px-2' >{teacher.createdAt}</td>
                    <td className='cursor-pointer' onClick={() => HandleDelete(teacher._id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#dc2626">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                  </td>
                </tr>
           </tbody>
           
        )
    } 
    </table>
    </>
  )
}


export default Teacher