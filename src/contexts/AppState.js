import { createContext } from 'react';
import { API } from '../global';
import React, { useState } from 'react';

const token = localStorage.getItem('token')
export const AppContext = createContext();
 

export const Appstate = (props) => {

  const [eventList, setEventList] = useState([]);
  

  const getEvents = () => {
    fetch(`${API}/admin/events`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    })
      .then((data) => data.json())
      .then((events) => setEventList(events));
  };
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