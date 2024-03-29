import React from "react";
import { Box } from "@mui/material";
import Footerimage from "../images/SlideTwelth/footerimage.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      backgroundColor: "#b5272c",
      margin: "-3px 0px",
      color: "#FFF",
    }}
  >
    {children}
  </Box>
);

const SlideTwelth = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            A tradicional temporada de liquidação conhecida como Black Friday
            agitou as filiais da Rede P. B. Lopes no final de novembro. Entre 20
            e 30 de novembro, a rede promoveu a Black Week, uma semana inteira
            com em todas as peças Scania
          </p>
          <p>
            “Foi uma forma diferente de movimentar o mercado e o resultado foi
            bastante positivo, batendo nossas expectativas de vendas. Os
            clientes gostaram muito da possibilidade de garantir descontos nas
            próximas compras com o Cashback”, revela o gerente de peças e
            serviços da PB, <mark>Fernando Rodrigues</mark>
          </p>
        </Paragraph>
      </Box>
      <Box>
        <img src={Footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideTwelth;
