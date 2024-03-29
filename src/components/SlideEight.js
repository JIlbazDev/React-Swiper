import React from "react";
import { Box } from "@mui/material";
import SlideImage from "../images/slidenine/nine1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "30px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      backgroundColor: "#f5f6d3",
      margin: "-3px 0px",
    }}
  >
    {children}
  </Box>
);

const SlideEight = () => {
  return (
    <Box>
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
        <span>Texto: Emilia Miyazaki | Fotos: Scania do Brasil</span>
      </Box>
      <Box>
        <Paragraph>
          <p>
            Desde o mês de abril, está valendo a introdução do percentual de 12%
            de biodiesel no óleo diesel fóssil. Segundo o governo, a mistura de
            biodiesel no diesel, assim como a mistura de etanol na gasolina, foi
            instituída com o objetivo de reduzir as emissões de poluentes
            prejudiciais ao meio ambiente e à saúde da população.
          </p>
          <p>
            O diretor de desenvolvimento de negócios da Scania do Brasil,{" "}
            <mark>Marcelo Gallão</mark> , confirma que a adição de biodiesel no
            diesel contribui para a diminuição da emissão de CO2. “O biodiesel
            sendo um combustível de origem biogênica (vida animal ou vegetal) é
            composto de matérias que captaram CO2 da atmosfera, portanto, não
            utilizaram de fontes do subsolo da terra e emitiram na atmosfera.
            Assim, no ciclo total do combustível, da fonte à roda do veículo,
            tais produtos não contribuem para o aumento da concentração de CO2
            que é um gás de efeito estufa.
          </p>
        </Paragraph>
      </Box>
      <Box>
        <img src={SlideImage} />
      </Box>
      <Box>
        <Paragraph>
          <b>EFEITO ESTUFA</b>
          <p>
            O diretor de desenvolvimento de negócios reforça que o fator
            positivo da resolução é a diminuição da emissão de gases do efeito
            estufa. “Outro ponto positivo é que não demanda nenhuma adaptação de
            postos de combustível nem do transportador. A infraestrutura é a
            mesma. Já a indústria é quem deve absorver a maior parte das
            adaptações.”
          </p>
          <b>AUMENTO GRADUAL</b>
          <p>
            Em março de 2021, o Conselho Nacional de Política Energética (CNPE)
            já havia autorizado a Agência Nacional do Petróleo, Gás Natural e
            Biocombustíveis (ANP) a elevar o percentual a 13%, mas os
            percentuais começaram a valer somente neste ano e será gradualmente
            elevado até 2026: 12% em abril de 2023; 13% em abril de 2024;14% em
            abril de 2025 e 15% em abril de 2026.
          </p>
          <p>
            “Um cuidado que o fabricante de veículo tomou foi preparar seus
            sistemas de filtragem e pós-tratamento para esta mistura. A
            eficiência energética do biodiesel também é um pouco menor que o
            diesel, mas nessas proporções até 15%não terá impacto na performance
            durante a operação”, revela Marcelo Gallão.
          </p>
          <p>
            O diretor chama atenção para o cuidado que o transportador deve ter
            em relação à qualidade de combustível. “Ao estocar o combustível por
            períodos prolongados, será necessário verificar contaminação da
            parte de matéria orgânica e em alguns casos adicionar bactericidas.
          </p>
        </Paragraph>
      </Box>
      <Box>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideEight;
