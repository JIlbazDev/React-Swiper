import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/SlideFourtyTwo/35.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#b8d2d6",
    }}
  >
    {children}
  </Box>
);

const SlideFourtyTwo = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Um adeus especial a Eloize de Moura Modesto, colaboradora da P. B.
            Lopes Regente Feijó (SP) que partiu prematuramente em setembro. Ela
            será lembrada por todos por sua doçura e alegria.
          </p>
          <em>
            <b style={{ color: "#5a7174", fontSize: "20px" }}>
              “Uma pessoa muito dedicada, prestativa e amada por todos os
              colaboradores e clientes. Deixa muita saudade”
            </b>
          </em>
        </Paragraph>
        <img src={footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFourtyTwo;
