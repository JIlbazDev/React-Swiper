import React from "react";
import { Box } from "@mui/material";
import men from "../images/slideten/men.jpg";
import footerimage from "../images/slideten/footer.jpg";
import SocialMedia from "./SocialMedia";
const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      backgroundColor: "#ebe0c6",
      margin: "-3px 0px",
    }}
  >
    {children}
  </Box>
);

const SlideTen = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Na Rede P. B. Lopes, o cliente é sempre prioridade e no mês de
            setembro ele ganhou uma dose extra de cuidado durante a “Semana do
            Cliente”
          </p>
          <p>
            “Todos os clientes que nos visitaram puderam aproveitar um delicioso
            café preparado exclusivamente para eles”, conta o gerente de
            serviços da filial de Londrina, <mark>Leonardo Batista</mark>
          </p>
          <p>
            O diretor chama atenção para o cuidado que o transportador deve ter
            em relação à qualidade de combustível. “Ao estocar o combustível por
            períodos prolongados, será necessário verificar contaminação da
            parte de matéria orgânica e em alguns casos adicionar bactericidas.
          </p>
        </Paragraph>
        <Box>
          <img src={men} />
          <Box>
            <Paragraph>
              <p>
                Segundo Leonardo, iniciativas focadas no cliente são de extrema
                importância. “O resultado da ação foi visível nos ambientes
                decorados, com o café e a nossa receptividade. Os resultados
                vieram no aumento do faturamento, no cumprimento das metas, e na
                alegria de nossa clientela.”
              </p>
            </Paragraph>
          </Box>
        </Box>
        <Box>
          <img src={footerimage} />
        </Box>
        <Box>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideTen;
