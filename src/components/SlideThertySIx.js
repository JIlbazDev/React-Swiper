import React from "react";
import { Box } from "@mui/material";
import Footerimage from "../images/slidethertysix/29.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";
const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#a0ccd6",
    }}
  >
    {children}
  </Box>
);

const SlideThertySIx = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#0f4d99",
          margin: "-3px 0px",
          fontSize: "26px",
          lineHeight: "1.35",
          color: "#FFF",
        }}
      >
        <b>Marketing debate ações e compartilha ideias</b>
      </Box>
      <Box>
        <Paragraph>
          <p>
            Graças ao empenho de colaboradores, diretores e clientes, a campanha
            para arrecadação de fraldas geriátricas deste ano foi um sucesso. A
            soma dos esforços resultou na arrecadação de 4.676 fraldas e a
            diretoria da concessionária se comprometeu em dobrar a quantidade,
            totalizando 9.352 fraldas. Todo o material arrecadado foi doado para
            entidades que atendem idosos nos estados do Paraná, São Paulo e Mato
            Grosso do Sul.
          </p>
        </Paragraph>
        <img src={Footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertySIx;
