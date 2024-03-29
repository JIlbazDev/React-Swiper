import React from "react";
import { Box } from "@mui/material";
import capsimage from "../images/slidefourtyONe/capss.jpg";
import footerimage from "../images/slidefourtyONe/footerw.jpg";
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

const SlideFourtyOne = () => {
  return (
    <Box>
      <Box>
        <img src={capsimage} />
      </Box>
      <Box>
        <Paragraph>
          <p>
            Referência para a contratação de jovens aprendizes, o Instituto
            Salesiano de Três Lagoas (MS) recebeu a visita de colaboradores da
            Rede P. B. Lopes com o objetivo de apresentar as atividades da
            concessionária e receber currículos de estudantes.
          </p>
          <p>
            A ação foi realizada em outubro com a participação de empresas de
            diversos segmentos. A PB marcou presença com colaboradores do Posto
            de Atendimento (CWS) de Três Lagoas: Fabrinio Muriel Ferreira de
            Carvalho (garantista), Gisele Fernanda Pereira Amaro (consultora
            técnica), e os jovens aprendizes Gabriel Felipe Lino de Farias e
            Eliezer da Silva Santos.
          </p>
        </Paragraph>
        <img src={footerimage} />
        <Paragraph>
          <p>
            Gisele Fernanda Pereira Amaro e Fabrinio Muriel Ferreira de Carvalho
          </p>
        </Paragraph>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFourtyOne;
