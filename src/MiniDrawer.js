import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StudentEvents } from "components/studentDashboard/StudentEvents";
import { StudentRegEvents } from "components/studentDashboard/StudentRegEvents";
import { AdminEvents } from "components/adminDashboard/AdminEvents";
import { Participants } from "components/adminDashboard/Participants";
import { AdminNewEvent } from "components/adminDashboard/AdminNewEvent";
import { EditEvents } from "components/adminDashboard/EditEvents";
import { RegStudentForEvent } from "components/studentDashboard/RegStudentForEvent";
// import { StudentDashboard } from "./components/studentDashboard/StudentDashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Appstate } from "./contexts/AppState";
import Paper from "@mui/material/Paper";
import EventIcon from "@mui/icons-material/Event";
// import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PeopleIcon from "@mui/icons-material/People";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import Icon from "@mui/material/Icon";

export const studentdata = [
  {
    label: "All Events",
    to: "/Studentevents",
    icon: "EventIcon",
  },
  {
    label: "Enrolled Events",
    to: "/Studentregisteredevents",
    icon: "EventAvailableIcon",
  },
];
export const admindata = [
  {
    label: "All Events",
    to: "/Adminevents",
    icon: "EventIcon",
  },
  {
    label: "Enrolled Participants",
    to: "/AdminParticipants",
    icon: "PeopleIcon",
  },
  {
    label: "create new event",
    to: "/Adminnewevents",
    icon: "EventRepeatIcon",
  },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function MiniDrawer({ flow, user }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Appstate>
        <Paper
          elevation={4}
          style={{ minHeight: "100vh", borderRadius: "0px",width:"100%" }}
        >
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              open={open}
              sx={{
                // background: "#5d3fd3",
                // background:"linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(165,50,138,1) 50%, rgba(170,49,132,1) 75%, rgba(192,44,105,1) 100%)",
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h3"
                  noWrap
                  component="div"
                  sx={{ 
                    fontSize:{xs:"15px",md:"24px"} , 
                    fontWeight:{xs:"300", md:"700" } 
                  }}
                  
                >
                  {user === "admin" ? "Admin DashBoard" : "Student Dashboard"}
                </Typography>
                <div style={{ marginLeft: "auto", paddingRight: "20px" }}>
                  <Button
                    startIcon={
                      mode === "dark" ? (
                        <Brightness7Icon />
                      ) : (
                        <Brightness4Icon />
                      )
                    }
                    color="inherit"
                    onClick={() => {
                      setMode(mode === "light" ? "dark" : "light");
                    }}
                    sx={{ 
                      fontSize:{xs:"10px",md:"15px"} , 
                      fontWeight:{xs:"200", md:"400" } 
                    }}
                  >
                    {mode === "light" ? "dark" : "light"}theme
                  </Button>

                  <Button
                    startIcon={<LogoutIcon />}
                    color="inherit"
                    onClick={handleLogOut}
                    sx={{ 
                      fontSize:{xs:"10px",md:"15px"} , 
                      fontWeight:{xs:"100", md:"300" } 
                    }}
                  >
                    Logout
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader
                sx={{
                  // background: "#5d3fd3",
                  // background:"linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(165,50,138,1) 50%, rgba(170,49,132,1) 75%, rgba(192,44,105,1) 100%)",
                }}
              >
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List
                sx={{
                  // background: "#5d3fd3",
                  // color: "white",
                  height: "100%",
                  // background:"linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(165,50,138,1) 50%, rgba(170,49,132,1) 75%, rgba(192,44,105,1) 100%)",
                }}
              >
                {user === "student"
                  ? studentdata.map((item, index) => (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                          onClick={() => {
                            navigate(item.to);
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                              // color: "white",
                            }}
                          >
                            {
                              {
                                EventIcon: <EventIcon />,
                                EventAvailableIcon: <EventAvailableIcon />,
                                PeopleIcon: <PeopleIcon />,
                                EventRepeatIcon: <EventRepeatIcon />,
                                Participants: <Participants />,
                              }[item.icon]
                            }
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))
                  : admindata.map((item, index) => (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                          onClick={() => {
                            navigate(item.to);
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                              // color: "white",
                            }}
                          >
                            {
                              {
                                EventIcon: <EventIcon />,
                                EventAvailableIcon: <EventAvailableIcon />,
                                PeopleIcon: <PeopleIcon />,
                                EventRepeatIcon: <EventRepeatIcon />,
                                Participants: <Participants />,
                              }[item.icon]
                            }
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
              </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3,width:"100%" }}>
              <DrawerHeader />
              <div id="content-wrapper" className="d-flex flex-column" style={{width:"100%" }}>
                <div id="content" style={{width:"100%" }}>
                  <div className="container-fluid" style={{width:"100%" }}>
                    <section className="routes-container" style={{width:"100%" }}>
                      {
                        {
                          // StudentDashboard: <StudentDashboard />,
                          StudentEvents: <StudentEvents />,
                          StudentRegEvents: <StudentRegEvents />,
                          AdminEvents: <AdminEvents />,
                          Participants: <Participants />,
                          AdminNewEvent: <AdminNewEvent />,
                          EditEvents: <EditEvents />,
                          RegStudentForEvent: <RegStudentForEvent />,
                        }[flow]
                      }
                    </section>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </Paper>
      </Appstate>
    </ThemeProvider>
  );
}
