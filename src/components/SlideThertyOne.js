import React from "react";
import { Box } from "@mui/material";
import manimage from "../images/slidethertyone/mennn.jpg";
import Footerimage from "../images/slidethertyone/footerss.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#eaeaea",
    }}
  >
    {children}
  </Box>
);

const SlideThertyOne = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            As equipes de Master Drivers de toda a rede de concessionárias
            Scania do Brasil participaram de um treinamento na fábrica da
            Scania, em São Bernardo do Campo (SP), direcionado a gestores de
            frota. Todos os master drivers da P. B. Lopes compareceram,
            divididos em duas turmas.
          </p>
          <p>
            “Eles trabalharam a utilização de ferramentas de conectividade,
            especialmente o Scania Fleet e My Scania, além da análise de
            planilhas de comparativo de rentabilidade dos caminhões,
            apresentação de , entre outros”, explica o gestor dos MD,{" "}
            <mark>David Roberto do Carmo Junior</mark>.
          </p>
        </Paragraph>
        <img src={manimage} />
        <Box
          sx={{
            padding: "10px 20px",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "400",
            margin: "-3px 0px",
            backgroundColor: "#eaeaea",
          }}
        >
          <p>
            David reforça a importância da participação de todos os
            profissionais no treinamento. “Foi uma oportunidade de troca de
            experiências, comentar os desafios e deixar todos na mesma página,
            falando a mesma língua.
          </p>
        </Box>
        <img src={Footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertyOne;
