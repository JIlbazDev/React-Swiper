import React from "react";
import { Box } from "@mui/material";
import Groupimage from "../images/SlideTwentySix/20.meio_ambiente1_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
    }}
  >
    {children}
  </Box>
);

const SlideTwentySIx = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Os diretores da Rede P. B. Lopes, Daniela e José Henrique de Souza
            Gomes, juntamente com o CEO da Scania do Brasil,Simone Montagna,
            fizeram em novembro o plantio de uma muda de ipê na área externa da
            sede da Scania, em São Bernardo do Campo (SP).
          </p>
          <p>
            Um gesto simbólico e repleto de significado para a concessionária
            que representa a marca desde 1966, desde o tempo da Irmãos Lopes,
            comandada pelo patriarca da família, José Lopez Lopez.
          </p>
        </Paragraph>
        <img src={Groupimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideTwentySIx;
