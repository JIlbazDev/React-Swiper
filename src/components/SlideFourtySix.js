import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/SlidefourtySix/39.receita1_1.jpg";
import SocialMedia from "./SocialMedia";
const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "20px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#ca9e2c",
      color: "#FFF",
    }}
  >
    {children}
  </Box>
);

const SlideFourtySix = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            {" "}
            A farofa de abacaxi e bacon é perfeita para o almoço de fim de ano
            ou a ceia de Natal! O preparo é simples e o resultado maravilhoso. A
            receita é da <b>Andréa Azambuja</b>, colaboradora da filial de Campo
            Grande (MS). Acompanhe o passo a passo.
          </p>
        </Paragraph>
        <img src={footerimage} />
        <Box
          sx={{
            padding: "30px 20px",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "400",
            margin: "-3px 0px",
            backgroundColor: "#fdf1d5",
          }}
        >
          <p style={{ fontWeight: "bold", padding: "0px 0px 0px 20px" }}>
            INGREDIENTES:
          </p>
          <ul>
            <li>1 ½ xícara (chá) de margarina</li>
            <li>140 g de bacon</li>
            <li>2 cebolas médias cortadas (em rodelas ou como preferir)</li>
            <li>1 xícara (chá) de uva passa preta</li>
            <li>½ abacaxi cortado em cubos médios (400 g)</li>
            <li>1 xícara (chá) de castanha-do-pará picada grosseiramente</li>
            <li>500 g farinha de mandioca torrada</li>
            <li>1 maço pequeno de salsinha picada</li>
            <li>Sal e pimenta do reino preta a gosto</li>
          </ul>
          <Box>
            <p style={{ fontWeight: "bold", padding: "0px 0px 0px 20px" }}>
              MODO DE PREPARO:
            </p>
            <p style={{ padding: "0px 0px 0px 20px" }}>
              Em uma panela grande, aqueça ½ xícara de margarina e doure o
              bacon. Acrescente a cebola e frite até dourar. Junte as uvas
              passas, o abacaxi, a castanha e refogue por 2 minutos. Desligue o
              fogo. Acrescente o restante da margarina e mexa até derreter.
              Junte a farinha de mandioca torrada e a salsinha. Tempere com sal
              e pimenta. Junte a família e curta esta delicia!
            </p>
          </Box>
          <Box>
            <p style={{ fontWeight: "bold", padding: "0px 0px 0px 20px" }}>
              DICAS:
            </p>
            <p>
              <ul>
                <li>
                  asdsadadPode substituir o bacon por linguiça calabresa, se
                  preferir.
                </li>
                <li>Pode decorar a farofa de abacaxi com frutas da estação.</li>
                <li>
                  Use a farofa para rechear o interior do frango ou peru de
                  Natal.
                </li>
              </ul>
            </p>
          </Box>
        </Box>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFourtySix;
