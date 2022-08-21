import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { imgNameWomenCurveMenKids } from "../custom/Custom";

export default function KidsList(props) {
  return (
    <div>
      {imgNameWomenCurveMenKids[2].imgNameSum.map((item , index)=>(
  
  <Link to={item.to}  >
<ListItem button key={item.name}>
<ListItemIcon>
</ListItemIcon>
<ListItemText primary={item.name} />
</ListItem>
</Link> 
))}
        {/* <Link to={}>
          <ListItem button key={}>
            <ListItemIcon>
        <ManIcon />
    </ListItemIcon>
            <ListItemText primary={} />
          </ListItem>
        </Link> */}
      
    </div>
  );
}
