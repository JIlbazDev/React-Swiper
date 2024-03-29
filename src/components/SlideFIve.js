import React from "react";
import { Box } from "@mui/material";
import SlideImage from "../images/slidesix/slidefivecarton.jpg";
import SlideJungleimages from "../images/slidesix/jungle.jpg";
import Slidefooter from "../images/slidesix/slidefooter.jpg";
import SocialMedia from "./SocialMedia";

const SlideFIve = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#599a21",
          padding: "30px 20px",
          color: "#FFF",
          fontSize: "26px",
          position: "relative",
          lineHeight: "1.35",
          margin: "-3px 0px",
        }}
      >
        <b>
          Meta da indústria é plantar uma muda para cada venda de produto ou
          serviço
        </b>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ccc",
          letterSpacing: "-0.25px",
          paddingBottom: "10px",
          paddingTop: "10px",
          color: "#666 !important",
        }}
      >
        <span>Texto: Emilia Miyazaki | Fotos: Scania do Brasil</span>
      </Box>
      <Box>
        <img src={SlideImage} />
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "1.6",
          color: "#000",
        }}
      >
        <p>
          A Floresta Scania, criada em parceria com a Fundação SOS Mata
          Atlântica, está localizada nas margens da rodovia Dutra, em frente ao
          Santuário Nacional de Nossa Senhora Aparecida, na cidade de Aparecida
          (SP). Lá já foram plantadas, desde 2018, mais de 186 mil mudas de
          espécies nativas.
        </p>
        <p>
          A ideia é colocar em prática a sustentabilidade para que o planeta
          possa respirar melhor. Com o aumento da quantidade de árvores é
          possível reduzir os impactos climáticos que vem acontecendo ao longo
          dos anos.
        </p>
      </Box>
      <Box>
        <img src={SlideJungleimages} />
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "1.6",
          color: "#000",
        }}
      >
        <p>
          Foi assim que a Scania deu início à parceria com a Fundação SOS Mata
          Atlântica. Esse trabalho conjunto vem sendo realizado com o intuito de
          cuidar do meio ambiente, atenuando o problema causado pelo setor e
          compensando uma parte do CO2 gerado pelo processo produtivo da fábrica
          em São Bernardo do Campo (SP).
        </p>
        <p>
          A parceria prevê que uma muda nativa seja plantada a cada venda de
          caminhãoônibus e motor industrial, marítimo e para grupos geradores de
          energia, além de cada financiamento e cota de consórcio
          comercializados pelo Scania Banco e Scania Consórcio.
        </p>
      </Box>
      <Box>
        <img src={Slidefooter} />
      </Box>
      <Box>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFIve;
