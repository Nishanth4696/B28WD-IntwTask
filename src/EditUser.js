import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';


export function EditUser({ Users, setUsers }) {
    const { id } = useParams();
    const history = useHistory();
    const user = Users[id];
  const [Fullname, setFullname] = useState(user.Fullname);
  const [Profilepic, setProfilepic] = useState(user.Profilepic);
  const [Mobileno, setMobileno] = useState(user.Mobileno);
  const [Emailid, setEmailid] = useState(user.Emailid);
  const [JobType, setJobType] = useState(user.JobType);
  const [DOB, setDOB] = useState(user.DOB);
  const [PrefLoc, setPrefLoc] = useState(user.PrefLoc);
  



  const editUser = () => {

    console.log("Edited...");
    const updateUser = {
      Fullname,
      Profilepic,
      Mobileno,
      Emailid,
      JobType,
      DOB,
      PrefLoc,
      
      
    };
    
    const copy_userlist = [ ...Users ];
    copy_userlist[id] = updateUser
    setUsers(copy_userlist)
    history.push("/register")
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

    <div >
    <fieldset style={{width:'900px', height:'400px'}}>
        <legend><h3>Registration</h3></legend>
     <div className='add-user-form'> 
      
     <TextField
              value={Fullname}
              onChange={(event) => setFullname(event.target.value)}
              label='Enter the Fullname'
              id="standard-basic"
              variant="outlined" 
              style={{margin:'10px'}}/>
       
    


       
      
      <TextField
        className='add-receipe-input'
        value={Profilepic}
        onChange={(event) => setProfilepic(event.target.value)}
        label='Enter the Profilepic'
        id="standard-basic"
        variant="outlined" 
        style={{margin:'10px'}}/>

      <TextField
        value={Mobileno}
        onChange={(event) => setMobileno(event.target.value)}
        label='Enter the Mobileno'
        id="standard-basic"
        variant="outlined" 
        style={{margin:'10px'}}/>

      <TextField
        value={Emailid}
        onChange={(event) => setEmailid(event.target.value)}
        label='Enter the Emailid'
        id="standard-basic"
        variant="outlined" 
        style={{margin:'10px'}}/>

      <TextField
        value={JobType}
        onChange={(event) => setJobType(event.target.value)}
        label='Enter the JobType'
        id="standard-basic"
        variant="outlined" 
        style={{margin:'10px'}}/>
         

         <TextField
        value={DOB}
        onChange={(event) => setDOB(event.target.value)}
        label='Enter the DOB'
        id="standard-basic"
        variant="outlined" 
        style={{margin:'10px', outline:'none'}}/>


    <TextField
          id="outlined-select"
          select
          label="Enter the PrefLoc"
          value={PrefLoc}
          onChange={(event) => {setPrefLoc(event.target.value)}}
          style={{justifyContent:'center' ,width:'430px', marginLeft:'10px', margin:"10px"}}>
          
          {Preflocs.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


      <Button onClick={editUser}  variant="outlined" style={{height:'50px', width:'100px', margin:"auto"}}>Save</Button>
      </div>
      </fieldset>
    </div>

  );
}
