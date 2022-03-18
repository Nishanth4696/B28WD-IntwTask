import { useHistory, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 export function UserDetails({  Users }) {
  const { id  } = useParams();
  const history = useHistory();
  const User = Users[id];
  const styles = User.rating > 4.4 ? {color : 'teal', fontWeight: 'bold'} : {color : 'crimson', fontWeight: 'bold'};
  return (
    <div className="user-detail-container">
      <Button onClick={() => history.goBack()} className='back' variant="outlined" startIcon={<ArrowBackIcon />}> Back </Button>
      <iframe 
          width="100%" 
          height="480" 
          src={User.trailer} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
      
        <div className="user-specs">
        <h3 className="user-name">{User.name}</h3>

        <p className="user-rating" style={styles}>⭐{User.rating} </p>
        </div>

   <p className="user-breif">{User.breif}</p> 

<div className="contain">
<h3>Ingredients:</h3>

<div className="ingredients">
<p className="receipe-ingrediant1"><b>{User.ingredient01}</b>{User.ingredient1}</p> 
<p className="receipe-ingrediant2"><b>{User.ingredient02}</b>{User.ingredient2}</p> 
<p className="receipe-ingrediant3"><b>{User.ingredient03}</b>{User.ingredient3}</p> 
<p className="receipe-ingrediant4"><b>{User.ingredient04}</b>{User.ingredient4}</p> 
<p className="receipe-ingrediant5"><b>{User.ingredient05}</b>{User.ingredient5}</p> 
<p className="receipe-ingrediant6"><b>{User.ingredient06}</b>{User.ingredient6}</p> 
</div>

 
</div>

  </div>
  );
}

