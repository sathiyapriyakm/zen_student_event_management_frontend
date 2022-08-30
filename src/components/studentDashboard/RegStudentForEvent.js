import React ,{useContext} from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../../global";
import {Typography} from '@mui/material';
import { ColorButton } from "components/login/Login";
import { AppContext } from "../../contexts/AppState";

const token = localStorage.getItem('token')

  const registerValidationSchema=yup.object({
    firstName:yup.string().required("Kindly fill your First Name"),
    lastName:yup.string().required("Kindly fill your Last Name"),
    email:yup.string().email().required("Kindly fill your email"),
    contactNumber:yup.number().required("Kindly provide your contact number").min(10,"phone number is less than 10 digits"),
    
  })
  export function RegStudentForEvent({event}){
    const { register,setRegister } = useContext(AppContext);

    const { eventid } = useParams();

  const navigate = useNavigate();

    const editParticipant =(studentDetail) => {
      try{
      fetch(`${API}/admin/eventreister/${eventid}`,
      {
        method:"PUT",
        body: JSON.stringify(studentDetail),headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`, // notice the Bearer before your token
      },
    }).then(()=>{
      navigate("/Studentregisteredevents")})
      .catch((e)=>console.log(e))
    }catch(err){
      console.log(err);
       navigate("/")
      };
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
  className="add-user-container">
  <div
    className="wrapper"
    style={{
      position: "relative",
      textAlign: "center",
      borderStyle: "solid",
      borderWidth: "2px",
      display: "inline-block",
    }}
  >
     <form onSubmit={handleSubmit}
      className="add-user-form" >
        <Typography
            variant="h4"
            pb={2}
            sx={{
              textAlign: "center",
            }}
          >
            Participant Details
          </Typography>
        
        <TextField
        className="add-user-name"
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
        className="add-user-name"
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
       className="add-user-name"
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
          className="add-user-name"
          label="Contact Number"
          type="text"
          value={values.contactNumber} 
          name="contactNumber"
          onChange={handleChange}
           onBlur={handleBlur}
           error={touched.contactNumber&&errors.contactNumber?true:false}
           helperText= {touched.contactNumber&&errors.contactNumber?errors.contactNumber:""}
        />
        <ColorButton className="add-user-btn" 
        type="submit"
        variant="contained">
          Register Event
          </ColorButton>
      </form>
      </div>
    </div>;
}