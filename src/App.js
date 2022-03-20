import './App.css';
import { useState} from 'react';
import UserList from './UserList';
import { Welcome } from './Welcome';
import { AddUser } from './AddUser';
import {NotFound} from './NotFound'
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import {  EditUser } from './EditUser';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';








export default function App() {
  
  // const List_of_Users=[
  //   {
  //    "Fullname": "Shalna",
  //    "Profilepic": "",
  //    "Mobileno": "+420 255 991 3525",
  //    "Emailid": "sbradder@mlb.com",
  //    "JobType": "Consultant",
  //    "DOB": "25/03/1984",
  //    "PrefLoc": "Chennai",
  //    "id": "0"
  //   },
  //   {
  //    "Fullname": "Abie",
  //    "Profilepic": "",
  //    "Mobileno": "+47 228 583 9463",
  //    "Emailid": "abrisbane1@jimdo.com",
  //    "JobType": "Part Time",
  //    "DOB": "12/07/1990",
  //    "PrefLoc": "Chennai",
  //    "id": "1"
  //   },
  //   {
  //    "Fullname": "Johanna",
  //    "Profilepic": "",
  //    "Mobileno": "+7 525 409 6303",
  //    "Emailid": "jjoannidi2@delicious.com",
  //    "JobType": "Consultant",
  //    "DOB": "12/10/1986",
  //    "PrefLoc": "Coimbatore",
  //    "id": "2"
  //   },
  //   {
  //    "Fullname": "Fax",
  //    "Profilepic": "",
  //    "Mobileno": "+1 692 651 3855",
  //    "Emailid": "fcromwell3@dell.com",
  //    "JobType": "Part Time",
  //    "DOB": "26/04/1985",
  //    "PrefLoc": "Coimbatore",
  //    "id": "3"
  //   }
  //  ];

  
  const history = useHistory();
  const [mode, setMode] = useState("dark");


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{borderRadius: "0px", height: "100%"}}>
        <div className="App">
          
          <AppBar position="sticky">
            <Toolbar variant="dense">
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./home")}>Home</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./user")}>Users</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./register")}>Register</Button>
              
              <Button 
                startIcon ={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
                variant="text" 
                style={{marginLeft: "auto"}} 
                color="inherit" 
                onClick={() => setMode(mode ==='light'? 'dark' : 'light')}>  
              {mode==='light'? 'Dark' : 'Light'} Mode</Button>
            
            </Toolbar>
        </AppBar>
        
          <Switch>
            <Route path="/users">
              <Redirect to='/user' />
            </Route>

           

            <Route path="/user/edit/:id">
              <EditUser />
            </Route>

            

          

            <Route path="/user">
              <UserList /> 
            </Route>

            <Route path="/register">
                <AddUser />
            </Route>

         

            <Route path="/">
                <Welcome />
            </Route>

            <Route path="/**">
              <NotFound />
            </Route>
          </Switch>      
        </div>
        </Paper>
     </ThemeProvider> 
  );
}






