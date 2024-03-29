import React from "react";
import { Box } from "@mui/material";
import slideImage from "../images/slideseven/slideseven1.jpg";
import slideImageTwo from "../images/slideseven/slideseven2.jpg";
import slideImageThree from "../images/slideseven/slideseven3.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "30px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      backgroundColor: "#d8d7d5",
      margin: "-3px 0px",
    }}
  >
    {children}
  </Box>
);

const SlideSeven = () => {
  return (
    <Box>
      <Paragraph>
        <p>
          A Rede P. B. Lopes está olhando para o próximo ano com entusiasmo.
          Segundo o diretor <mark>José Henrique de Souza Gomes</mark>, a Scania
          trabalha focada para conquistar a liderança do mercado. “Temos um
          cenário positivo para 2024, onde a Scania vai buscar uma melhor
          posição no no segmento 6X4 e manter sua liderança no 6X2
        </p>
      </Paragraph>
      <Box>
        <img src={slideImage} />
        <Paragraph>
          <p>
            Segundo José Henrique, este trabalho da Scania vai trazer resultados
            positivos. “Isso se traduzirá em um volume maior de vendas para toda
            a rede de concessionários Scania. Teremos para 2024, volumes maiores
            que 2023.
          </p>
          <b>SURPRESAS POSITIVAS</b>
          <p>
            Avaliando o ano de 2023, o diretor conta que ele veio recheado de
            surpresas positivas. “Tivemos um bom volume de caminhões
            comercializados, especialmente no segmento de transporte pesado. Foi
            o ano do Super, último lançamento da Scania, mostrar performance em
            rentabilidade. Quando começou a rodar, o caminhão trouxe economia e
            bom desempenho, despertando a atenção do mercado, o que aumentou a
            procura pelo produto. Temos vários clientes acenando e fechando
            negócios para 2024, especificamente para o Super.”
          </p>
        </Paragraph>
        <Box>
          <img src={slideImageTwo} />
          <Paragraph>
            <b>CAMINHÃO ELÉTRICO</b>
            <p>
              José Henrique também revela que a Scania pretende buscar maior
              participação no segmento do semipesado. “Teremos um portfólio
              maior para trabalhar, com mais opções e prospectando novos
              clientes no semipesado. Vamos trabalhar o semipesado como porta de
              entrada para o caminhão elétrico”, adianta.
            </p>
            <p>
              Uma boa alternativa para empresas de distribuição em cidades e
              percursos curtos, o caminhão semipesado pode ganhar destaque com a
              eletrificação. “Teremos caminhões em teste já em 2024 e para isso
              é preciso ter equipe e clientes preparados, pontos estratégicos de
              abastecimento... é o começo de uma jornada longa, que se inicia já
              no próximo ano.
            </p>
          </Paragraph>
        </Box>
        <Box>
          <img src={slideImageThree} />
          <Paragraph>
            <b>EQUIPE PREPARADA </b>
            <p>
              Com um portfólio mais amplo e diversificado, o time da P. B. Lopes
              está a postos para garantir o caminhão rodando, seja na estrada,
              cidade, ou campo, seja movido a diesel, a gás, ou com a nova
              proposta do caminhão elétrico.
            </p>
            <p>
              “Vejo com muito otimismo e bons olhos essa jornada. Quando olhamos
              para o nosso portfólio, vejo que teremos produtos para atender
              várias demandas e necessidades. Vamos começar o ano com boas
              notícias”, finaliza José Henrique de Souza Gomes.
            </p>
          </Paragraph>
        </Box>
      </Box>
      <Box>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideSeven;
