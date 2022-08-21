import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Search.css";
// import { HotSearch } from "../custom/Custom";
import { Link } from "react-router-dom";

export default function Search() {
  // const [inp , setInp] = useState
  // function Change(e){
  //     setInp(e.target.value)
  // }
  function search(e) {
    console.log(e.target.innerText);
  }
  return (
    <div>
      <div className="Div">
        <div className="SearchHeader">
          <Link to="/">
            <ArrowBackIosIcon fontSize="" />
          </Link>
          <input className="Input" type="search" placeholder="type..." />
        </div>
        <hr />
        <div onClick={search} className="Hdiv">
          {/* {HotSearch.map((item) => (
            <div className="HotSearchs">
              <h4>{item}</h4>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
