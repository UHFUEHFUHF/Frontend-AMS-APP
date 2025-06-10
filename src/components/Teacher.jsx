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


      const HandleForm = async (e) =>{
        e.preventDefault();

        const Form = e.target;

        const formData = {

            username : Form.user.value,
            password : Form.password.value,
            email : Form.email.value,
            role : "teacher"

        }
        try {

            let response = await axios.post("http://localhost:8000/api/v1/register" , formData)
               
                fetchStudent();
               Form.reset();

               if(response.status == 200){
                    toast.success("teacher saved successfully")
               } else{
                toast.error("error while saving data")
               }

               


        } catch (error) {
            console.log(error)
        }
         
            console.log(formData)

      }
      

  return (
    <> 
    <ToastContainer position='top-right' autoClose={3000} />
    <div className='flex justify-center mt-5 mb-4 '>
    <img className='h-24 rounded-2xl' src="https://imgs.search.brave.com/6l2356TnBQTAIRUDG5rcw7Tj6xkduku-teTTxmmlU1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/aGFuZC1kcmF3bi10/ZWFjaGVyLXMtZGF5/LWlsbHVzdHJhdGlv/bi1zcGFuaXNoXzIz/LTIxNDkzNjg1ODcu/anBn" alt="" />
    <p className='mt-7 ml-3 text-4xl text-green-600 font-medium'>Teacher List</p>
    </div>
    { FilteredTeacher.length != 0 ?
    
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
    </table> : <div className='text-center py-6 bg-amber-50 rounded-2xl text-3xl text-green-500'>No Data Found</div> 
 }
    <h1 className='mt-5 grid place-content-center text-2xl '>Add Teacher</h1>
    <div className='grid place-content-center'>
    <div className=' bg-amber-50 mt-8 flex flex-col rounded-2xl w-2xl px-20'>
        
        <form action="submit" className='h-65' onSubmit={HandleForm}>
            <div className='flex flex-col mt-2 gap-2'>

            <label htmlFor="text" className='ml-3 text-xl'>Name</label>
            <input name="user" type="text" spellCheck="false" required="true" className='bg-amber-200 rounded px-2' />

            </div>
             <div className='flex flex-col mt-2 gap-2'>

            <label htmlFor="text" className='ml-3 text-xl'>Password</label>
            <input name="password" type="text" spellCheck="false" required="true" className='bg-amber-200 rounded px-2' />

            </div>

             <div className='flex flex-col mt-2 gap-2'>

            <label htmlFor="text" className='ml-3 text-xl'>Email</label>
            <input name="email" type="email" spellCheck="false" required="true" className='bg-amber-200 rounded px-2' />

            </div>
            <div className='flex justify-center mt-4'>
            <button className='cursor-pointer px-8 rounded-xl bg-green-600 text-white font-bold'>Submit</button>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}


export default Teacher