import React from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../../global";

  const registerValidationSchema=yup.object({
    firstName:yup.string().required("Kindly fill your First Name"),
    lastName:yup.string().required("Kindly fill your Last Name"),
    email:yup.string().email().required("Kindly fill your email"),
    contactNumber:yup.number().required("Kindly provide your contact number").min(10,"phone number is less than 10 digits").max(10,"phone number is greater than 10 digits"),
    
  })
  export function RegStudentForEvent({event}){

    const { eventid } = useParams();

  const navigate = useNavigate();

    const editParticipant =(studentDetail) => {
      fetch(`${API}/admin/eventreister/${eventid}`,
      {
        method:"PUT",
        body: JSON.stringify(studentDetail),
        headers:{"Content-Type":"application/json"},
    }).then(()=>{navigate("/Studentregisteredevents")}).catch((e)=>console.log("ERROR"));
    //  navigate("/movies");
    };

    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
      initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      contactNumber:"",
      },
      validationSchema:registerValidationSchema ,
      onSubmit:(studentDetail)=>{
        console.log("onSubmit",studentDetail);
        editParticipant(studentDetail);
      },
    });
  
  return <div
      className="add-movie-spec">
     <form onSubmit={handleSubmit}
      className="add-movie-form" >
        
        <TextField
        className="add-movie-name"
        label="First Name"
        type="text" 
        value={values.firstName} 
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName&&errors.firstName?true:false}
        helperText={touched.firstName&&errors.firstName?errors.firstName:""}
        />
        <TextField
        className="add-movie-name"
        label="Last Name"
        type="text"
        value={values.lastName} 
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName&&errors.lastName?true:false}
        helperText={touched.lastName&&errors.lastName?errors.lastName:""}
        />
       <TextField
       className="add-movie-name"
       label="Email Id"
       type="email"
       value={values.email} 
       name="email"
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.email&&errors.email?true:false}
       helperText={touched.email&&errors.email?errors.email:""}
       />
        
       <TextField
          className="add-movie-name"
          label="Contact Number"
          type="number"
          value={values.contactNumber} 
          name="contactNumber"
          onChange={handleChange}
           onBlur={handleBlur}
           error={touched.contactNumber&&errors.contactNumber?true:false}
           helperText= {touched.contactNumber&&errors.contactNumber?errors.contactNumber:""}
        />
        <Button className="add-movie-btn" 
        type="submit"
        variant="contained">REGISTER EVENT</Button>
      </form>
    </div>;
}