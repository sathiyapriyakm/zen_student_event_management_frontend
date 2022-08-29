import React from "react";
import { StudentEventDisplay } from "./StudentEventDisplay";
import { useContext, useEffect } from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { API } from "../../global";
import "./studentDashboard.css";
import { AppContext } from "../../contexts/AppState";
import { ColorButton } from "components/login/Login";


const token = localStorage.getItem('token')

export function StudentEvents() {
  const { getEvents,handleDelete,eventList } = useContext(AppContext);
  const navigate = useNavigate();

  // const getEvents = () => {
  //   fetch(`${API}/admin/events`, {
  //     method: "GET",
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Authorization': `Bearer ${token}`, // notice the Bearer before your token
  //   },
  //   })
  //     .then((data) => data.json())
  //     .then((mvs) => setEventList(mvs));
  // };
  useEffect(() => getEvents(), []);

//   const handleDelete = (deletionId) => {
//     fetch(`${API}/admin/event/${deletionId}`, {
//       method: "DELETE",
//     }).then(() => getEvents());
//   };

  return (
    <div className="movie-list">
      {eventList.map((disp, index) => (
        <StudentEventDisplay
          key={disp._id}
          eventname={disp.eventname}
          eventposter={disp.eventposter}
          eventsummary={disp.eventsummary}
          eventdate={disp.eventdate}
          eventstarttime={disp.eventstarttime}
          eventduration={disp.eventduration}
          id={disp._id}
          registerButton={
            <ColorButton className="reg-btn" 
            type="submit"
            variant="contained"
            onClick={() => navigate(`/RegisterEvents/${disp._id}`)}
            >Register</ColorButton>
          }
        />
      ))}
    </div>
  );
}
