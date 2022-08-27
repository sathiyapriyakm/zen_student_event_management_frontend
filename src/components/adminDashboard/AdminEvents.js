import React from "react";
import { EventDisplay } from "./EventDisplay";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { API } from "../../global";
import "./adminDashboard.css";

export function AdminEvents() {
  const [eventList, setEventList] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const getEvents = () => {
    fetch(`${API}/admin/events`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    })
      .then((data) => data.json())
      .then((mvs) => setEventList(mvs));
  };
  useEffect(() => getEvents(), []);

  const handleDelete = (deletionId) => {
    fetch(`${API}/admin/event/${deletionId}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    }).then(() => getEvents());
  };

  return (
    <div className="movie-list">
      {eventList.map((disp, index) => (
        <EventDisplay
          key={disp._id}
          eventname={disp.eventname}
          eventposter={disp.eventposter}
          eventsummary={disp.eventsummary}
          eventdate={disp.eventdate}
          eventstarttime={disp.eventstarttime}
          eventduration={disp.eventduration}
          id={disp._id}
          eventList={eventList}
          setEventList={setEventList}
          deleteButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              aria-label="Movie-delete-button"
              color="error"
              onClick={() => handleDelete(disp._id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              aria-label="Movie-edit-button"
              color="secondary"
              onClick={() => navigate(`/EditEvents/${disp._id}`)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
