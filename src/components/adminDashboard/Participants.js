import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@mui/material'
import {useContext} from "react";
import {AppContext} from '../../contexts/AppState'
import { ColorButton } from '../login/Login'
export const Participants = () => {
  const { getEvents,eventList } = useContext(AppContext)
  useEffect(() => getEvents(), []);
// const deleteIssuedBooks=()=>{
//     console.log("deleteIssuedBooks");
// };
// const selectedIssuedBook=()=>{
//     console.log("selectedIssuedBook");
// }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead >
          <TableRow >
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Event Title</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Participant First Name</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Participant Last Name</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Participant Mail ID</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Participant contact Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventList.map((event)=>(
              <>
             {event.participantlist.map((student,index)=>(
            <TableRow key={index}>
              <TableCell align="center">{event.eventname}</TableCell>
              <TableCell align="center">{student.firstName}</TableCell>
              <TableCell align="center">{student.lastName}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              <TableCell align="center">{student.contactNumber}</TableCell>
              {/* <TableCell align="center">
                <ColorButton
                  variant="contained"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={(e) => selectedIssuedBook()}
                >
                  Edit
                </ColorButton>
                <ColorButton
                  variant="contained"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={(e) => deleteIssuedBooks()}
                >
                  Delete
                </ColorButton>
              </TableCell> */}
            </TableRow>))}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}