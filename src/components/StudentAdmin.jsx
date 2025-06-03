import React, { useEffect, useState } from 'react';
import axios from "axios";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { StudentContext } from '../Context/ContextAPI';



const StudentAdmin = () => {

  const {Data , fetchStudent} = useContext(StudentContext)

  const filteredUser = Data.filter(data => data.role === 'user');


  const deleteData = async (id) => {
    try {

      if(window.confirm("are you sure you want to delete data")){
     
    const res =  await axios.delete(`http://localhost:8000/api/v1/${id}`);

      if(res.status == 200){

        toast.success("Student Deleted Successfully")
      } else{
        toast.error("error in deleting student")
      }
      
      fetchStudent();
    
    }else{
      alert("Cancelled")
    }
    } catch (error) {
      console.log("Error during deletion", error);
    }
  };

  return (
    <>
   
    <ToastContainer position="top-right" autoClose={3000} />
    <div className="p-6">
        <div className='flex gap-4 justify-center pb-6 '>
            <div><img className='h-22 rounded-2xl' src="https://imgs.search.brave.com/7e9GAC_d_lCcmTDCMjpfkWrI_zK1LWCVSxl6C1s5EMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWxsLWZyZWUt/ZG93bmxvYWQuY29t/L2ltYWdlcy90aHVt/YmpwZy9zdHVkZW50/X2Rlc2lnbl9lbGVt/ZW50X2N1dGVfY2Fy/dG9vbl9naXJsXzY5/MzMyODQuanBn" alt="" /></div>
            <div className='pt-6 text-4xl font-medium text-purple-600'>Student List</div>
        </div>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full text-left border border-gray-200 bg-white">
          <thead className="bg-indigo-600 text-white text-lg">
            <tr>
              <th className="px-4 py-2 border-r">No.</th>
              <th className="px-4 py-2 border-r">Name</th>
              <th className="px-4 py-2 border-r">Email</th>
              <th className="px-4 py-2 border-r">Time</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredUser.map((data, index) => (
              <tr key={data._id} className="hover:bg-indigo-50 transition duration-200 border-t">
                <td className="px-4 py-2 border-r text-indigo-500 font-bold">{index + 1}</td>
                <td className="px-4 py-2 border-r">{data.username}</td>
                <td className="px-4 py-2 border-r">{data.email}</td>
                <td className="px-4 py-2 border-r">{data.createdAt}</td>
                <td className="px-4 py-2 text-red-600 hover:text-red-800 cursor-pointer" onClick={() => deleteData(data._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#dc2626">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default StudentAdmin;
