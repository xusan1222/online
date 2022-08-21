import React from "react";
import "./Message.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Card } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import { Link } from "react-router-dom";

export default function Message() {
  return (
    <div>
      <div className="div">
        <div className="MessageHeader">
         <Link to='/' style={{color:'black'}}>
         <ArrowBackIosIcon  />
         </Link>
          <h3 className="Header">Message</h3>
          <CleaningServicesIcon />
        </div>
        <hr className="hr" />
        <div className="MessageBody">
          <div className="TopBody">
            <Card sx={{ width: 250, textAlign: "center" }}>
              <FeaturedPlayListIcon />
              <h3>Orders</h3>
              <p>
                Keep updated on the status of <br /> orders and logistics.
              </p>
            </Card>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <VolumeUpIcon />
              <h3>News</h3>
              <p>
                Be the first to know website/account <br /> updated.
              </p>
            </Card>
          </div>
          <div className="CenterBody">
            <div className="Activity">
              <div className="CenterIcons">
                  <PaidIcon fontSize="large"  />
              </div>
              <div>
              <h2>Activities</h2>
              <p>
                Get the latest information of our events and interactive games.
              </p>
              </div>
            </div>
            <div className="Activity">
              <div className="CenterIcons">
              < AssistantDirectionIcon fontSize="large"  />
              </div>
              <div>
              <h2>Promos</h2>
              <p>Don't miss out promotions!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
