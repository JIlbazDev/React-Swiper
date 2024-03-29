import React from "react";
import { Box } from "@mui/material";
import backgroundimage from "../images/slidetwentyfour/papel.jpg";
import Oldimage from "../images/slidetwentyfour/oldimage.jpg";

const SlideTwentyFour = () => {
  return (
    <Box>
      <Box className="slide-container">
        <Box className="image-container">
          <img src={backgroundimage} alt="Background" />
        </Box>
        <Box className="text-container">
          <b>Consórcio Scania</b>
        </Box>
          <Box sx={{position:'absolute'}}>
            <img src={Oldimage} />
          </Box>
      </Box>
    </Box>
  );
};

export default SlideTwentyFour;
