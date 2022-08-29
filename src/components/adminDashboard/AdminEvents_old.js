import React from "react";
import { EventDisplay } from "./EventDisplay";
import {useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppState";

export function AdminEvents_old() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const { getEvents,handleDelete,eventList } = useContext(AppContext)
  useEffect(() => getEvents(), []);
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
