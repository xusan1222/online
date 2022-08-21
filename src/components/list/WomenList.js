import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { imgNameWomenCurveMenKids } from '../custom/Custom';

export default function WomenList(props) {
 
  return (
    <div>
{imgNameWomenCurveMenKids[0].imgNameSum.map((item , index)=>(
  
             <Link to={item.to}  >
        <ListItem button key={item.name}>
      <ListItemIcon>
        </ListItemIcon>
      <ListItemText primary={item.name} />
  </ListItem>
      </Link> 
))}
      
    </div>
  )
}
