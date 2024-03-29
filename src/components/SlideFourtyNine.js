import React from "react";
import { Box } from "@mui/material";
import footer from "../images/slidefourtynine/footer.png";

const slideData = [
  {
    title: "Revista PBNews - Edição Digital  44ª edição – dezembro",
  },
  {
    title: "Direção Geral",
    para: " - P. B. Lopes & Cia. Ltda.",
  },
  {
    title: "Conselho Editorial",
    para: " - Daniela de Andrade Lopes Gomes - Débora Moreno - Emilia Miyazaki - Milton Antunes - Júlio César dos Santos Barbosa",
  },
  {
    title: "Produção",
    para: " - Doc Comunicação",
  },
  {
    title: "Jornalista Responsável",
    para: " - Emilia Miyazaki - Mtb 2868 doclondrina1@gmail.com",
  },
  {
    title: "Edição e redação",
    para: " - Milton Antunes – Mtb 2018 miltonantuneslondrina@gmail.com",
  },
  {
    title: "Fotografia",
    para: " - Acervo Rede P. B. Lopes – Emília Miyazaki - Acervo Scania",
  },
  {
    title: "Solução digital (pocket®) e projeto gráfico",
    para: " - Visualitá® Gestão em Design Estratégico e Alexandre Jorge",
  },
];

const SlideFourtyNine = () => {
  return (
    <>
      <Box sx={{ padding: "30px 20px", lineHeight: "1.6" }}>
        <Box
          sx={{
            fontSize: "16px",
          }}
        >
          {slideData.map((item, index) => (
            <div key={index}>
              <b>{item.title}</b>
              <p>{item.para}</p>
            </div>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#E8E2D2",
          padding: "30px 20px",
          fontSize: "16px",
          lineHeight: 1.6,
          fontWeight: "400",
        }}
      >
        <p>
          <b>Contato</b> - P. p. Lopes & Cia Ltda - Av. prasília, 3.126 -
          Londrina – PR • Telefones (43) 4009.0780 | 3329.0780 •
          daniela.lopes@pblopes.com.br - marketing@pblopes.com.br
        </p>
        <b>A Revista PBNews - Edição digital é uma publicação da P. B. Lopes</b>
      </Box>
      <Box>
        <img src={footer} />
      </Box>
    </>
  );
};

export default SlideFourtyNine;
