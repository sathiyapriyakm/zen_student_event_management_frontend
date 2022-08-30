import React from 'react'
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
import { ColorButton } from '../login/Login'
export const StudentRegEvents_old = () => {
  const { getEvents,eventList } = useContext(AppContext)
  let  enrolledList=[];
  const userEmail=localStorage.getItem('userEmail');
  const getDetails=()=>{
    
  enrolledList=eventList.filter((event)=>(event.participantlist.filter((user)=>(user.email==userEmail))));
  }
  useEffect(() => getEvents(),getDetails(), []);
  
console.log(enrolledList);

// const deleteIssuedBooks=()=>{
//     console.log("deleteIssuedBooks");
// };
// const selectedIssuedBook=()=>{
//     console.log("selectedIssuedBook");
// }
  return (<>{(enrolledList.length>0)?
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead >
          <TableRow >
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Event Title</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Event Date</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Event Time</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}> Event Duration</TableCell>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"500",fontStyle:"bold"}}>Participant Mail ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {enrolledList.map((event,i)=>(
            <TableRow key={i}>
              <TableCell align="center">{event.eventname}</TableCell>
              <TableCell align="center">{event.eventdate}</TableCell>
              <TableCell align="center">{event.eventstarttime}</TableCell>
              <TableCell align="center">{event.eventduration}</TableCell>
              <TableCell align="center">{userEmail}</TableCell>
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
        </TableBody>
      </Table>
    </TableContainer> :<h2> Not registered in any events</h2>
    }
    </>
  )
}