import React, { useState } from "react";
import { StudentEventDisplay } from "./StudentEventDisplay";
import { useContext, useEffect } from "react";
import "./studentDashboard.css";
import { AppContext } from "../../contexts/AppState";
import { API } from "../../global";
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("token");
const email = localStorage.getItem('userEmail');


export function StudentEvents() {
  const navigate = useNavigate();

  const [nonPartList,setNonPartList]=useState(null)
  // const { getEvents,eventList,getStudentDetail,studentDetail } = useContext(AppContext);

  const getEventsNotParticipated=()=>{

    
      try{
      fetch(`${API}/admin/events/${email}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`, // notice the Bearer before your token
      },
      })
        .then((data) => data.json())
        .then((events) => setNonPartList(events))
        .catch(error=>navigate("/"))
    }catch(err){
          console.log(err);
           navigate("/")
          };
  
  }


    useEffect(() => getEventsNotParticipated(), []);
  return (nonPartList?
    <div className="movie-list">
      {nonPartList.map((disp) => (
        <StudentEventDisplay
          key={disp._id}
          eventname={disp.eventname}
          eventposter={disp.eventposter}
          eventsummary={disp.eventsummary}
          eventenddate={disp.eventenddate}
          id={disp._id}
          email={email}
        />
      ))}
    </div>
    : <h3>Loading....</h3>
  );
}
