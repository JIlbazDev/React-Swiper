import React from "react";
import { Box } from "@mui/material";
import Mainimage from "../images/slideEleven/one_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      backgroundColor: "#3e3794",
      margin: "-3px 0px",
      color: "#FFF",
    }}
  >
    {children}
  </Box>
);
const SlideEleven = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            A Rede P. B. Lopes entrou no clima do Halloween e promoveu uma
            recepção especial aos clientes, na última semana de outubro, para
            fomentar as vendas de peças originais Scania.
          </p>
          <p>
            Além da decoração no estilo Dia das Bruxas, as filiais também
            prepararam sorteio de brindes e quitutes em uma ação que agradou a
            equipe da PB e os clientes. “Além do resultado positivo nas vendas,
            os clientes entraram nas filiais com a expectativa do que iriam
            encontrar e os mimos que iriam receber. A ação foi tão bem recebida
            que teve cliente que levou os filhos para curtirem o Halloween”,
            conta <mark>Débora Moreno</mark>, analista de marketing da Rede P.
            B. Lopes.
          </p>
        </Paragraph>
      </Box>
      <Box>
        <img src={Mainimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideEleven;
