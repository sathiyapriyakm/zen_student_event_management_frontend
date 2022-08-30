import { useState, useContext } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React from "react";
import "./studentDashboard.css";
import { ColorButton } from "components/login/Login";
import { AppContext } from "../../contexts/AppState";

import { useNavigate } from "react-router-dom";

export function StudentEventDisplay({ eventname, eventposter, eventsummary, eventdate,eventstarttime,eventduration ,id, registerButton,cancelButton}) {

  const [show, setShow] = useState(true);
  const { eventList } = useContext(AppContext);

  const navigate = useNavigate();

  

  return (<Card className="movie-container" sx={{height:"min-content"}}>
    <img className="movie-poster" src={eventposter} alt={eventname} />
    <CardContent>
    <div className="movie-specs" >
      <h3 className="movie-name">
        {eventname}

      <IconButton aria-label="Movie Details" color="primary" onClick={() => setShow(!show)}>
        {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
      </IconButton>
      </h3>  
    </div>
    {show ? <p className="movie-summary" ><h4>Info:</h4>{eventsummary}</p> : null}
    <h4 style={{display:"inline"}}>Date:</h4> <span> {eventdate}</span><br/>
    <h4 style={{display:"inline"}}>Starts time:</h4> <span> {eventstarttime}</span><br/>
    <h4 style={{display:"inline"}}>Duration:</h4><span> {eventduration}hrs</span>
    </CardContent>
      <CardActions>
      <div className="movie-counter-del" style={{margin:"auto"}}>
        <ColorButton className="reg-btn" 
        type="submit"
        variant="contained"
        onClick={() => navigate(`/RegisterEvents/${id}`)}
        >Register</ColorButton>
      </div>
      </CardActions>
    </Card>
    );
}