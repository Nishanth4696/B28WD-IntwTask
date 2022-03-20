import User  from './User.js';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { API_URL } from './global-constants.js';


export default function UserList(){
  const [Users, setUsers] = useState([]);

  const getUsers = () =>{
    fetch(`${API_URL}/user`,{method:"GET"})
    .then((data) => data.json())
    .then((mvs) => setUsers(mvs))
  }
  useEffect(getUsers,[])

  const history = useHistory();

  const deleteUser = (id) =>{
    fetch(`${API_URL}/user/${id}`,{ method:"DELETE" })
    .then(() => getUsers());
    
  }
    return(
      <section className="userList">
         {Users.map(({Fullname, Profilepic,Mobileno, Emailid, JobType,DOB, PrefLoc, id}) => 
          <User 
            
            Fullname={Fullname} 
            Profilepic={Profilepic} 
            Mobileno={Mobileno} 
            Emailid={Emailid}
            JobType={JobType}           
            DOB={DOB}
            PrefLoc={PrefLoc}
            id={id}
            deleteButton={
              <IconButton 
              onClick={() =>deleteUser(id)}
                className="user-show-button"
                aria-label="delete" 
                color="error">
                  <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton 
                onClick={() =>{ history.push("/user/edit/" + id)
                 
                }} 
                style={{ marginLeft:"auto" }}
                className="user-show-button"
                  aria-label="delete" 
                  color="primary">
                    <EditIcon />
                </IconButton>
            }
            />)
          }
      </section>
    );
  }
  