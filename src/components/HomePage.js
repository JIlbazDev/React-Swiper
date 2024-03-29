import React from "react";
import Homepageimage from "../images/homeimiage.jpg";
import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";

const HomePage = () => {
  return (
    <Box>
      <Box>
        <SwiperSlide>
          <img className="HomePage" src={Homepageimage} />
        </SwiperSlide>
      </Box>
    </Box>
  );
};

export default HomePage;
