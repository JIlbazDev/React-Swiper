import React from "react";
import { Box } from "@mui/material";
import Footerimage from "../images/Slidefourtyfour/37.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";

const SlideFourtyFour = () => {
  return (
    <Box>
      <Box>
        <img src={Footerimage} />
        <Box>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideFourtyFour;
