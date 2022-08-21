import React, { useEffect } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea
} from "@mui/material";

export default function Cartt() {
  // JSON.parse(localStorage.getItem('product')).map(item =>(
  //   ))
    // console.log( 'kop' ,item.sum * item.amount)
  //   useEffect(() => {
  // }, []);
  return (
    <div>
      {
   JSON.parse(localStorage.getItem('product')).map(item =>(
    <Card sx={{ width: 480, marginX: "30%", marginY: 2 }} >
    <CardActionArea>
      <CardMedia  component="img" height="440" image={item.imgUrl} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Soni : {item.amount} <br />
          narxi:{item.sum *item.amount}
        </Typography>
        
        <Button  variant="outlined"> remove</Button>
      </CardContent>
    </CardActionArea>
  </Card>
     
     ))
      }
      
    </div>
  )
}
