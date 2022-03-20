

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { CustomizedTables } from './Table'; 
import { useFormik } from "formik";
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { API_URL } from './global-constants';

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
      .date()
      .required("why not fill tis field🎃"),
  PrefLoc:yup
      .string()
      .required("why not fill tis field🎃")
})

export function AddUser() {

  const formik = useFormik({
    initialValues: {
      Fullname:'', 
      Profilepic:'',
      Mobileno:'',
      Emailid:'',
      JobType:'',
      DOB:'',
      PrefLoc:''
    },
    // validate: validateForm,
    validationSchema: formValidationSchema,
    onSubmit: (newUser) => {
    

      console.log("onSumbit", newUser)
      addUser(newUser);
    }
  });

   


  const history = useHistory();
  
  const addUser = (newUser) => {

    console.log("adding");
    
    console.log(newUser);
    
      fetch(`${API_URL}/user`,
      {
                
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{'Content-Type':'application/json'},
      })
      .then(() => history.push("/user"))
  };

const Jobtype=[
  {
    value: 'Part Time',
    label: 'PT',
  },
  {
    value: 'Full Time',
    label: 'FT',
  },
  {
    value: 'Consultant',
    label: 'Consultant',
  },
]

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
  const [User, setUser] = useState([]);

  const getUsers = () =>{
    fetch(`${API_URL}/user`,{method:"GET"})
    .then((data) => data.json())
    .then((mvs) => setUser(mvs))
  }
  useEffect(getUsers,[])
  const rows = [...User];

  const deleteUser = (id) =>{
    fetch(`${API_URL}/user/${id}`,{ method:"DELETE" })
    .then(() => getUsers());
    
  }

 
  
 
 
 
  return (
    <section>
      
       
     
    <div >
    <fieldset style={{width:'1200px', height:'min-content'}}>
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
             inputProps={{ maxLength: 15 }}
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
             name="JobType"
             select
             style={{margin:'10px'}}
             value={formik.values.JobType}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             label='Enter the JobType'
             variant="outlined" 
             error={formik.errors.JobType && formik.touched.JobType}
             helperText={formik.errors.JobType && formik.touched.JobType && formik.errors.JobType}>
               {Jobtype.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
             </TextField>

      
        <TextField
             id="DOB"
             type='date'
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
             style={{justifyContent:'center' ,width:'580px', marginLeft:'10px', margin:"10px"}}
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
    <div>
       <CustomizedTables rows={rows} deleteUser={deleteUser}/>
        </div>
    
  </section>

  );
}

