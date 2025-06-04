import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../Context/ContextAPI'
import { ToastContainer } from 'react-toastify'




 const Courses = () => {

    const Data = useContext(StudentContext)
    const Course = Data.CourseData.data
    
    

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <div className='flex flex-row '>
    {
      Course.map((course , index) =>
      
          <div className='grid-cols-3 gap-20 ml-10'>
            <div className=''>

            </div>
            <div className=''>
              <h1 className='text-2xl ' key={index} >{course.coursename}</h1>
            </div>
            <div className=''>
              <p className='font-mono'>{course.branch}</p>
              <p className='font-serif'>{`₹${course.coursefees}`}</p>
            </div>
          </div>
      )
    }
    
    </div>
    </>
  )
}

export default Courses
