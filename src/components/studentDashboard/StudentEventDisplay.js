import { useState } from "react";
// import { Counter } from "./Counter";
// import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React from "react";
import "./studentDashboard.css";

export function StudentEventDisplay({ eventname, eventposter, eventsummary, eventdate,eventstarttime,eventduration ,id, registerButton}) {
//   const styles = {
//     color: rating > 8 ? "green" : "red",
//   };
  const [show, setShow] = useState(true);
  // const paraStyle = {
  //   display: show ? "block" : "none",
  // };
  // const navigate=useNavigate();
 

  return (<Card className="movie-container" sx={{height:"min-content"}}>
    <img className="movie-poster" src={eventposter} alt={eventname} />
    <CardContent>
    <div className="movie-specs">
      <h3 className="movie-name">
        {eventname}
      {/* <IconButton aria-label="Movie Details" color="primary" onClick={()=>navigate(`/movies/${id}`)}>
        <InfoIcon />
      </IconButton>  */}
      <IconButton aria-label="Movie Details" color="primary" onClick={() => setShow(!show)}>
        {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
      </IconButton>
      </h3> 
      
    </div>
   
    {show ? <p className="movie-summary" style={{color:"blue"}}><h4 style={{color:"black"}}>Info:</h4>{eventsummary}</p> : null}
    <h4 style={{display:"inline"}}>Event Date:</h4> <span> {eventdate}</span><br/>
    <h4 style={{display:"inline"}}>Event Starts at:</h4> <span> {eventstarttime}</span><br/>
    <h4 style={{display:"inline"}}> Event duration:</h4><span> {eventduration}hrs</span>
    </CardContent>
      <CardActions>
      <div className="movie-counter-del" style={{margin:"auto"}}>
      
     {registerButton}
      </div>
      </CardActions>
    </Card>
    );
}