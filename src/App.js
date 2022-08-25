import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login.js";
import { NotFound } from "./components/pageNotFound/NotFound";
import { ForgetPassword } from "./components/forgetPassword/ForgetPassword";
import { ChangePassword } from "./components/forgetPassword/ChangePassword";
import { StudentDashboard } from "./components/studentDashboard/StudentDashboard";
import React from "react";
import { AdminLogin } from "components/adminLogin/AdminLogin";
import { AdminDashboard } from "components/adminDashboard/AdminDashboard";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import { Navbar } from 'components/navbar/Navbar';
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StudentEvents } from "components/studentDashboard/StudentEvents";
import { StudentRegEvents } from "components/studentDashboard/StudentRegEvents";
import { AdminEvents } from "components/adminDashboard/AdminEvents";
import { Participants } from "components/adminDashboard/Participants";
import { AdminNewEvent } from "components/adminDashboard/AdminNewEvent";
import { EditEvents } from "components/adminDashboard/EditEvents";
import { RegStudentForEvent } from "components/studentDashboard/RegStudentForEvent";


const studentdata = [
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
const admindata = [
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
          path="/Admindashboard"
          element={<MainBoard flow="AdminDashboard" user="admin" />}
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

function MainBoard({ flow, user }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>
        {/* <Appstate> */}
        <div id="wrapper" style={{ width: "100%" }}>
          <AppBar position="static">
            <Toolbar>
              {user === "student"
                ? studentdata.map((item, key) => (
                    <Button
                    key={key}
                      color="inherit"
                      onClick={() => navigate(`${item.to}`)}
                    >
                      {item.label}
                    </Button>
                  ))
                : admindata.map((item, key) => (
                    <Button
                      key={key}
                      color="inherit"
                      onClick={() => navigate(`${item.to}`)}
                    >
                      {item.label}
                    </Button>
                  ))}

              <Button
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
              >
                {mode === "light" ? "dark" : "light"}theme
              </Button>
              <Button
                // style={{ marginLeft: "auto" }}
                startIcon={<LogoutIcon />}
                color="inherit"
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              {/* <Navbar/> */}
              <div className="container-fluid">
                <section className="routes-container">
                  {
                    {
                      StudentDashboard: <StudentDashboard />,
                      AdminDashboard: <AdminDashboard />,
                      StudentEvents: <StudentEvents />,
                      StudentRegEvents: <StudentRegEvents />,
                      AdminEvents: <AdminEvents />,
                      Participants: <Participants />,
                      AdminNewEvent: <AdminNewEvent />,
                      EditEvents:<EditEvents/>,
                      RegStudentForEvent:<RegStudentForEvent/>,
                    }[flow]
                  }
                </section>
              </div>
            </div>
            {/* <Footer/> */}
          </div>
        </div>
        {/* </Appstate> */}
      </Paper>
    </ThemeProvider>
  );
}
