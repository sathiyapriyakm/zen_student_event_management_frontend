import {
    Typography,
    Button,
    
  } from '@mui/material'
  
  import React from 'react'
  import { useFormik } from 'formik'
  import * as Yup from "yup";
  
  import TextField from '@mui/material/TextField'
  import { useNavigate } from 'react-router-dom'
  import { API } from '../../global';
  import { useState } from 'react';
  import {Link} from 'react-router-dom';
  import "../../App.css";
  
  
  export function Register() {
    
    const navigate=useNavigate();
    const[errorMsg,setErrorMsg]=useState("");
    const login=()=>navigate("/Login");
  
    const regUser =(newUser) => {
      fetch(`${API}/signup`,{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type" : "application/json",
      },
    }).then((data)=>data.json())
    .then((data1)=>{
        if(data1.message==="successful Signup"){
            login();}
        else {
            setErrorMsg(data1.message);
        }
    });
    

    };
    const initialValues = {
      UserName: '',
      Email: '',
      Password: '',
    }
    const userValidationSchema = Yup.object({
        UserName: Yup.string().required('Required'),
        Email: Yup.string().email("Must be a valid email").required('Required'),
        Password: Yup.string().required('Required').min(8),
    })
    
    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
      initialValues:initialValues,
      validationSchema:userValidationSchema ,
      onSubmit:(newUser)=>{
        console.log("onSubmit",newUser);
        regUser(newUser);
      },
    });
    
    return <div className="add-user-container">
           
    <form  
    onSubmit={handleSubmit}
    className="add-user-form" >
      <Typography variant="h4" pb={2}
    sx={{
      textAlign: 'center',
    }}>
     Register User
    </Typography>
      
      <TextField
      className="add-user-name"
      label="User Name"
      type="text"
      value={values.UserName} 
      name="UserName"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.UserName&&errors.UserName?true:false}
      helperText={touched.UserName&&errors.UserName?errors.UserName:""}
      />
      <TextField
      className="add-user-name"
      label="Email ID"
      type="Email"
      value={values.Email} 
      name="Email"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.Email&&errors.Email?true:false}
      helperText={touched.Email&&errors.Email?errors.Email:""}
      />
      <TextField
      className="add-user-name"
      label="Password"
      type="password"
      value={values.Password} 
      name="Password"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.Password&&errors.Password?true:false}
      helperText={touched.Password&&errors.Password?errors.Password:""}
      />
       <Button className="add-user-btn" 
        color="primary"
      type="submit"
      variant="contained">SignUp</Button>
      <div className="text-center" style={{color:"red"}}>
    {errorMsg}
    </div>
    <div className="text-center" style={{color:"blue"}}>
      <Link to="/Login">Login!</Link>
      <br/>
      <br/>
     <Link to="/ForgetPassword">Forget Password?</Link>
    </div>
    </form> 
  </div>;
  }
  
  