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
import "./adminDashboard.css";

export function EventDisplay({ eventname, eventposter, eventsummary, eventdate,eventstarttime,eventduration ,id, deleteButton,editButton}) {
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
      {/* <p style={styles} className="movie-rating">
        ⭐{rating}</p> */}
    </div>
    {/* Conditional styling */}
    {/* <p style={paraStyle} className="movie-summary">{summary}</p> */}

    {/*Conditional rendering  */}
    {show ? <p className="movie-summary"><h4>Info:</h4>{eventsummary}</p> : null}
    <h4 style={{display:"inline"}}>Event Date:</h4> <span> {eventdate}</span><br/>
    <h4 style={{display:"inline"}}>Event Starts at:</h4> <span> {eventstarttime}</span><br/>
    <h4 style={{display:"inline"}}> Event duration:</h4><span> {eventduration}hrs</span>
    </CardContent>
      <CardActions>
      <div className="movie-counter-del">
       {/* <Counter /> */}
     {deleteButton}
     {editButton}
      </div>
      </CardActions>
    </Card>
    );
}