import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../../global";


export function EditEvents() {
  const { eventid } = useParams();
  const [event,setEvent]=useState(null);
  const getEvent=()=>{
    fetch(`${API}/admin/event/${eventid}`,{
      method:"GET",
    }
    )
    .then((data)=>(data.json()))
    .then((mv)=>setEvent(mv));
    }   
  useEffect(()=>getEvent(),[]);

  return (event?<EditForm event={event}/>:<h3>Loading...</h3>);
  }
  const eventValidationSchema=yup.object({
    eventname:yup.string().required("Kindly fill the Event Name input field"),
    eventposter:yup.string().required("Kindly fill Event Poster input field").min(5,"Need a bigger poster"),
    eventsummary:yup.string().required("Kindly give some input about the event").min(20,"Need a bigger summary"),
    eventdate:yup.date().required("Kindly provide event Date"),
    eventstarttime:yup.string().required("Kindly fill the event start time"),
    eventduration:yup.number().required("Kindly fill the event duration"),
  })
  

  function EditForm({event}){

  const navigate = useNavigate();

    const editEvent =(updatedEvent) => {
      fetch(`${API}/admin/event/${event._id}`,
      {
        method:"PUT",
        body: JSON.stringify(updatedEvent),
        headers:{"Content-Type":"application/json"},
    }).then(()=>{navigate("/Adminevents")}).catch((e)=>console.log("ERROR"));
    //  navigate("/movies");
    };

    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
      initialValues:{
        eventname:event.eventname,
      eventposter:event.eventposter,
      eventsummary:event.eventsummary,
      eventdate:event.eventdate,
      eventstarttime:event.eventstarttime,
      eventduration:event.eventduration,
      },
      validationSchema:eventValidationSchema ,
      onSubmit:(updatedEvent)=>{
        console.log("onSubmit",updatedEvent);
        editEvent(updatedEvent);
      },
    });
  
  return <div
      className="add-movie-spec">
     <form onSubmit={handleSubmit}
      className="add-movie-form" >
        
        <TextField
        className="add-movie-name"
        label="Event Name"
        type="text" 
        value={values.eventname} 
        name="eventname"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.eventname&&errors.eventname?true:false}
        helperText={touched.eventname&&errors.eventname?errors.eventname:""}
        />
        <TextField
        className="add-movie-name"
        label="Event Poster"
        type="text"
        value={values.eventposter} 
        name="eventposter"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.eventposter&&errors.eventposter?true:false}
        helperText={touched.eventposter&&errors.eventposter?errors.eventposter:""}
        />
       <TextField
       className="add-movie-name"
       label="About event"
       type="text"
       value={values.eventsummary} 
       name="eventsummary"
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.eventsummary&&errors.eventsummary?true:false}
       helperText={touched.eventsummary&&errors.eventsummary?errors.eventsummary:""}
       />
        
       <TextField
          className="add-movie-name"
          label="Event Date"
          type="date"
          value={values.eventdate} 
          name="eventdate"
          onChange={handleChange}
           onBlur={handleBlur}
           error={touched.eventdate&&errors.eventdate?true:false}
           helperText= {touched.eventdate&&errors.eventdate?errors.eventdate:""}
           focused
        />
       <TextField
          className="add-movie-name"
          label="Event start time"
          type="text"
          value={values.eventstarttime} 
          name="eventstarttime"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.eventstarttime&&errors.eventstarttime?true:false}
          helperText= {touched.eventstarttime&&errors.eventstarttime?errors.eventstarttime:""}
          focused
        />

       <TextField
          className="add-movie-name"
          label="Event duration in hrs"
          type="text"
          value={values.eventduration} 
          name="eventduration"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.eventduration&&errors.eventduration?true:false}
          helperText= {touched.eventduration&&errors.eventduration?errors.eventduration:""}
        />
        
        <Button className="add-movie-btn" 
        type="submit"
        variant="contained">EDIT EVENT</Button>
      </form>
    </div>;
}