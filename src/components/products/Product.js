import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import "./Product.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <>
      <h1> {props.category} </h1>
      <Grid sx={{ marginLeft: 1 }} container spacing={2} >
        {props.datas.map((item, i) => (
          <Grid item xs={3} id= {i+props.id}>
            <Card sx={{ width: 230 }} >
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
        ))}
      </Grid>
    </>
  );
}
