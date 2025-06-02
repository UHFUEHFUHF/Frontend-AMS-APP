import React, { useEffect, useState } from 'react'
import axios from "axios"

 const Teacher = () => {
    const [Students , setStudents] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/v1")
        .then(res => setStudents(res.data) )
    },[])


  return (
    <> 
    <table> 
        
        <tr>
            <th>No.</th>
            <th>Username</th>
            <th>Email</th>
            <th>Time</th>
        </tr>
    {
        Students.map((student , index) => 
           
               
                <tr>
                    <td>{index}</td>
                    <td className='bg-amber-400 '>{student.username}</td>
                    <td>{student.email}</td>
                    <td>{student.createdAt}</td>
                </tr>
           
           
        )
    } 
    </table>
    </>
  )
}


export default Teacher