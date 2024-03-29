import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/SlideFourtyFive/38.agro1_11212.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#d6d0b3",
    }}
  >
    {children}
  </Box>
);

const SlideFourtyFive = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 30px",
          fontSize: "26px",
          lineHeight: "1.6",
          fontWeight: "400",
          margin: "-3px 0px",
          backgroundColor: "#67b6a0",
          color: "#FFF",
        }}
      >
        <b>
          Fazenda Dona Amélia, de propriedade da família Lopes, cria projeto de
          reflorestamento que rende dinheiro extra para os colaboradores
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
        <span>Texto: Emilia Miyazaki | Fotos: Fazenda Dona Amélia</span>
      </Box>
      <Box>
        <Paragraph>
          <p>
            Uma iniciativa que promove a conscientização ecológica, união entre
            as famílias, geração de renda e contribui para a restauração da
            flora e fauna está mudando a rotina dos funcionários da Fazenda Dona
            Amélia, situada em Nova Andradina (MS).disseminada
          </p>
          <p>
            Trata-se do “Projeto de Reflorestamento Pedro Barboza Lopes”, um
            programa criado há 60 dias pela gerente da fazenda, Márcia Chink, e
            pela agrônoma Aline dos Santos. O objetivo é produzir mudas a partir
            de sementes encontradas na própria fazenda.
          </p>
          <p>
            “Fornecemos a bandeja e a terra adubada para as famílias que moram
            na fazenda. Eles recolhem as sementes no campo e fazem o plantio.
            Quando a muda já está com 15 cm, nós compramos e iniciamos a etapa
            de crescimento no viveiro. Quando atingirem o tamanho ideal,
            poderemos efetuar o plantio nas praças de alimentação do gado e em
            áreas de reserva nativa”, explica a gerente da fazenda.
          </p>
          <p>
            Os colonos já estão produzindo mudas de árvores frutíferas, espécies
            da região, além de ipês brancos e amarelos. “Estamos percebendo o
            envolvimento das famílias, que fazem esse trabalho em horários
            alternativos. Além de garantir uma renda extra, a cultura da
            preservação está sendo disseminada.
          </p>
        </Paragraph>
        <img src={footerimage} />
        <Paragraph>
          <b>footerimage</b>
          <p>
            A zeladora <mark>Adriana da Silva Mendes Costa</mark> está
            participando do projeto e revela que já vendeu 150 mudas para o
            viveiro da fazenda. “Somos em seis famílias aqui e todos estão bem
            animados. O dinheiro da venda eu passei para meus filhos, como
            incentivo pra eles.”
          </p>
          <p>
            Adriana conta que achou a ideia muito interessante, “pois é um
            projeto que ajuda a plantar árvores nativas e frutíferas. Nós iremos
            nos beneficiar quando o pomar estiver dando frutos.
          </p>
        </Paragraph>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFourtyFive;
