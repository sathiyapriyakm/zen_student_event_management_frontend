import {Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import { Register } from './components/register/Register';
import { Login } from './components/login/Login.js';
import { NotFound } from './components/pageNotFound/NotFound';
import { ForgetPassword } from './components/forgetPassword/ForgetPassword';
import { ChangePassword } from './components/forgetPassword/ChangePassword';
import { StudentDashboard }  from './components/studentDashboard/StudentDashboard';
import React from 'react';
import { AdminLogin } from 'components/adminLogin/AdminLogin';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Register" element={<Register/>}/>  
      <Route path="/Login" element={<Login/>}/>=
      <Route path="/Adminlogin" element={<AdminLogin/>}/>
      <Route path="/Dashboard" element={<StudentDashboard/>}/>
      <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
      <Route path="/" element={<Navigate replace to="/Login"/>}/>
      <Route path="/404-Page" element={<NotFound/>}/>
      <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
      <Route path="/reset-password/:id/:token" element={<ChangePassword/>} />
      </Routes>      
    </div>
  );
}

export default App;

