import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {imgNameWomenCurveMenKids} from "../custom/Custom";
import CurvePlusList from '../list/CurvePlusList'
import WomenList from '../list/WomenList'
import KidsList from '../list/KidsList'
import MenList  from '../list/MenList'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabMenu(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box display="fixed" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {imgNameWomenCurveMenKids.map((item, i) => (
            <Tab sx={{fontSize:10 , padding:'0'}} label={item.name} {...a11yProps({ i })} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WomenList />
      </TabPanel>
      <TabPanel value={value} index={1}>
            <CurvePlusList />
      </TabPanel>
      <TabPanel value={value} index={2}>
            <KidsList />
      </TabPanel>
      <TabPanel value={value} index={3}>
            <MenList />
      </TabPanel>
    </Box>
  );
}
