import React from 'react'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { StudentContext } from '../Context/ContextAPI';
import { useContext } from 'react';


          const AddStudents = () => {


            
          const {fetchStudent} = useContext(StudentContext)



          const HandleStudentForm = async (e) =>{

            
              e.preventDefault();
              const Form = e.target;

              const formData = {

                  username : Form.user.value,
                  password : Form.password.value,
                  email : Form.email.value,
                  role : "user"

              }

              try {
                let response = await axios.post("http://localhost:8000/api/v1/register" , formData)
                fetchStudent();
                if(response.status == 200) {
                    toast.success(`${Form.user.value} saved successfully`)
                } else{
                  toast.error("error while saving data")
                }
              } catch (error) {

                console.log("error while saving")
              }

             
              Form.reset();
          }





  return (
    <>
    <ToastContainer position='top-right' autoClose={3000} />
     <h1 className='mt-5 grid place-content-center text-2xl text-emerald-500 font-bold '>Add Students</h1>
    <div className='grid place-content-center'>
    <div className=' bg-amber-50 mt-8 flex flex-col rounded-2xl w-2xl px-20'>
        
        <form action="submit" className='h-65' onSubmit={HandleStudentForm}>
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

export default AddStudents