import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AdminDashboard from './Routes/AdminDashboard.jsx';
import StudentAdmin from './components/StudentAdmin.jsx';
import Courses from "./components/Courses.jsx"
import AddStudents from "./components/AddStudents.jsx"
import Teacher from './components/Teacher.jsx';
import Dashboard from './components/Dashboard.jsx';
import { StudentProvider } from './Context/ContextAPI.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StudentProvider>
     <Routes>
      <Route path='/' element={<App/>} />

      <Route path='/admin' element={ <AdminDashboard/>}>
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='students' element={<StudentAdmin/>}/>
      <Route path='courses' element={<Courses/>} />
      <Route path='addstudents' element={<AddStudents/>} />
      <Route path='teachers'  element={<Teacher/>}/>
      
      </Route>
      
     </Routes>
     </StudentProvider>
    </BrowserRouter>
  </StrictMode>
);
