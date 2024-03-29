import React from "react";
import { Box } from "@mui/material";
import Employeimage from "../images/SlideTwentyone/emplyoee.jpg";
import groupImage from "../images/SlideTwentyone/group.jpg";
import TrucksImage from "../images/SlideTwentyone/trucks.jpg";
import video from "../Video/sorteio.mp4";
import SocialMedia from "../components/SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#9ad4da",
    }}
  >
    {children}
  </Box>
);
const SlideTwentyOne = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ccc",
          letterSpacing: "-0.25px",
          padding: "10px 10px",
          color: "#666 !important",
          margin: "-3px 0px",
        }}
      >
        <span>Texto: Emilia Miyazaki | Fotos: Rede P. B. Lopes</span>
      </Box>
      <Box>
        <img src={Employeimage} />
        <Box
          sx={{
            padding: "10px 20px",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "400",
          }}
        >
          <p>
            Pedro Henrique Gomes, Nilton César Theodoro, Sansão Evangelista de
            Faria, Joel Jaloto, Guilherme Jaloto, Alexandre Ferreira Baniogli e
            Antonio Zapatosni
          </p>
        </Box>
        <Box>
          <Paragraph>
            <p>
              A sorte de ganhar um Scania Super, modelo top de linha, com
              documentação e IPVA pagos, sorriu para um cliente muito especial
              da Rede P. B. Lopes: Joel Jaloto.
            </p>
            <p>
              No dia 16 de outubro, durante um Encontro de Amigos na P. B. Lopes
              Maringá (PR), os clientes puderam acompanhar a transmissão ao vivo
              da assembleia da promoção Dreamline Super, do Consórcio Scania.
            </p>
            <p>
              No decorrer do evento foi feito o sorteio de quatro caminhões: 1
              Scania Super R560 6x4, 1 Scania Super R460 6x2, 1 P370 4x2 e 1
              P360 8x2. Para a surpresa e admiração dos presentes, o Scania R560
              saiu para a Jaloto Transportes.
            </p>
            <p>
              “Organizamos um rodízio de pizza na filial, convidamos os clientes
              que adquiriram cotas desta promoção e fomos agraciados com o
              sorteio para o Joel Jaloto, parceiro da família Lopes há anos,
              desde o tempo da Imãos Lopes”, relembra Nilton César Theodoro,
              gerente geral da P. B. Lopes Maringá (PR).
            </p>
          </Paragraph>
          <img src={groupImage} />
          <Paragraph>
            Fotter_Video
            <b>COMPROU 1, LEVOU 2</b>
            <p>
              Cliente de consórcio e de caminhões, a Jaloto está em atividade há
              42 anos, atuando no transporte de cargas líquidas. “O modelo
              Scania Super R560 6x4 foi um caminhão adicional que ele ganhou,
              sem ônus algum. Comprou uma cota e ganhou um caminhão a mais”,
              enfatiza Nilton César Theodoro.
            </p>
            <p>
              O gerente da filial maringaense reforça que o caminhão é o top de
              linha do mercado e que ele sai pronto para rodar. “É um presente
              de Deus e ele merece. É um cliente muito parceiro e amigo, de um
              coração muito generoso. Estamos muito felizes.”
            </p>
          </Paragraph>
          <img src={TrucksImage} />
          <Paragraph>
            <b>SURPRESA BOA</b>
            <p>
              O proprietário da Jaloto Transportes, Joel Jaloto, conta que foi
              ao jantar para acompanhar o sorteio do consórcio sem nenhuma
              expectativa. Não imaginava que seria o sortudo da noite. “Mas
              quando falaram o meu número, 35, eu pulei da cadeira. Foi uma
              surpresa boa, estou muito feliz.”
            </p>
            <b>CHAMPAGNE PARA FESTEJAR</b>
            <p>
              Joel Jaloto esteve na indústria para conhecer o caminhão de perto
              e no dia 10 de novembro retirou o veículo da concessionária em
              grande estilo: com direito a tapete vermelho, coquetel e brinde
              com champagne.
            </p>
            <p>
              “Estou extremamente feliz. Vou ficar namorando esse caminhão uns
              dias e só depois ele entra em operação. É muita emoção. O coração
              está batendo forte”, disse antes de subir no caminhão para leva-lo
              para casa.
            </p>
          </Paragraph>
        </Box>
        <Box sx={{ paddding: "30px 20px", backgroundColor: "#1a9eac" }}>
          <Box sx={{ padding: "30px 20px", width: "100%" }}>
            <Box>
              <b
                style={{ fontSize: "26px", color: "#FFF", lineHeight: "1.35" }}
              >
                VEJA O MOMENTO EM QUE JOEL JALOTO É SORTEADO E GANHA UM SCANIA
                ZERO KM
              </b>
              <video src={video} controls className="Fotter_Video"></video>
            </Box>
          </Box>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideTwentyOne;
