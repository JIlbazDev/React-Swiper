import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/SlideThertyNine/32.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#eee",
    }}
  >
    {children}
  </Box>
);

const SlideThertyNine = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Os meses de outubro e novembro trouxeram cores especiais, alusivas à
            saúde da mulher e do homem, para as filiais da Rede P. B. Lopes.
            “Neste ano nossa mobilização no Outubro Rosa foi de alerta sobre o
            autocuidado e a prevenção ao câncer de mama e de colo do útero”,
            informa a gerente de RH, Sandra Ribeiro. “Fizemos o mesmo formato
            durante o mês de novembro, chamando atenção dos homens sobre a
            importância da prevenção ao câncer de próstata.
          </p>
          <p>
            Em outubro, todos os colaboradores foram convidados a vestir o rosa
            e em novembro o mesmo ocorreu: um dia foi dedicado ao azul nos
            uniformes. Além disso, todas as fachadas das filiais foram
            iluminadas com cores azuis. “O RH também enviou informativos para o
            fomento nas reuniões com equipes.”
          </p>
        </Paragraph>
        <img src={footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertyNine;
