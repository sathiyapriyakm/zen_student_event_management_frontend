import { createContext } from 'react';
import { API } from '../global';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('token');
const email = localStorage.getItem('userEmail')
export const AppContext = createContext();
 

export const Appstate = (props) => {
const navigate =useNavigate();
  const [eventList, setEventList] = useState([]);
  const [studentDetail, setStudentDetail] = useState({});
  const [userList,setUserList]=useState(null);

  const getUserParticipationDetails=()=>{
    let users=[];
    let temp;
    getEvents();
    getStudentDetail(email);
   for(let i=0;i<eventList.length;i++){
     for(let j=0;j<eventList[i].participantlist.length;j++){
       if(eventList[i].participantlist[j].studentId===studentDetail.id){
       temp={
         eventid:eventList[i]._id,
         eventname:eventList[i].eventname,
         questionlink:eventList[i].questionlink,
         studentName:eventList[i].participantlist[j].studentName,
         frontendcode:eventList[i].participantlist[j].studentCode.frontendcode,
         backendcode:eventList[i].participantlist[j].studentCode.backendcode,
         frontenddeploy:eventList[i].participantlist[j].studentCode.frontenddeploy,
         backenddeploy:eventList[i].participantlist[j].studentCode.backenddeploy,
         mark:eventList[i].participantlist[j].mark,
         comment:eventList[i].participantlist[j].comment,
       }
       users.push(temp);
       break;
     } 
     }
   }
   users.length>0? setUserList([...users]):setUserList([]);
  }


const getStudentDetail=(email)=>{
  try{
    fetch(`${API}/student/detail/${email}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        // 'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    })
      .then((data) => data.json())
      .then((detail) => setStudentDetail(detail))
      .catch(error=>navigate("/"))
  }catch(err){
        console.log(err);
         navigate("/")
        };
  };

  const getEvents = () => {
    try{
    fetch(`${API}/admin/events`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    })
      .then((data) => data.json())
      .then((events) => setEventList(events))
      .catch(error=>navigate("/"))
  }catch(err){
        console.log(err);
         navigate("/")};
  };
  
  const handleDelete = (deletionId) => {
    try{
    fetch(`${API}/admin/event/${deletionId}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    }).then(() => getEvents())
    .catch(error=>navigate("/"))
  }catch(err){
    console.log(err);
     navigate("/")
    };
  };
  
  

  return (
    <AppContext.Provider
      value={{
        eventList,
        getEvents,
        handleDelete,
        getStudentDetail,
        studentDetail,
        getUserParticipationDetails,
        userList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default Appstate