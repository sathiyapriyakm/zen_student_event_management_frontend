import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StudentDashboard } from "./components/studentDashboard/StudentDashboard";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
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
import { Appstate } from "./contexts/AppState";
import { studentdata, admindata } from "./App";

export function MainBoard({ flow, user }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Appstate>
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
                  startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
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
                    localStorage.removeItem('token');
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
                    {{
                      StudentDashboard: <StudentDashboard />,
                      StudentEvents: <StudentEvents />,
                      StudentRegEvents: <StudentRegEvents />,
                      AdminEvents: <AdminEvents />,
                      Participants: <Participants />,
                      AdminNewEvent: <AdminNewEvent />,
                      EditEvents: <EditEvents />,
                      RegStudentForEvent: <RegStudentForEvent />
                    }[flow]}
                  </section>
                </div>
              </div>
              {/* <Footer/> */}
            </div>
          </div>
          {/* </Appstate> */}
        </Paper>
      </Appstate>
    </ThemeProvider>
  );
}
