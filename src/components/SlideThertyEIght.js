import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/Slidethertyeight/31.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#dddbda",
    }}
  >
    {children}
  </Box>
);

const SlideThertyEIght = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#0f4d99",
          margin: "-3px 0px",
          fontSize: "26px",
          lineHeight: "1.35",
          backgroundColor: "#5f646c",
          color: "#FFF",
        }}
      >
        <b>
          Colaborador Daniel Consolin Ribeiro lança livro que aborda a dor da
          perda, a descrença e a fé em Deus
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
        <span>Texto: Emilia Miyazaki | Fotos: Rede P. B. Lopes</span>
      </Box>
      <Box>
        <Paragraph>
          <p>
            Os dias de sofrimento e de angústia causados pela pandemia da
            Covid-19 mobilizaram o consultor técnico Daniel Consolin Ribeiro, da
            P. B. Lopes Salto Grande (SP), para escrever sobre a experiência que
            a fé em Deus proporcionou. O resultado se concretizou no livro
            Desbravando o Caminho de Deus”, lançado em setembro, em Ourinhos
            (SP).
          </p>
          <p>
            “Foi um dia especial para receber muitos amigos, irmãos, família e
            celebrarmos juntos, o amor de Deus representado através dessa
            leitura”, relembra o autor.
          </p>
          <p>
            Em sua primeira experiência literária, Daniel Consolin relata como
            Deus o inspirou. “Em momentos de muito deserto em minha vida
            pessoal, Deus se revelou para mim, me inspirando a escrever para
            ajudar outras pessoas que, assim como eu, perderam entes queridos
            para a Covid-19, para ajudá-las a se recuperarem de seus sentimentos
            e frustrações que, por vezes, se arrastam em nossos corações.”
          </p>
          <b>CURAS EMOCIONAIS</b>
          <p>
            Colaborador da PB há oito anos, Daniel conta que está muito feliz
            com a repercussão do livro, que alcançou muitas cidades do Brasil.
            “Ele está inclusive rompendo fronteiras e chegando a países da
            Europa e na Irlanda . O maior resultado é saber de pessoas que já
            leram e que o livro foi uma ferramenta para ajudá-las em suas curas
            emocionais
          </p>
          <p>
            Quem quiser adquirir o livro “Desbravando o Caminho de Deus” precisa
            entrar em contato com o autor pelo WhatsApp (14) 99781-5151, ou
            pelas redes @daniel_consolim. Em breve, o volume estará disponível
            em outras plataformas e livrarias.
          </p>
        </Paragraph>
        <img src={footerimage} />
        <Box sx={{
           padding: "30px 20px",
           backgroundColor: "#0f4d99",
           margin: "-3px 0px",
           fontSize: "18px",
           lineHeight: "1.35",
           backgroundColor: "#6e441a",
           color: "#FFF",
        }}>
          <b>TRECHO DO LIVRO</b>
          <br />
          <br />
          <i>
            “Às vezes, nossos inimigos parecem ser tão mais fortes do que nós,
            mas o maior adversário que temos que vencer, somos nós mesmos. O
            medo, a dor, a angustia, a aflição, usurpam e travam nossas vitórias
            emocionais. Entenda uma coisa, Jesus elaborou todos os planos
            perfeitos, inclusive aquele que para nós, é o mais difícil de
            enfrentar: a separação por uma morte de alguém querido. Para este
            que se foi, ele venceu seu último inimigo, a morte. Para nós que
            ficamos, temos um Guerreiro que nos ajuda a guerrear, temos um
            Consolador que diz para nossas almas: Aquieta-te, espera em Deus!
            Portanto, aprenda o segredo de todos esses homens de fé apresentados
            neste capítulo: Você não está sozinho. O Senhor está à frente de
            suas batalhas, guerreando por você e para você! Guarde o seu coração
            e não aflija sua alma, pois o nosso Deus venceu o mundo, e nós
            venceremos também.”
          </i>
        </Box>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertyEIght;
