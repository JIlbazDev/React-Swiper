import React from "react";
import { Box } from "@mui/material";
import labourimage from "../images/slidesixteen/labourimage.jpg";
import labour from "../images/slidesixteen/labourrs.jpg";
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

const SlideSixteen = () => {
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
          margin: "-3px 0px",
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
            Os motoristas da BP Bunge de Ponta Porã (MS), uma das maiores
            empresas do setor de bioenergia do país, passaram por um treinamento
            criado sob medida pela Rede P. B. Lopes para aprimorar o transporte
            da cana de açúcar, do campo até a usina. O workshop, realizado no
            final de setembro, durante a colheita da cana, focou na economia de
            combustível e manutenção da frota.
          </p>
        </Paragraph>
      </Box>
      <Box>
        <img src={labourimage} />
        <Paragraph>
          <p>
            “O cliente vinha tendo um elevado custo de manutenção em decorrência
            da utilização incorreta de seus equipamentos, o que gerou danos
            prematuros nos veículos, somado ao consumo de combustível que não
            estava na máxima eficiência que um Scania pode oferecer”, relata{" "}
            <mark>Alisson Lemos dos Santos</mark> , gerente de serviços da P. B.
            Lopes Dourados (MS).
          </p>
          <p>
            O treinamento foi realizado durante a colheita da cana de açúcar.
            Além da economia substancial de combustível e a redução das
            necessidades do serviço de manutenção, foram abordados temas como
            segurança na estrada, desgastes dos pneus e do trem de força e a
            emissão de poluentes. Com novos conteúdos, os motoristas aprenderam
            na prática como realmente aproveitar ao máximo os caminhões Scania
            em suas operações e em rotas específicas.
          </p>
          <p>
            “A ação teve um feedback positivo e já trouxe retorno ao cliente. O
            treinamento foi muito bem recebido pelos motoristas, que se sentiram
            valorizados e seu trabalho potencializado”, avalia Alisson.
          </p>
        </Paragraph>
      </Box>
      <Box>
        <img src={labour} />
        <Paragraph>
          <b>BP BUNGE BIOENERGIA</b>
          <p>
            A BP Bunge é uma das empresas líderes no Brasil nos mercados de
            etanol, bioeletricidade e açúcar. É um cliente antigo da Rede P. B.
            Lopes e hoje opera com a maior parte da frota com veículos alugados.
          </p>
          <p>
            A empresa nasceu no final de 2019, a partir da união dos negócios de
            bioenergia e açúcar dos grupos BP (British Petroleum Company) e
            Bunge. Conta com mais de 8 mil colaboradores e 6 mil parceiros,
            entre profissionais indiretos e fornecedores. Possui 11 unidades,
            distribuídas em cinco estados brasileiros.
          </p>
        </Paragraph>
        <hr />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideSixteen;
