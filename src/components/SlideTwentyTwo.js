import React from "react";
import { Box } from "@mui/material";
import fishes from "../images/SlideTwentyTwo/fishes.jpg";
import fishesFooter from "../images/SlideTwentyTwo/fishesFottter.jpg";
import SocialMedia from "../components/SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#e4eaf3",
    }}
  >
    {children}
  </Box>
);

const SlideTwentyTwo = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#80a6b5",
          margin: "-3px 0px",
          fontSize: "26px",
          lineHeight: "1.35",
          color: "#FFF",
        }}
      >
        <b>
          Paso de la Patria, famosa vila turística na Argentina, é conhecida
          como um dos melhores pesqueiros de dourados do mundo
        </b>
      </Box>
      <Box>
        <Paragraph>
          <p>
            As pescarias da Rede P. B. Lopes são sempre uma festa, com momentos
            de alegria e descanso, longe da rotina e do trabalho. “É uma viagem
            entre amigos”, resume o cliente <mark>João Dorival Martins, </mark>{" "}
            que já perdeu as contas do número de idas para a Paso de la Patria,
            na Argentina.
          </p>
          <p>
            “Esta foi a quarta ou a quinta vez. Esse ano foi especial, pois
            levei meu filho junto. Essas viagens funcionam para estreitar o
            relacionamento, mesmo sem falar de negócios. O local tem um bom
            atendimento, foi uma maravilha!"
          </p>
        </Paragraph>
        <img src={fishes} />
        <Paragraph>
          <b>PROGRAMA CONCORRIDO</b>
          <p>
            O vendedor da P. B. Lopes Maringá (PR),{" "}
            <mark>Sansão Evangelista de Farias,</mark>, é figurinha fácil nessas
            viagens. “A viagem de 1 mil km até a Argentina começa com a saída da
            PB. Fomos em 20 pessoas, sendo 14 clientes. Lá é o sonho dos amantes
            da pesca.
          </p>
          <p>
            Para Sansão é importante proporcionar aos clientes do Consórcio
            Scania momentos de lazer, descontração e integração. “Tem cliente
            que fica esperando uma nova campanha para adquirir cota para poder
            viajar e se divertir em boa companhia.
          </p>
        </Paragraph>
        <img src={fishesFooter} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideTwentyTwo;
