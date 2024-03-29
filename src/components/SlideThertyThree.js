import React from "react";
import { Box } from "@mui/material";
import image from "../images/SlideThertyThree/26.noticias1_1.jpg";
import footer from "../images/SlideThertyThree/26.noticias1_221212.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#eee",
    }}
  >
    {children}
  </Box>
);

const SlideThertyThree = () => {
  return (
    <Box>
      <Box>
        <img src={image} />
      </Box>
      <Box>
        <Paragraph>
          <p>
            A Scania reuniu toda a sua força de vendas de peças e serviços, no
            Tauá Hotel & Convertion Atibaia, para abordar estratégias, trocar
            experiências e apresentar o lançamento de novos produtos, como o
            Scania Pro, além de sortimento de peças, conectividade e o Scania
            Super.
          </p>
          <p>
            Colaboradores de toda a rede de concessionárias no Brasil
            participaram da convenção de vendas, realizada entre os dias 11 e 15
            de setembro, na cidade de Atibaia (SP). Entre eles estava o
            supervisor de pós venda da P. B. Lopes Maringá,{" "}
            <mark>Josimar Getulio Moreira Junior</mark> , que aprovou a
            iniciativa:
          </p>
          <p>
            “Achei muito importante para área de serviços, pois alinhou a equipe
            sobre os lançamentos. O evento motiva toda equipe, proporciona
            entrosamento entre as partes, coloca todo mundo na mesma vibe.
          </p>
        </Paragraph>
        <img src={footer} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertyThree;
