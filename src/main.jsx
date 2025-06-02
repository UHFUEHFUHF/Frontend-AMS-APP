import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AdminDashboard from './Routes/AdminDashboard.jsx';
import StudentAdmin from './components/StudentAdmin.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/admin' element={<AdminDashboard/>} >
      <Route path='students' element={<StudentAdmin/>}/>
      </Route>
      
     </Routes>
    </BrowserRouter>
  </StrictMode>
);
