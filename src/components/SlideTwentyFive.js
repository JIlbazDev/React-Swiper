import React from "react";
import { Box } from "@mui/material";
import Plantationimage from "../images/SlideTwentyFive/plantation.jpg";
import annoucementImage from "../images/SlideTwentyFive/19.meio_ambiente1_2.jpg";
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

const SlideTwentyFive = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#39a349",
          margin: "-3px 0px",
          fontSize: "26px",
          lineHeight: "1.35",
          color: "#FFF",
        }}
      >
        <b>
          Projetada para o lazer e descanso, o espaço é uma homenagem a Rodrigo
          de Andrade Lopes
        </b>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-0.25px",
          padding: "10px 10px",
          color: "#666 !important",
          margin: "-3px 0px",
        }}
      >
        <span>Texto: Milton Antunes | Fotos: Rede P. B. Lopes</span>
      </Box>
      <Box>
        <Paragraph>
          <p>
            Para celebrar o Dia da Árvore, comemorado no dia 21 de setembro, a
            Rede P. B. Lopes inaugurou uma praça na área externa da filial de
            Campo Grande (MS), com espaço para circulação e bancos para o
            descanso de colaboradores e clientes. Durante a cerimônia de
            inauguração, funcionários, gestores, diretores e convidados fizeram
            o plantio de 80 mudas de ipês, de diversas cores.
          </p>
          <p>
            A ação faz parte do Programa Ipê Amarelo, iniciativa socioambiental
            da Rede P. B. Lopes, criada em junho de 2008. Em 2012, o projeto foi
            reconhecido no Prêmio de Responsabilidade Social e Sustentabilidade
            no Varejo, na categoria Pequenas e Médias Empresas, concedido pelo
            Centro de Excelência em Varejo da Fundação Getúlio Vargas.
          </p>
        </Paragraph>
        <img src={Plantationimage} />
        <Paragraph>
          <b>HOMENAGEM</b>
          <p>
            A criação da praça, planejada para proporcionar convívio e descanso,
            é também uma homenagem a Rodrigo de Andrade Lopes, filho do fundador
            do grupo, Pedro Barboza Lopes, que faleceu em junho deste ano, aos
            56 anos.
          </p>
          <p>
            Rodrigo de Andrade Lopes foi diretor da Rede P. B. Lopes e teve uma
            participação importante no grupo, atuando firmemente na implantação
            da concessionária em Mato Grosso do Sul e no processo de
            informatização da empresa. Rodrigo também é o autor da logomarca da
            P. B. Lopes, que se mantém forte até hoje.
          </p>
        </Paragraph>
        <img src={annoucementImage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideTwentyFive;
