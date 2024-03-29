import React from "react";
import { Box } from "@mui/material";
import footer from "../images/slidethertyseven/30.noticias1_12212.jpg"
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#ffc537",
    }}
  >
    {children}
  </Box>  
);

const SlideThertySeven = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Para aliviar as altas temperaturas e o clima seco, a Rede P. B.
            Lopes ofereceu sorvetes de vários sabores para todos seus
            colaboradores. A iniciativa, realizada no dia 29 de setembro, foi
            uma forma refrescante e saborosa para os funcionários de todas as
            filiais, postos de serviços e unidades de atendimento, enfrentar as
            temperaturas que chegaram perto dos 40º.
          </p>
        </Paragraph>
        <img src={footer} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertySeven;
