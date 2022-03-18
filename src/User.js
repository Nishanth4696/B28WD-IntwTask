import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';




export default function User({Fullname, Profilepic,Mobileno, Emailid, JobType,DOB, PrefLoc, deleteButton, editButton}){
    const [show, setShow] = useState(false);



const summarystyles = { display :show ? 'block' : 'none'} 
    return (
      
      <Card className="user-container">
        
          
        <img 
          src={Profilepic} 
          alt={Fullname} 
          className="user-poster"/>
        <div className="user-specs">
              <h3 className="user-name">{Fullname}

              

              <IconButton 
                  onClick ={() => setShow(!show)} 
                  className="user-show-button" 
                  aria-label="delete" 
                  color="primary">
                    {show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
              </IconButton>
                
              </h3>

             
              </div>

       
        
      

        {show ? <p   style={summarystyles} className="user"><b>&nbsp;&nbsp;&nbsp;&nbsp;Email-Id : </b>{Emailid}</p> : ""}
        {show ? <p   style={summarystyles} className="user"><b>&nbsp;&nbsp;&nbsp;&nbsp;Mobileno : </b>{Mobileno}</p> : ""}
        {show ? <p   style={summarystyles} className="user"><b>&nbsp;&nbsp;&nbsp;&nbsp;DOB : </b>{DOB}</p> : ""}
        {show ? <p   style={summarystyles} className="user"><b>&nbsp;&nbsp;&nbsp;&nbsp;JobType : </b>{JobType}</p> : ""}
         <div className="editButton">
            {editButton} {deleteButton}
        </div>
      </Card>
      
    );
  }

 