import React from "react";
import { Box } from "@mui/material";
import image from "../images/SlideThertyfour/27.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#e7ecf0",
    }}
  >
    {children}
  </Box>
);

const SlideThertyFour = () => {
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
            O Tauá Resort foi palco para um encontro com um dos times
            estratégicos da Scania. Realizado no mês de setembro em Atibaia,
            pertinho da capital paulista, todo o marketing da Scania (indústria
            e rede de concessionárias) dedicou um dia para dividir e
            compartilhar ideias.
          </p>
          <p>
            “A Scania apresentou um resumo das campanhas realizadas ao longo do
            ano, os eventos subsidiados pela marca, os resultados, além das
            atividades de comunicação interna, redes sociais, ações
            sustentáveis... tudo o que eles desenvolveram em parceria com as
            concessões”, conta a analista de marketing da P. B. Lopes,{" "}
            <mark>Débora Moreno</mark>
          </p>
        </Paragraph>
        <img src={image} />
        <Paragraph>
          <p>
            O encontro foi uma ótima chance para conhecer pessoalmente a equipe
            Scania. “Como estamos mais distantes, o contato fica restrito às .
            Foi um tempo importante para compartilhar experiências, entender os
            gargalos e como os times encontram soluções em suas regiões de
            atuação. Foi um momento de grande valor para partilhar as ideias e
            ter sinergia com a Scania” resume Débora.
          </p>
        </Paragraph>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertyFour;
