import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Appstate } from "./contexts/AppState";
import MiniDrawer from "./MiniDrawer";

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
         <MiniDrawer flow={flow} user={user}/>
            {/* <AppBar position="static">
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
            </AppBar> */}
            {/* <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {/* <Navbar/> */}
                {/* <div className="container-fluid">
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
              </div> */}
              {/* <Footer/> */}
            {/* </div>  */}
          </div>
          {/* </Appstate> */}
        </Paper>
      </Appstate>
    </ThemeProvider>
  );
}
