import React from "react";
import { Box } from "@mui/material";
import TruckImage from "../images/slideseveteen/truck.jpg";
import womenimage from "../images/slideseveteen/women.jpg";
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

const SlideSeventeen = () => {
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
          margin: "-4px 0px",
        }}
      >
        <b>
          Empresário conta que a fantasia da infância tornou-se realidade ao
          dirigir um Scania
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
        <span>
          Texto: Emilia Miyazaki | Fotos: Rede P. B. Lopes e arquivo pessoal
        </span>
      </Box>
      <Box>
        <Paragraph>
          <p>
            A paixão por caminhões sempre moveu a vida de Valdir Rampazzo
            Junior, proprietário da transportadora Rampazzo Junior, com sede em
            Maringá (PR). E a atração pela marca Scania ganhou uma camada extra
            de emoção ainda na infância. “Um dia a minha tia chegou com um
            caminhãozinho de madeira todo vermelho. Ele vinha com uma lona e eu
            brincava muito com ele, carregando pedras na carroceria. Foi assim
            que começou o meu sonho de ter um caminhão de verdade”, relembra o
            empresário.
          </p>
          <p>
            Junior é filho de Valdir Rampazzo e Dirce Suemi Tanaka. Nos anos
            2000, a família cruzou o oceano para trabalhar como dekasseguis, no
            Japão. “Ao todo ficamos cinco anos naquele país. Em 2007, no Brasil,
            consegui comprar o meu primeiro Scania e com um motorista contratado
            começamos a transportar óleo vegetal.
          </p>
          <p>
            Tempos depois, Valdir Junior comprou um Scania R400 em sociedade com
            o irmão. “Era um bitrem e com ele entramos no segmento graneleiro.
            Com o tempo comprei a parte dele”, relembra.{" "}
          </p>
          <p>
            Mais tarde, o empresário trocou o Scania R400 por um R500. “Com
            habilitação para dirigir caminhões e na boleia de um Scania R500
            zero km da Nova Geração, dividi a condução de um rodotrem com um
            amigo de infância pelo Nordeste. É muita emoção dirigir um caminhão
            desse.”
          </p>
        </Paragraph>
        <Box>
          <img src={TruckImage} />
          <Paragraph>
            <b>PRIMEIRO DA LISTA</b>
            <p>
              Um dos momentos mais marcantes para Valdir Rampazzo Junior, um
              aficionado por caminhões, foi o lançamento da linha Super da
              Scania. “Fiquei louco pelo Super, tanto que fui o primeiro a
              comprar uma unidade, que chegou em fevereiro deste ano. Dirigi o
              Super durante cinco meses no rodotrem. Eu gosto de viajar para ver
              como está a estrada e também porque gosto da profissão. Quem não
              gosta, não fica no segmento.”
            </p>
            <b>CASAL UNIDO</b>
            <p>
              Valdir Rampazzo Junior é casado com Mariana, com quem divide as
              tarefas na transportadora. A esposa cuida das áreas administrativa
              e financeira, e juntos eles gerenciam o negócio que não para de
              crescer: recentemente, a empresa adquiriu mais três caminhões,
              totalizando cinco Scanias.
            </p>
            <p>
              Mais tarde, o empresário trocou o Scania R400 por um R500. “Com
              habilitação para dirigir caminhões e na boleia de um Scania R500
              zero km da Nova Geração, dividi a condução de um rodotrem com um
              amigo de infância pelo Nordeste. É muita emoção dirigir um
              caminhão desse.”
            </p>
          </Paragraph>
          <img src={womenimage} />
          <Box
            sx={{
              padding: "30px 20px",
              fontSize: "18px",
              lineHeight: "1.6",
              fontWeight: "400",
              margin: "-3px 0px",
              backgroundColor: "#dfe6eb",
            }}
          >
            <b>BONS PARCEIROS </b>
            <p>
              Cliente do vendedor Sansão Evangelista de Farias, da P. B. Lopes
              Maringá (PR), o empresário Valdir Rampazzo Junior não economiza
              elogios ao time da concessionária. “Todos são muito atenciosos,
              desde o mecânico ao gerente. A P. B. Lopes é uma parceira
              importante. Todos são muito gente boa, sempre nos ajudando no que
              for necessário. Com eles é parceria total.”
            </p>
          </Box>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideSeventeen;
