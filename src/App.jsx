import { useState } from 'react'
import './App.css'
import Teacher from './components/Teacher'
import AdminDashboard from './Routes/AdminDashboard'
import StudentAdmin from './components/StudentAdmin'
import { ToastContainer } from 'react-toastify'

function App() {
 

  return (
    <>
   <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
