import React from "react";
import { Box } from "@mui/material";
import image from "../images/SlideThertyTwo/25.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#fff",
    }}
  >
    {children}
  </Box>
);

const SlideThertyTwo = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Para garantir a excelência no atendimento é necessário investir em
            capacitação da equipe. Esta premissa tem sido recorrente na Rede P.
            B. Lopes, com o treinamento de novos colaboradores e recapacitação
            de colaboradores antigos.
          </p>
          <p>
            As equipes técnicas do Mato Grosso do Sul – de Dourados, Ladário e
            auxiliares técnicos de Campo Grande finalizaram as imersões deste
            ano.
          </p>
          <p>
            Segundo Rodrigo Corrêa de Freitas, especialista em Treinamento
            Técnico da Rede P. B. Lopes, há uma grande demanda para a
            capacitação, mas é preciso organizar as agendas. “Eu gosto de usar a
            palavra recapacitação. A evolução acontece com o aprendizado. Somos
            pessoas melhores quando estamos capacitados para exercer algo. Os
            técnicos treinados demonstraram mais interesse e satisfação com o
            conhecimento adquirido.”
          </p>
        </Paragraph>
        <img src={image} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertyTwo;
