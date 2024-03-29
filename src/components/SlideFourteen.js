import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/slidefourteen/footerimage.jpg";
import SocialMedia from "../components/SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      backgroundColor: "#e4eaf3",
      margin: "-3px 0px",
    }}
  >
    {children}
  </Box>
);

const SlideFourteen = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Um dos clientes mais estimados da P. B. Lopes Londrina (PR), a Ebmac
            comemorou 20 anos de atividade em sua sede em Cambé (PR), com uma
            programação que incluiu palestra sobre tecnologias embarcadas nos
            novos caminhões Scania e uma competição saudável entre os gerentes
            da transportadora.
          </p>
          <p>
            A celebração incluiu um almoço, momento em que a P. B. Lopes
            entregou uma placa alusiva à história e à parceria de tantos anos.
            Na foto, William Zucolote, Felipe Haas, Pedro Henrique Gomes, Jean
            Carlos Tobias e Gentil Luciano Pereira
          </p>
        </Paragraph>
      </Box>
      <Box>
        <img src={footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFourteen;
