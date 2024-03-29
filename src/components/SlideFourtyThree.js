import React from "react";
import { Box } from "@mui/material";
import Slidetwoimage from "../images/SlidefourtyThree/slidetwoimage1.jpg";
import manImage from "../images/SlidefourtyThree/36.noticias1_2212122.jpg";
import footerimage from "../images/SlidefourtyThree/footerimages.jpg";
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

const SlideFourtyThree = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            A partir de janeiro, o analista de sistemas da Rede P. B. Lopes,
            Ângelo Roberto Dal Col, estará oficialmente aposentado, após 33 anos
            de trabalho na Irmãos Lopes e depois na P. B. Lopes.
          </p>
        </Paragraph>
        <img src={Slidetwoimage} />
        <span style={{ padding: "20px 10px" }}>
          Paulo Adriano Rodolpho com Angelo Dal-Col
        </span>
        <Paragraph>
          <p>
            Com seu jeitão quieto, Ângelo Dal Col esteve sempre presente no dia
            a dia da empresa. Sua trajetória – que teve início nas lavouras de
            café no interior paulista até o ingresso mundo da informática - foi
            destaque na revista PBNews, em maio de 2013: “A P. B. Lopes é minha
            vida”, afirmou.
          </p>
        </Paragraph>
        <img src={manImage} />
        <Box
          sx={{
            padding: "30px 30px",
            fontSize: "24px",
            lineHeight: "1.6",
            fontWeight: "400",
            margin: "-3px 0px",
            backgroundColor: "#5a80a6",
            color: "#FFF",
          }}
        >
          <em>
            A PB agradece a Ângelo Dal Col por todos os anos dedicados à
            empresa, desejando que esta nova etapa seja repleta de descobertas e
            novos caminhos.
          </em>
        </Box>
        <img src={footerimage} style={{ margin: "40px 0px" }} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFourtyThree;
