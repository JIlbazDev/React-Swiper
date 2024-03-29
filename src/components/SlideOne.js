import React from "react";
import SocialMedia from "./SocialMedia";
import { Box } from "@mui/material";

const SlideOne = () => {
  const paragraphs = [
    "Estamos na reta final de 2023, um ano desafiador que respondemos com muito trabalho, foco, treinamento e capacitação, a fim de garantir o padrão P. B. Lopes de excelência no atendimento aos nossos clientes.",
    "Este ano, aliás, estivemos próximos a eles em eventos que voltaram a ser realizados de forma muito especial. Foram encontros e reencontros que contribuíram para fortalecer sobremaneira nossos laços e parcerias.",
    "Em um desses encontros, tivemos a imensa satisfação de presenciar um de nossos queridos clientes ganhar um Scania top de linha. Parabéns Joel Jaloto!!",
    "Estamos focados para entrar em 2024 destacando os lançamentos da Scania, com excelente resposta do mercado, além de outras novidades que estão por vir.",
    "Com estas e outras informações, a 44ª edição da PBNews finaliza a série especial que destaca as ações de sustentabilidade desenvolvidas pela Rede P. B. Lopes, apresentando a trajetória de 15 anos do projeto Ipê Amarelo.",
    "A iniciativa nasceu de uma semente recebida via mala direta e nos inspirou a promover atividades socioambientais. É nossa contribuição para um mundo mais sustentável, solidário e consciente.",
    "Somos uma pequena gota no oceano, mas acreditamos que estamos no caminho certo. Se toda caminhada começa com o primeiro passo, convido você, prezado leitor, a caminhar com a gente. Sigamos!",
    "A todos um feliz Natal cheio de paz e harmonia e um 2024 repleto de realizações!",
  ];
  const SideData = [
    {
      ParaNine: "Boa leitura!",
      head: "Daniela de Andrade Lopes Gomes",
      italic: "Diretora da Rede P. B. Lopes",
    },
  ];
  return (
    <Box className="Slide_One_Data">
      <Box className="slideData">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Box>
      <Box>
        {SideData.map((item, index) => (
          <Box key={index} className="SideData">
            {item.ParaNine && <p>{item.ParaNine}</p>}
            {item.head && <b>{item.head}</b>}
            {item.italic && <p>{item.italic}</p>}
          </Box>
        ))}
      </Box>
      <Box className="social_media">
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideOne;
