import React from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "../../App.css";

import { useNavigate } from 'react-router-dom'

export function NotFound() {
    const navigate=useNavigate();
  return  (<div className="NotFoundImg" 
    // style={{color:"blue",textAlign:"center",fontSize:"50px"}}
    >
    <Button onClick={() => navigate("/")}  variant="contained" startIcon={<ArrowBackIcon />} color="secondary">
    Back to Login
</Button>
    <img className="displayed" src="https://cdn.vectorstock.com/i/1000x1000/75/83/404-error-page-not-found-plug-graphic-vector-19997583.webp" alt="404 page not found"></img>  
    </div>);
}