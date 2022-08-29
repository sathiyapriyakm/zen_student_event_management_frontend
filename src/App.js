import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login.js";
import { NotFound } from "./components/pageNotFound/NotFound";
import { ForgetPassword } from "./components/forgetPassword/ForgetPassword";
import { ChangePassword } from "./components/forgetPassword/ChangePassword";
import React from "react";
import { AdminLogin } from "components/adminLogin/AdminLogin";
import {MiniDrawer} from "./MiniDrawer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />=
        <Route path="/Adminlogin" element={<AdminLogin />} />
        
        <Route
          path="/Studentevents"
          element={<MiniDrawer flow="StudentEvents" user="student" />}
        />
        <Route
          path="/Studentregisteredevents"
          element={<MiniDrawer flow="StudentRegEvents" user="student" />}
        />
        <Route
          path="/Adminevents"
          element={<MiniDrawer flow="AdminEvents" user="admin" />}
        />
        <Route
          path="/AdminParticipants"
          element={<MiniDrawer flow="Participants" user="admin" />}
        />
        <Route
          path="/Adminnewevents"
          element={<MiniDrawer flow="AdminNewEvent" user="admin" />}
        />
        <Route
        path="/EditEvents/:eventid"
        element={<MiniDrawer flow="EditEvents" user="admin" />}
        />
         <Route
        path="/RegisterEvents/:eventid"
        element={<MiniDrawer flow="RegStudentForEvent" user="student" />}
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


