import { createContext } from 'react';
import { API } from '../global';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('token')
export const AppContext = createContext();
 

export const Appstate = (props) => {

  const navigate = useNavigate()

  const [eventList, setEventList] = useState([]);
  

  // const [books, setBooks] = useState([])
  // const [newBookIssue, setNewBookIssue] = useState('')
  // const [issuedBooks, setIssuedBooks] = useState([])
  // const [existingIssue, setExistingIssue] = useState([])

  // const getBooks = async () => {
  //   try {
  //     const resp = await axios.get(
  //       'https://61ea3e657bc0550017bc6651.mockapi.io/viewbooks',
  //     )
  //     setBooks(resp.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const addBook = async (values) => {
  //   try {
  //     const response = await axios.post(
  //       'https://61ea3e657bc0550017bc6651.mockapi.io/viewbooks',
  //       values,
  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const deleteBook = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `https://61ea3e657bc0550017bc6651.mockapi.io/viewbooks/${id}`,
  //     )

  //     setBooks(books.filter((book) => book.id !== id))
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const issueBook = async (values) => {
  //   try {
  //     const response = await axios.post(
  //       'https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks',
  //       values,
  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const getIssuedBooks = async () => {
  //   try {
  //     const resp = await axios.get(
  //       'https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks',
  //     )

  //     setIssuedBooks(resp.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const updateIssuedBooks = async (values) => {
  //   try {
  //     const resp = await axios.put(
  //       `https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks/${existingIssue.id}`,
  //       values,
  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const deleteIssuedBooks = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks/${id}`,
  //     )
  //     setIssuedBooks(issuedBooks.filter((book) => book.id !== id))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleSelected = (id) => {
  //   const selectedData = books.filter((book) => book.id === id)[0]

  //   setNewBookIssue(selectedData)
  //   navigate('/issue')
  // }

  // const selectedIssuedBook = (id) => {
  //   const selectedData = issuedBooks.filter((book) => book.id === id)[0]

  //   setNewBookIssue(undefined)
  //   setExistingIssue(selectedData)
  //   navigate('/issue')
  // }
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