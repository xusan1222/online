import { Button, ButtonGroup, Card, CardActions, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { imgNameWomenCurveMenKids } from "../custom/Custom";
import MainCategory from "../MainCategory/MainCategory";
import './MainMenu.css'



export default function MainMenu(props) {
    
  return (
    <>
    {imgNameWomenCurveMenKids.map((item , index)=>(
      <Link to={item.to}>
        <Button>
          {item.name}
        </Button>
      </Link>
    ))}
<MainCategory datas={props.datas} />

<Grid sx={{ marginLeft: 1 }} container spacing={2}>
    {props.datas.map(items =>(items.imgSum.map((item , index)=>(
      <Grid item xs={3}>
           <Card sx={{ width: 230 }}>
        <Link to={item.to}>
             <img className="img" src={item.img} alt="img" />
             <CardActions>
               <Typography>
                 {item.sum}$
               </Typography>
             </CardActions>
        </Link>
           </Card>
         </Grid>
     ))))}
    </Grid>
    </>
  );
}
