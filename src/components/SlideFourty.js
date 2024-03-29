import React from "react";
import { Box } from "@mui/material";
import carimage from "../images/Slidefoutry/33.noticias1_12121211.jpg";
import footerimage from "../images/Slidefoutry/33.noticias1_2.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#def4f3",
    }}
  >
    {children}
  </Box>
);

const SlideFourty = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Visando a qualidade de vida do colaborador, a Rede P. B. Lopes
            realizou ao longo de 2023 o “Pix da Saúde”, um programa que premia
            os funcionários que apresentam evolução positiva em seu quadro de
            saúde durante o ano.
          </p>
        </Paragraph>
        <img src={carimage} />
        <Paragraph>
          <p>
            A iniciativa é aberta à participação de todos. “Nossa empresa de
            saúde visita todas as filiais realizando exames e repassando
            orientações sobre os resultados com foco na melhoria da qualidade de
            vida”, explica a gerente de RH, <mark>Sandra Ribeiro</mark>
          </p>
          <p>
            Também faz parte da ação, o envio de dicas para uma vida mais
            saudável. “Um ano depois, a empresa faz a renovação dos periódicos e
            avalia a evolução dos colaboradores. É premiado quem conseguiu
            ganhos em qualidade de vida, medido por indicadores específicos.”
          </p>
        </Paragraph>
        <img src={footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFourty;
