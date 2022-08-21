import React from "react";
import "./MainCategory.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainCategory(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log('')
  return (
    <Box sx={{maxWidth: { xs: 320, sm: 480 },bgcolor: "background.paper", margin: "auto",}}>
      <Tabs 
        // value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >



        {props.datas.map((item) => (
          <Link  to={item.to}>
        <Tab sx={{color:'black'}} label={item.name} icon={<Avatar sx={{ width: 70, height: 70 }} src={item.avatar} />} />
          </Link>
        ))}
      </Tabs>
    </Box>
  );
}
