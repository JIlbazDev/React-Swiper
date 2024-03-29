import React from "react";
import { Box } from "@mui/material";
import Footerimage from "../images/slideeighteen/eight.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#ebe0c6",
    }}
  >
    {children}
  </Box>
);

const SlideEighteen = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            O caminhão Scania já protagonizou casamento, foi tema de festa de
            aniversário e recentemente se fez presente no Chá Revelação do bebê
            do casal Kimberly D'Arc Aleixo de Andrade Rissati e Rafael Agenor
            Rissati, funcionários da Transpanorama, empresa do G10, de Maringá
            (PR).
          </p>

          <p>
            A festa foi em setembro. Destaque para os caminhões azul e rosa
            presentes no momento da revelação. O buzinaço e a fumaça rosa
            anunciaram que a Laura vai chegar em abril de 2024, para a
            felicidade de todos.
          </p>
        </Paragraph>
        <img src={Footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideEighteen;
