import React from "react";
import { Box } from "@mui/material";
import Groupimage from "../images/SlideTherteen/one.jpg";
import Menimage from "../images/SlideTherteen/two.jpg";
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

const SlideTherteen = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "26px",
          fontWeight: "bold",
          lineHeight: "1.6",
          backgroundColor: "#606b80",
          color: "#FFF",
        }}
      >
        <b>
          Comitiva conheceu os processos produtivos e a linha de montagem de
          caminhões e ônibus
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
        <span>Texto: Milton Antunes | Fotos: Rede P. B. Lopes</span>
      </Box>
      <Box>
        <Paragraph>
          <p>
            Um grupo de 25 pessoas, entre clientes e colaboradores da Rede P. B.
            Lopes de Salto Grande (SP) e Regente Feijó (SP), teve a oportunidade
            de visitar no dia 16 de outubro a fábrica da Scania, em São Bernardo
            do Campo (SP), onde conheceu todo o processo de fabricação de
            motores, a linha de produção dos caminhões e ônibus e a fábrica de
            cabines.
          </p>
        </Paragraph>
        <img src={Groupimage} />
        <Paragraph>
          <p>
            “Eles ficaram impressionados com tanta organização, limpeza e
            tecnologia”, informa <mark>Marcelo Luís Bozolan</mark> , gerente da
            P. B. Lopes Regente Feijó, que acompanhou o grupo. “Tudo correu
            dentro do planejado e como sempre os clientes ficaram maravilhados
            com o que viram na fábrica da Scania.
          </p>
        </Paragraph>
        <img src={Menimage} />
        <Paragraph>
          <p>
            O objetivo da visita foi estreitar os laços com os clientes e
            aprofundar o conhecimento sobre os processos e tecnologias de
            produção. “Apresentamos aos clientes o cuidado, respeito e o carinho
            como são produzidos nossos produtos. Eles conheceram de perto onde
            nascem os caminhões, ônibus e motores que adquirem. Como são
            projetados e como nascem. Cada riqueza dos detalhes de cada fábrica
            que visitamos foi muito bem explorada.”
          </p>
          <b>SCANIA SHOW</b>
          <p>
            A visita monitorada à fábrica da Scania faz parte do Scania Show,
            programa que abre as portas para grupos seletos interessados em
            conhecer os processos produtivos e a linha de montagem de caminhões
            e ônibus.
          </p>
          <p>
            “O evento foi excelente, superou nossas expectativas e, mais ainda,
            a dos clientes. Fomos muito bem recepcionados e vimos o brilho nos
            olhos dos nossos clientes, principalmente quando visitamos as
            fábricas. Foi muito gratificante. O Scania Show é realmente um
            show”, conclui Marcelo Luís Bozolan, gerente da P. B. Lopes Regente
            Feijó.
          </p>
        </Paragraph>
        <Box>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideTherteen;
