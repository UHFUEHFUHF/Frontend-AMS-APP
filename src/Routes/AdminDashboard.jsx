import React from "react";
import { Outlet, Link } from "react-router-dom"; 




const AdminDashboard = () => {



  return (
    <div className="flex">
     
      <div className="md:h-full md:w-48 bg-indigo-500 md:flex flex-col mt-16 gap-8 ml-2 rounded-2xl p-4 hidden  ">
        <h1 className="text-white font-bold text-center mb-8 text-lg">Welcome Admin!</h1>

        <div className="flex flex-col gap-4 text-white font-medium">
          <Link to="/admin/dashboard" className="flex items-center gap-2 hover:text-indigo-200 transition cursor-pointer">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L2 7v11h6v-5h4v5h6V7l-8-5z"/></svg>
            Dashboard
          </Link>

          <Link to="/admin/students" className="flex items-center gap-2 hover:text-indigo-200 transition cursor-pointer">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zM4 14a4 4 0 018 0H4z"/></svg>
            Students
          </Link>

          <Link to="/admin/teachers" className="flex items-center gap-2 hover:text-indigo-200 transition cursor-pointer">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-6 8c0-2.21 4-3.42 6-3.42S18 17.79 18 20v1H6v-1z"/></svg>
            Teachers
          </Link>
        <Link to="/admin/courses" className="flex items-center gap-2 hover:text-indigo-200 transition cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/></svg>
        Courses
        </Link>
        <Link to="/admin/addstudents" className="flex items-center gap-2 hover:text-indigo-200 transition cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
        Add Students
        </Link>

        <Link to="/admin/logout" className="flex items-center gap-2 hover:text-indigo-200 transition cursor-pointer mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
        Log out
        </Link>

        </div>
      </div>

     
      <div className="flex-1 p-6">
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminDashboard;
