import React from "react";
import { StudentEventDisplay } from "./StudentEventDisplay";
import { useContext, useEffect } from "react";
import "./studentDashboard.css";
import { AppContext } from "../../contexts/AppState";



export function StudentEvents() {
  const { getEvents,eventList } = useContext(AppContext);

    useEffect(() => getEvents(), []);

  return (
    <div className="movie-list">
      {eventList.map((disp) => (
        <StudentEventDisplay
          key={disp._id}
          eventname={disp.eventname}
          eventposter={disp.eventposter}
          eventsummary={disp.eventsummary}
          eventdate={disp.eventdate}
          eventstarttime={disp.eventstarttime}
          eventduration={disp.eventduration}
          id={disp._id}
        />
      ))}
    </div>
  );
}
