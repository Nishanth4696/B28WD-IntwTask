import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { CustomizedTables } from './Table'; 
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function AddUser({ Users,   setUsers }) {
  const [Fullname, setFullname] = useState("");
  const [Profilepic, setProfilepic] = useState("");
  const [Mobileno, setMobileno] = useState("");
  const [Emailid, setEmailid] = useState("");
  const [JobType, setJobType] = useState("");
  const [DOB, setDOB] = useState(null);
  const [PrefLoc, setPrefLoc] = useState("");
 
   

  const history = useHistory();



  const addUser = () => {

    console.log("adding");
    const newUser = {
      Fullname,
      Profilepic,
      Mobileno,
      Emailid,
      JobType,
      DOB,
      PrefLoc,
      
    };
    console.log(newUser);
    setUsers([...Users, newUser]);
    history.push("/register")

  };
console.log(PrefLoc)

  const rows = [...Users];
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
         


<LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} style={{justifyContent:'center' ,width:'430px', marginLeft:'10px'}}>
          <DesktopDatePicker
              label="DOB"
             className='datepicker'
              inputFormat="dd/mm/yyyy"
              value={DOB}
              onChange={(newValue) => setDOB(newValue)}
              renderInput={(params) => <TextField {...params} />}
              
            />
             </Stack>
    </LocalizationProvider>

    
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





      <Button onClick={addUser} variant="outlined" style={{height:'50px', width:'100px', margin:"auto"}}>Add/Update</Button>
      </div>
      </fieldset>
    </div>
    <div>
       <CustomizedTables rows={rows} />
        </div>
    
  </section>

  );
}
