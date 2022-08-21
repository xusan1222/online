import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { logDOM } from "@testing-library/react";

export default function ProductFocus({ name, id, cat }) {
  // console.log({name});
  // console.log('qalay dostlar');

  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [arr, setArr] = useState('');

  const handleClick = () => {
    setOpen(!open);
  };

  const Plus = () => {
    setAmount(amount + 1);
  };
  const Minus = () => {
    setAmount(amount - 1);
  };
  const cartButton = () => {
    console.log("category: ", cat);
    let url;
    cat.imgSum.map((item) => (id == item.to ? (url = item.img) : item));
    setArr({ amount: amount, imgUrl: url , sum:name.sum });
  };
  useEffect(() => {
    // console.log("oldingi", JSON.parse(localStorage.getItem("product")));
    let old = ''
    if(localStorage.getItem("product") && JSON.parse(localStorage.getItem("product")).length != 0){
      old = JSON.parse(localStorage.getItem("product"))
    }
      localStorage.setItem("product", JSON.stringify([...old , arr]))
  
  }, [arr]);
  return (
    <>
      {" "}
      <Card sx={{ width: 480, marginX: "30%", marginY: 2 }}>
        <CardActionArea>
          <CardMedia id={id} component="img" height="440" image={name.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name.sum}$
            </Typography>
            <Typography variant="h6">{name.information}</Typography>
            <div>
              <Button color="secondary" onClick={Minus}>
                -
              </Button>
              {amount}
              <Button onClick={Plus}>+</Button>
            </div>
            <Button onClick={cartButton} variant="outlined">
              {" "}
              add to basket
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
