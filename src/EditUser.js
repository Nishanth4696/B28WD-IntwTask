import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import MenuItem from '@mui/material/MenuItem';
import * as yup from 'yup';
import { API_URL } from './global-constants.js';

const formValidationSchema= yup.object({
  Fullname:yup
  .string()
  .required(),
Mobileno:yup
  .number()
  .required("why not fill this field🎃"),
Emailid:yup
  .string()
  .email()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"please enter valid email")
  .required("why not fill tis field🎃"),
JobType:yup
  .string()
  .required("why not fill tis field🎃"),
DOB:yup
  .string()
  .required("why not fill tis field🎃"),
PrefLoc:yup
  .string()
  .required("why not fill tis field🎃")
})


export function EditUser() {
  const { id } = useParams();
    
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/user/${id}`,{method:"GET"})
    .then((data) => data.json())
    .then((mv) => setUser(mv))
    
  },[id])
 
return user ? <UpdateUser user={user}  /> : " ";
 
}

function UpdateUser({user}){
  
  const formik = useFormik({
    initialValues: {
      Fullname: user.Fullname,
      Profilepic: user.Profilepic,
      Mobileno: user.Mobileno,
      Emailid: user.Emailid,
      JobType: user.JobType,
      DOB: user.DOB,
      PrefLoc: user.PrefLoc
    },
    

    // validate: validateForm,
    validationSchema: formValidationSchema,
    onSubmit: (updateUser) => {
      console.log("onSumbit", updateUser)
      editUser(updateUser);
    }
  });
  
  
  const history = useHistory();
  const editUser = (updateUser) => {

    
    
    
    fetch(`${API_URL}/user/${user.id}`,
    {
      method:"PUT",
      body:JSON.stringify(updateUser),
      headers:{'Content-Type':'application/json'},
    }).then(() => history.push("/user"))
    

  
  };

  const Preflocs = [
    {
      value: 'Chennai',
      label: 'Chennai',
    },
    {
      value: 'Coimbatore',
      label: 'Coimbatore',
    },
    {
      value: 'Bengaluru',
      label: 'Bengaluru',
    },
    {
      value: 'Pune',
      label: 'Pune',
    },
  ]; 

  return (
      <section>
      
       
     
      <div >
      <fieldset style={{width:'900px', height:'min-content'}}>
          <legend><h3>Registration</h3></legend>
          <form  onSubmit={formik.handleSubmit} className='add-user-form'>
  
          
            <TextField
               id="outlined-error-helper-text"
               name="Fullname"
               value={formik.values.Fullname}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               label='Enter the Fullname'
               style={{margin:'10px'}}
               variant="outlined" 
               error={formik.errors.Fullname && formik.touched.Fullname}
               helperText={formik.errors.Fullname && formik.touched.Fullname && formik.errors.Fullname}/>
  
            <TextField
               id="Profilepic"
               name="Profilepic"
               style={{margin:'10px'}}
               value={formik.values.Profilepic}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               label='Enter the Profilepic'
               variant="outlined" 
               error={formik.errors.Profilepic && formik.touched.Profilepic}
               helperText={formik.errors.Profilepic && formik.touched.Profilepic && formik.errors.Profilepic}/>
  
  
            <TextField
               id="Mobileno"
               name="Mobileno"
               style={{margin:'10px'}}
               value={formik.values.Mobileno}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               label='Enter the Mobileno'
               variant="outlined" 
               error={formik.errors.Mobileno && formik.touched.Mobileno}
               helperText={formik.errors.Mobileno && formik.touched.Mobileno && formik.errors.Mobileno}/>
         
      
         <TextField
               id="Emailid"
               name="Emailid"
               style={{margin:'10px'}}
               value={formik.values.Emailid}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               label='Enter the Emailid'
               variant="outlined" 
               error={formik.errors.Emailid && formik.touched.Emailid}
               helperText={formik.errors.Emailid && formik.touched.Emailid && formik.errors.Emailid}/>
  
            <TextField
               id="JobType"
               style={{margin:'10px'}}
               value={formik.values.JobType}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               label='Enter the JobType'
               variant="outlined" 
               error={formik.errors.JobType && formik.touched.JobType}
               helperText={formik.errors.JobType && formik.touched.JobType && formik.errors.JobType}/>
  
        
          <TextField
               id="DOB"
               
               style={{margin:'10px'}}
               value={formik.values.DOB}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               focused label='Enter the DOB'
               variant="outlined" 
               error={formik.errors.DOB && formik.touched.DOB}
               helperText={formik.errors.DOB && formik.touched.DOB && formik.errors.DOB}/>
  
  
            <TextField
               id="PrefLoc"
               name="PrefLoc"
               select
               style={{justifyContent:'center' ,width:'430px', marginLeft:'10px', margin:"10px"}}
               value={formik.values.PrefLoc}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                label='Enter the PrefLoc'
               variant="outlined" 
               error={formik.errors.PrefLoc && formik.touched.PrefLoc}
               helperText={formik.errors.PrefLoc && formik.touched.PrefLoc && formik.errors.PrefLoc}>
                  
                  {Preflocs.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                 </TextField>
     <Button type="submit" variant="outlined" style={{height:'50px', width:'100px', margin:"auto"}}>Add/Update</Button>
        </form>
        </fieldset>
      </div>
      </section>
  );
}