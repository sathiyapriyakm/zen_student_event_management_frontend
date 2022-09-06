import React, { useState } from "react";
import { StudentWebinarDisplay } from "./StudentWebinarDisplay";
import { useEffect } from "react";
import "./studentDashboard.css";
import { API } from "../../global";
import { useNavigate } from "react-router-dom";
import { ColorButton } from "components/login/Login";

const token = localStorage.getItem("token");
const email = localStorage.getItem('userEmail');


export function StudentWebinar() {
  const navigate = useNavigate();

  const [webnarList,setWebnarList]=useState(null)
  // const { getEvents,eventList,getStudentDetail,studentDetail } = useContext(AppContext);

  const getStudentWebinarList=()=>{

    
      try{
      fetch(`${API}/admin/getWebinarNotRegisterd/${email}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`, // notice the Bearer before your token
      },
      })
        .then((data)=>(data.json()))
        .then((events) => setWebnarList(events))
        .catch(error=>navigate("/"))
    }catch(err){
          console.log(err);
           navigate("/")
          };
  
  }


    useEffect(() => getStudentWebinarList(), []);
  return (webnarList?
    <div className="movie-list">
      {webnarList.map((disp) => (
        <StudentWebinarDisplay
          key={disp._id}
          eventTopic={disp.eventTopic}
          eventLecturer={disp.eventLecturer}
          eventposter={disp.eventposter}
          eventsummary={disp.eventsummary}
          eventDate={disp.eventDate}
          eventTime={disp.eventTime}
          duration={disp.duration}
          eventFees={disp.eventFees}
          id={disp._id}
          registerIcon={ <ColorButton className="reg-btn" 
          type="submit"
          variant="contained"
          onClick={() => navigate(`/RegisterWebinar/${disp._id}/${email}`)}
          >Register</ColorButton>}
          email={email}
        />
      ))}
    </div>
    : <h3>Loading....</h3>
  );
}
