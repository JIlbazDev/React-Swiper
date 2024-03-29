import React from "react";
import { Box } from "@mui/material";
import students from "../images/slidethirty/students.jpg";
import studentsgroup from "../images/slidethirty/studentgroup.jpg";
import SocialMedia from "./SocialMedia";
const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#fff3d7",
    }}
  >
    {children}
  </Box>
);

const SlideTherty = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Brindes e brinquedos com personagens do Ipê Amarelo, programa
            socioambiental da Rede P. B. Lopes, foram distribuídos para as
            crianças da Paróquia Nossa Senhora da Paz, localizada na Vila
            Recreio, em Londrina (PR).
          </p>
          <p>
            A entrega foi feita em novembro, durante palestra feita pela
            ex-colaboradora da PB, <mark>Alessandra Reche</mark>, voluntária da
            paróquia e membro da Pastoral da Comunicação, para 90 crianças da
            catequese.
          </p>
        </Paragraph>
        <img src={students} />
        <Paragraph>
          <p>
            “Apresentamos os projetos que a Cáritas Arquidiocesana de Londrina
            desenvolve em vários bairros da periferia da cidade, como o projeto
            Óleo Solidário, destacando a importância da preservação do meio
            ambiente e a arrecadação do dinheiro com a venda do óleo que é
            revertida em ajuda ao próximo.
          </p>
          <p>
            Alessandra também apresentou um pouco do Projeto Ipê Amarelo e os
            personagens do Mundo Ipê Amarelo. “Sempre gostei de pautas sobre
            sustentabilidade. Acredito que, por meio da educação, principalmente
            das crianças, podemos realizar grandes ações para tornar nosso
            planeta um lugar melhor para viver.”
          </p>
          <p>
            Alessandra Reche é consultora credenciada do Sebrae/PR e foi
            colaboradora da PB por 14 anos, coordenando o Programa Ipê Amarelo
            entre 2008 e 2016.
          </p>
        </Paragraph>
        <img src={studentsgroup} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideTherty;
