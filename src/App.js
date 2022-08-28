import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login.js";
import { NotFound } from "./components/pageNotFound/NotFound";
import { ForgetPassword } from "./components/forgetPassword/ForgetPassword";
import { ChangePassword } from "./components/forgetPassword/ChangePassword";
import React from "react";
import { AdminLogin } from "components/adminLogin/AdminLogin";
// import { Navbar } from 'components/navbar/Navbar';
import { MainBoard } from "./MainBoard";


export const studentdata = [
  {
    label: "All Events",
    to: "/Studentevents",
  },  
  {
    label: "Enrolled Events",
    to: "/Studentregisteredevents",
  },
  // {
  //   label: "Register new event",
  //   to: "/Studentnewevents",
  // },
];
export const admindata = [
  {
    label: "All Events",
    to: "/Adminevents",
  },
  {
    label: "Enrolled Participants",
    to: "/AdminParticipants",
  },
  {
    label: "create new event",
    to: "/Adminnewevents",
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />=
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route
          path="/Dashboard"
          element={<MainBoard flow="StudentDashboard" user="student" />}
        />
        <Route
          path="/Studentevents"
          element={<MainBoard flow="StudentEvents" user="student" />}
        />
        <Route
          path="/Studentregisteredevents"
          element={<MainBoard flow="StudentRegEvents" user="student" />}
        />
        <Route
          path="/Adminevents"
          element={<MainBoard flow="AdminEvents" user="admin" />}
        />
        <Route
          path="/AdminParticipants"
          element={<MainBoard flow="Participants" user="admin" />}
        />
        <Route
          path="/Adminnewevents"
          element={<MainBoard flow="AdminNewEvent" user="admin" />}
        />
        <Route
        path="/EditEvents/:eventid"
        element={<MainBoard flow="EditEvents" user="admin" />}
        />
         <Route
        path="/RegisterEvents/:eventid"
        element={<MainBoard flow="RegStudentForEvent" user="student" />}
        />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path="/404-Page" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404-Page" />} />
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;


