import { createContext } from 'react';
import { API } from '../global';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('token');
const email = localStorage.getItem('userEmail')
export const AppContext = createContext();
 

export const Appstate = (props) => {
const navigate =useNavigate();
  const [eventList, setEventList] = useState(null);
  
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default Appstate