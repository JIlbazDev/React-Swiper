import React from "react";
import { Box } from "@mui/material";
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

const SlideNineteen = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            O diretor da 3D Transportes, Caio Salata, atendido pela P. B. Lopes
            Regente Feijó, está super satisfeito com o desempenho do Scania
            Super e do Scania Plus:
          </p>
          <p>
            “Nosso ideal era prospectar novos caminhos. Começamos a rodar com o
            R560 6x4 Super. O caminhão se paga tranquilo e ainda sobra para
            manutenção, troca de pneu e outras coisas. Também compramos dois
            R540 Plus. É um caminhão diferenciado, os próprios motoristas
            comentam do conforto, da economia, do torque do caminhão e do grau
            de força do freioRetarder, que ajuda muito nas subidas e descidas”,
            explica Caio.
          </p>
          <p>
            Fundada há 14 anos pelo patriarca da família, Milton Cezar Pereira,
            no distrito de Espigão, região de Regente Feijó (SP), a vé
            especializada na condução de cargas refrigeradas para marcas como
            Seara, JBS e BRF.
          </p>
        </Paragraph>
        <Box sx={{ padding: "30px 20px", backgroundColor: "#132244" }}>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideNineteen;
