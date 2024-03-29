import { Box } from "@mui/material";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import SidebarImageOne from "../../sidebarImages/sidebarone.jpg";
import SidebarImageTwo from "../../sidebarImages/sidebar2.jpg";
import SidebarImageThree from "../../sidebarImages/sidebar3.jpg";
import SidebarImagefour from "../../sidebarImages/sidebar4.jpg";
import SidebarImagefive from "../../sidebarImages/sidebar5.jpg";
import SidebarImagesix from "../../sidebarImages/sidebar6.jpg";
import SidebarImageseven from "../../sidebarImages/sidebar7.jpg";
import SidebarImageeight from "../../sidebarImages/sidebar8.jpg";
import SidebarImagenine from "../../sidebarImages/sidebar9.jpg";
import SidebarImageten from "../../sidebarImages/sidebar10.jpg";
import SidebarImageeleven from "../../sidebarImages/sidebar11.jpg";
import SidebarImagetwele from "../../sidebarImages/sidebar12.jpg";
import SidebarImagetherteen from "../../sidebarImages/sidebar13.jpg";
import SidebarImagefourteen from "../../sidebarImages/sidebar14.jpg";
import SidebarImagefifteen from "../../sidebarImages/sidebar15.jpg";
import SidebarImagesixteen from "../../sidebarImages/sidebar16.jpg";
import SidebarImageseventeen from "../../sidebarImages/sidebar17.jpg";
import SidebarImageeighteen from "../../sidebarImages/sidebar18.jpg";
import SidebarImagenineteen from "../../sidebarImages/sidebar19.jpg";
import SidebarImagetwenty from "../../sidebarImages/sidebar20.jpg";
import SidebarImagetwentyone from "../../sidebarImages/sidebar21.jpg";
import SidebarImagetwentytwo from "../../sidebarImages/sidebar22.jpg";
import SidebarImagetwentythree from "../../sidebarImages/sidebar23.jpg";
import SidebarImagetwentyfour from "../../sidebarImages/sidebar24.jpg";
import SidebarImagetwentyfive from "../../sidebarImages/sidebar25.jpg";
import SidebarImagetwentysix from "../../sidebarImages/sidebar26.jpg";
import SidebarImagetwentyseven from "../../sidebarImages/sidebar27.jpg";
import SidebarImagetwentyeight from "../../sidebarImages/sidebar28.jpg";
import SidebarImagetwentynine from "../../sidebarImages/sidebar29.jpg";
import SidebarImagetherty from "../../sidebarImages/sidebar30.jpg";
import SidebarImagethertyone from "../../sidebarImages/sidebar31.jpg";
import SidebarImagethertytwo from "../../sidebarImages/sidebar32.jpg";
import SidebarImagethertythree from "../../sidebarImages/sidebar33.jpg";
import SidebarImagethertyfour from "../../sidebarImages/sidebar34.jpg";
import SidebarImagethertyfive from "../../sidebarImages/sidebar35.jpg";
import SidebarImagethertysix from "../../sidebarImages/sidebar36.jpg";
import SidebarImagethertyseven from "../../sidebarImages/sidebar37.jpg";
import SidebarImagethertyeight from "../../sidebarImages/sidebar38.jpg";
import SidebarImagethertynine from "../../sidebarImages/sidebar39.jpg";
import SidebarImagefourty from "../../sidebarImages/sidebar40.jpg";
import SidebarImagefourtyone from "../../sidebarImages/sidebar41.jpg";
import SidebarImagefourtytwo from "../../sidebarImages/sidebar42.jpg";
import SlideFourtyEight from "../SlideFourtyEight";
const SlideData = [
  {
    id: 1,
    image: SidebarImageOne,
    para: "EDITORIAL",
    heading: "A palavra da diretora",
    link: "/SlideFourtyEight",
  },
  {
    id: 2,
    image: SidebarImageTwo,
    para: "CARTAS",
    heading: "Feedback dos leitores",
  },
  {
    id: 3,
    image: SidebarImageThree,
    para: "ESPECIAL",
    heading: "A semente que germinou e floresceu",
  },
  {
    id: 4,
    image: SidebarImagefour,
    para: "ESPECIAL",
    heading: "A pegada ambiental da Scania",
  },
  {
    id: 5,
    image: SidebarImagefive,
    para: "ESPECIAL",
    heading: "Floresta Scania conta com 186 mil árvores nativas",
  },
  {
    id: 6,
    image: SidebarImagesix,
    para: "PRODUTOS E SERVIÇOS",
    heading: "Otimismo para 2024",
  },
  {
    id: 7,
    image: SidebarImageseven,
    para: "PRODUTOS E SERVIÇOS",
    heading: "Governo autoriza aumento gradativo de biodiesel no diesel",
  },
  {
    id: 8,
    image: SidebarImageeight,
    para: "NEGÓCIOS",
    heading: "Tapete vermelho para o cliente",
  },
  {
    id: 9,
    image: SidebarImagenine,
    para: "NEGÓCIOS",
    heading: "Semana Halloween tem ofertas “assustadoras”",
  },
  {
    id: 10,
    image: SidebarImageten,
    para: "NEGÓCIOS",
    heading: "Black Friday com cashback",
  },
  {
    id: 11,
    image: SidebarImageeleven,
    para: "NEGÓCIOS",
    heading: "Clientes e colaboradores visitam fábrica da Scania",
  },
  {
    id: 12,
    image: SidebarImagetwele,
    para: "NEGÓCIOS – CLIENTES",
    heading: "Ebmac comemora 20 anos de transporte",
  },
  {
    id: 13,
    image: SidebarImagetherteen,
    para: "CLIENTES - TREINAMENTO",
    heading: "Motoristas da BP Bunge recebem treinamento",
  },
  {
    id: 14,
    image: SidebarImagefourteen,
    para: "CLIENTES - PERFIL",
    heading: "Um sonho realizado",
  },

  {
    id: 15,
    image: SidebarImagefifteen,
    para: "CLIENTES - SOCIAL",
    heading: "Scania no Chá Revelação",
  },
  {
    id: 16,
    image: SidebarImagesixteen,
    para: "RENTABILIDADE COMPROVADA",
    heading: "Transportadora 3D aprova a economia ",
  },
  {
    id: 17,
    image: SidebarImageseventeen,
    para: "ENTREGA TÉCNICA",
    heading: "A Chave da Felicidade ",
  },
  {
    id: 18,
    image: SidebarImageeighteen,
    para: "CONSÓRCIO SCANIA",
    heading: "Cliente de Maringá ganha Scania Zero Km em sorteio",
  },

  {
    id: 19,
    image: SidebarImagenineteen,
    para: "CONSÓRCIO SCANIA",
    heading: "O destino preferido dos pescadores",
  },
  {
    id: 20,
    image: SidebarImagetwenty,
    para: "CRÔNICAS DE SEU PEDRO",
    heading: "Consórcio Scania",
  },

  {
    id: 21,
    image: SidebarImagetwentyone,
    para: "MEIO AMBIENTE",
    heading: "P. B. Lopes Campo Grande ganha praça com ipês",
  },
  {
    id: 22,
    image: SidebarImagetwentytwo,
    para: "MEIO AMBIENTE",
    heading: "Plantio de ipê na sede da Scania",
  },

  {
    id: 23,
    image: SidebarImagetwentythree,
    para: "MEIO AMBIENTE",
    heading: "Crescendo e desenvolvendo",
  },

  {
    id: 24,
    image: SidebarImagetwentyfour,
    para: "PB SOCIOAMBIENTAL",
    heading: "Reciclagem & Solidariedade",
  },
  {
    id: 25,
    image: SidebarImagetwentyfive,
    para: "PB SOCIOAMBIENTAL",
    heading: "Apoio às boas práticas",
  },
  {
    id: 26,
    image: SidebarImagetwentysix,
    para: "NOTÍCIAS DA CASA - TREINAMENTO",
    heading: "Workshop com Master Drivers promove a troca de experiência",
  },

  {
    id: 27,
    image: SidebarImagetwentyseven,
    para: "NOTÍCIAS DA CASA - TREINAMENTO",
    heading: "Capacitação para equipe técnica",
  },
  {
    id: 28,
    image: SidebarImagetwentyeight,
    para: "NOTÍCIAS DA CASA",
    heading: "Scania reúne sua equipe de vendas",
  },

  {
    id: 29,
    image: SidebarImagetwentynine,
    para: "NOTÍCIAS DA CASA",
    heading: "Marketing debate ações e compartilha ideias",
  },
  {
    id: 30,
    image: SidebarImagetherty,
    para: "NOTÍCIAS DA CASA",
    heading: "Convenção da Assobrasc é realizada no Chile",
  },
  {
    id: 31,
    image: SidebarImagethertyone,
    para: "NOTÍCIAS DA CASA",
    heading: "Campanha solidária arrecada 9.352 fraldas",
  },
  {
    id: 32,
    image: SidebarImagethertytwo,
    para: "NOTÍCIAS DA CASA",
    heading: "Sorvete para refrescar o calor",
  },

  {
    id: 33,
    image: SidebarImagethertythree,
    para: "NOTÍCIAS DA CASA",
    heading: "Uma experiência que se transformou em livro",
  },

  {
    id: 34,
    image: SidebarImagethertyfour,
    para: "NOTÍCIAS DA CASA",
    heading: "Prevenção e autocuidado",
  },
  {
    id: 35,
    image: SidebarImagethertyfive,
    para: "NOTÍCIAS DA CASA",
    heading: "Pix da saúde",
  },
  {
    id: 36,
    image: SidebarImagethertysix,
    para: "NOTÍCIAS DA CASA",
    heading: "Em busca de talentos",
  },

  {
    id: 37,
    image: SidebarImagethertyseven,
    para: "NOTÍCIAS DA CASA",
    heading: "Homenagem a Eloize",
  },

  {
    id: 38,
    image: SidebarImagethertyeight,
    para: "NOTÍCIAS DA CASA",
    heading: "Chegou a aposentadoria",
  },

  {
    id: 39,
    image: SidebarImagethertynine,
    para: "SOCIAL",
    heading: "Colaboradores: aniversário de tempo de casa",
  },
  {
    id: 40,
    image: SidebarImagefourty,
    para: "NOTÍCIAS DA CASA",
    heading: "Chegou a aposentadoria",
  },

  {
    id: 41,
    image: SidebarImagefourtyone,
    para: "RECEITA",
    heading: "Farofa de abacaxi",
  },

  {
    id: 42,
    image: SidebarImagefourtytwo,
    para: "DIVERSÃO",
    heading: "Dicas de livro, filme, música e série ",
  },
];

export default (props) => {
  return (
    <Menu {...props}>
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "auto",
        textAlign: "left",
        padding: " 0px 0 0 20px",
        fontSize: "36px",
        fontWeight: "800",
        fontFamily: "Flexo",
        letterSpacing: " -0.02em",
      }}
    >
      <span>ÍNDICE</span>
    </Box>

    <Box
      sx={{
        display: "grid !important",
        gridTemplateColumns: "1fr 1fr",
        margin: "30px 0px 0px 0px",
        gap: "10px",
      }}
    >
      {SlideData.map((slide) => (
        <a key={slide.id} href={slide.link}>
          <Box
            key={slide.id}
            sx={{
              maxWidth: "150px",
              height: "200px",
              backgroundColor: "#e4e4e4",
            }}
          >
            <img
              src={slide.image}
              className="sidebarimage"
              alt={slide.heading}
            />
            <Box
              sx={{
                fontSize: "12px",
                backgroundColor: "#0071B0",
                margin: "-4px 0px",
                padding: "0px 10px",
              }}
            >
              <span>{slide.para}</span>
            </Box>
            <Box
              sx={{
                padding: "10px 1px",
                color: "#000",
                fontSize: "14px",
              }}
            >
              <b>{slide.heading}</b>
            </Box>
            <Box sx={{ textAlign: "right", flex: "end" }}>
              <a href={slide.link} style={{ fontSize: "12px" }}>
                Leia mais
              </a>
            </Box>
          </Box>
        </a>
      ))}
    </Box>
  </Menu>
  );
};
