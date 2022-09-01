import {
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React,{useState} from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect } from 'react'
import {useContext} from "react";
import {AppContext} from '../../contexts/AppState'
import { ColorButton } from '../login/Login';
import { useNavigate } from 'react-router-dom'

export const Participants = () => {
  const navigate=useNavigate();
  const { getEvents,eventList } = useContext(AppContext);

  useEffect(() => getEvents(), []);
  return (eventList?
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead >
          <TableRow >
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Event Title</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Participant Mail ID</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>code Details</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Marks</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Comments</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Evaluvation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventList.map((event)=>(
              <>
             {event.participantlist.map((student,index)=>(
            <TableRow key={index}>
              <TableCell align="center">{event.eventname}</TableCell>
              <TableCell align="center">{student.studentEmail}</TableCell>
              <TableCell align="center">
              <IconButton
                        aria-label="Event Details"
                        color="success"
                        onClick={() => navigate(`/code/${event._id}/${student.studentId}`)}
                      >
                        <InfoIcon />
                      </IconButton>
              </TableCell>
              <TableCell align="center">{student.mark}</TableCell>
              <TableCell align="center">{student.comment}</TableCell>
              <TableCell align="center">
              <ColorButton
                  variant="contained"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={() => navigate(`/evaluvate/${event._id}/${student.studentId}`)}
                > Evaluvate
                </ColorButton>
              </TableCell>
            </TableRow>))}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : <h3>Loading.......</h3>
  )
}

