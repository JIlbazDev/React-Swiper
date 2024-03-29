import React from "react";
import { Box } from "@mui/material";
import Bookimage from "../images/slidefourtyeight/book.jpg";
import Musicimage from "../images/slidefourtyeight/musicimage.jpg";
import twomenimage from "../images/slidefourtyeight/twomens.jpg";
import menimage from "../images/slidefourtyeight/mens.jpg";
import SocialMedia from "./SocialMedia";

const SlideFourtyEight = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "30px 0px 0px 0px",
        }}
      >
        <Box
          sx={{
            width: "80%",
          }}
        >
          <img src={Bookimage} className="bookimg" />
        </Box>
        <Box>
          <b
            style={{
              fontSize: "40px",
              fontWeight: "800",
              textAlign: "right",
              letterSpacing: "-1px",
              color: "#666",
            }}
          >
            LIVRO
          </b>
        </Box>
      </Box>

      <Box sx={{ padding: "30px 20px" }}>
        <strong style={{ fontSize: "18px" }}>
          SAPIENS - UMA BREVE HISTÓRIA DA HUMANIDADE*
        </strong>
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#000",
            lineHeight: "1.6",
          }}
        >
          <p>
            Autor: <b>Yuval Noah Harari</b>
          </p>
          <p>
            Editora: : <b>L&PM</b>
          </p>
          <p>
            Páginas: : <b>464</b>
          </p>
          <p>
            O que possibilitou ao <em>Homo sapiens</em> subjugar as demais
            espécies? O que nos torna capazes das mais belas obras de arte, dos
            avanços científicos mais impensáveis e das mais horripilantes
            guerras? Somos a única espécie que acredita em coisas que não
            existem na natureza, como estados, dinheiro e direitos humanos.
            Partindo dessa ideia, Yuval Noah Harari, doutor em história pela
            Universidade de Oxford, aborda em “Sapiens – Uma breve história da
            Humanidade” sob uma perspectiva inovadora. Explica que o capitalismo
            é a mais bem-sucedida religião, que o imperialismo é o sistema
            político mais lucrativo, e que nós, humanos modernos, embora sejamos
            muito mais poderosos que nossos ancestrais, provavelmente não somos
            mais felizes.
          </p>
          <hr />
          <small>*O livro faz parte da Biblioteca Pedro Barboza Lopes</small>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ac6e29",
          padding: "30px 20px",
        }}
      >
        <Box>
          <h1
            style={{
              color: "#FFF",
              fontSize: "40px",
              fontWeight: "800",
              letterSpacing: "-1px",
              textAlign: "right",
            }}
          >
            MÚSICA
          </h1>
        </Box>
        <img src={Musicimage} />
        <Box
          sx={{
            color: "#FFF",
            margin: "20px 0px 0px 0px",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          <strong style={{ fontWeight: "bold" }}>QUARANTINED QUARTET</strong>
          <p>
            Integrantes: <b>Jason e Elysa (pais) e Joseph e Noah (filhos)</b>
          </p>
          <p>
            País: <b>Estados Unidos</b>
          </p>
          <p>
            Uma família de Nova York resolveu passar o tempo do isolamento
            social usando suas habilidades com violão e guitarra para montar a
            banda “Quarantined Quartet”. Jason e Elysa são casados e músicos
            profissionais. Os filhos, Joseph, de 10 anos, e Noah, de 8, sempre
            tocaram violão, mas nunca junto com os pais. O quarteto começou a
            pandemia com pouco mais de 50 seguidores e hoje acumula 230 mil fãs
            nas redes sociais. Com a volta a rotina e as crianças indo pra
            escola, a família ensaia menos, mas continua compondo durante a
            noite.
          </p>
        </Box>
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/watch?v=ig_dsfja0dg"
        ></iframe>
      </Box>
      <Box
        sx={{
          backgroundColor: "#dfdfd6",
          padding: "30px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "60%" }}>
            <img src={twomenimage} style={{ width: "100%" }} />
          </Box>
          <Box>
            <b
              style={{
                fontSize: "40px",
                fontWeight: "800",
                textAlign: "right",
                letterSpacing: "-1px",
              }}
            >
              FILME
            </b>
          </Box>
        </Box>
        <Box
          sx={{
            margin: "20px 0px 0px 0px",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          <strong style={{ fontWeight: "bold" }}>SOM DA LIBERDADE</strong>
          <p>
            Direção: <b> Alejandro Monteverde</b>
          </p>
          <p>
            Duração: <b> 130 min</b>
          </p>
          <p>
            Elenco: <b> Jim Caviezel, Mira Sorvino, Eduardo Verástequi</b>
          </p>
          <p>
            Classificação: <b> 16 anos</b>
          </p>
          <p>
            Distribuição: <b>Angel Studios</b>
          </p>
          <p>
            Um dos filmes mais polêmicos de 2023, e que vem batendo recordes de
            bilheteria em todo o mundo. O diretor mexicano Alejandro Monteverde
            mescla drama com ação para contar uma história potente e
            extremamente dolorosa. A história real do ex-agente especial do
            governo americano Tim Ballard, que embarca em uma missão arriscada
            para resgatar crianças vítimas de tráfico infantil. Na Colômbia,
            Ballard decide deixar seu cargo no governo para seguir em busca da
            quadrilha em sua jornada que agora, se torna pessoal. Por apresentar
            uma trama baseada em fatos reais, a obra dividiu a opinião do
            público e da crítica. Mas, a verdade inegável é que o enredo conta
            uma tragédia que merece atenção.
          </p>
        </Box>
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/watch?v=ig_dsfja0dg"
        ></iframe>
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#799ea6",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "60%" }}>
            <img src={menimage} />
          </Box>
          <Box>
            <b
              style={{
                fontSize: "40px",
                fontWeight: "800",
                textAlign: "right",
                letterSpacing: "-1px",
                color: "#FFF",
              }}
            >
              SÉRIE
            </b>
          </Box>
        </Box>
        <Box
          sx={{
            margin: "20px 0px 0px 0px",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#FFF",
          }}
        >
          <strong style={{ fontWeight: "bold" }}>
            COMO VIVER ATÉ OS 100: OS SEGREDOS DAS ZONAS AZUIS*
          </strong>
          <p>
            Gênero: <b> Documentário</b>
          </p>
          <p>
            Direção: <b> Clay Jeter</b>
          </p>
          <p>
            Episódios: <b>4</b>
          </p>
          <p>
            Ano: <b> 2023</b>
          </p>
          <p>
            Distribuição: <b>Angel Studios</b>
          </p>
          <p>
            Em “Como Viver até os 100”, o escritor americano Dan Buettner viaja
            a cinco “zonas azuis”, onde vivem as populações mais longevas do
            mundo, para desvendar os segredos dos centenários. Buettner
            entrevista idosos e especialistas que residem em Okinawa (Japão),
            Sardenha (Itália), Loma Linda (Estados Unidos), Icária (Grécia) e na
            Península de Nicoya (Costa Rica). Cada local possui uma cultura
            muito rica e singular; alguns senhores vivem em áreas urbanas e
            outros em locais afastados e mais próximos da natureza. O programa
            apresenta imagens de tirar o fôlego, além de ensinar ao espectador
            um pouco mais sobre o mundo em que vive.
          </p>
          <em>
            *Dica do gerente geral da P. B. Lopes Campo Grande, Fábio Henrique
            Rezende.{" "}
          </em>

          <iframe
            width="100%"
            height="200px"
            src="https://www.youtube.com/watch?v=ig_dsfja0dg"
          ></iframe>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#45747b",
          padding: "30px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column",
          color:"#FFF"
        }}
      >
        <h2>FALE CONOSCO</h2>
        <p>Clique aqui para enviar sua dúvida, crítica, elogio ou sugestão</p>
      </Box>
      <SocialMedia />
    </>
  );
};

export default SlideFourtyEight;
