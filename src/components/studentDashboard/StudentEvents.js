import React from "react";
import { StudentEventDisplay } from "./StudentEventDisplay";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./studentDashboard.css";
import { ColorButton } from "components/login/Login";
import { AppContext } from "../../contexts/AppState";



export function StudentEvents() {
  const { getEvents,eventList } = useContext(AppContext);
  const navigate = useNavigate();

    useEffect(() => getEvents(), []);

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
