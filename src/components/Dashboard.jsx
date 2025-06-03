import React, { useEffect } from 'react'
import { useContext } from 'react'
import { StudentContext } from '../Context/ContextAPI'




 const Dashboard = () => {
     const {Data} = useContext(StudentContext);
     const Teacher = Data.filter(teacher => teacher.role === 'teacher')
     const Student = Data.filter(student => student.role === 'user')

    


  
  return (
<>
  <div className="flex justify-left gap-20 mt-8">
  
    <div className="h-32 w-44 bg-indigo-600 rounded-2xl text-center grid place-content-center text-2xl font-semibold text-white shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
      <p className="text-lg text-gray-100">Students</p>
      <p className="text-3xl text-yellow-300 font-bold">{Student.length}</p>
    </div>

  
    <div className="h-32 w-44 bg-indigo-600 rounded-2xl text-center grid place-content-center text-2xl font-semibold text-white shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
      <p className="text-lg text-gray-100">Teachers</p>
      <p className="text-3xl text-pink-300 font-bold">{Teacher.length}</p>
    </div>

   
    <div className="h-32 w-44 bg-indigo-600 rounded-2xl text-center grid place-content-center text-2xl font-semibold text-white shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
      <p className="text-lg text-gray-100">Courses</p>
      <p className="text-3xl text-green-300 font-bold">{}</p>
    </div>
  </div>
</>

  )
}

export default Dashboard
