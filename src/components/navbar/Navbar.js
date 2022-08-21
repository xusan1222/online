import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <>
      <Box className="Navabr"  sx={{ flexGrow: 1  ,width:'100%' , padding:0}}>
        <AppBar position="static">
          <Toolbar sx={{ width: "100%" }} variant="dense">
            <Sidebar />
            <Link
              to="message"
              style={{ color: "white", padding: 0, margin: 0 }}
            >
              <MailOutlineIcon sx={{ paddingRight: 2 }} />
            </Link>
            <Link to="/">
              <Typography
                sx={{ color: "#f8f8ff" }}
                variant="h6"
                component="div"
              >
                Online shopping
              </Typography>
            </Link>
            <div style={{ marginLeft: "70vw" }} className="IconsEnd">
              <FavoriteBorderIcon sx={{  marginRight: 1 }} />
              <Link  to="/search" style={{color:'white'}}>
                <SearchIcon sx={{ marginRight: 1 }} />
              </Link>
              <Link to='/cart'  style={{color:'white'}}>
              <ShoppingCartIcon />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
