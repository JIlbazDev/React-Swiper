import React from "react";
import { Box } from "@mui/material";
import Footerimage from "../images/Slidetwentyseven/groups.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#8eb834",
      color: "#FFF",
    }}
  >
    {children}
  </Box>
);

const SlideTwentySeven = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            As mudas de ipês plantadas no Parque Ecológico de Salto Grande (SP)
            estão se desenvolvendo firmes e fortes. O plantio foi feito em
            fevereiro de 2022, com o intuito de contribuir com a criação de
            áreas arborizadas para a comunidade. A ação mobilizou alunos da rede
            pública e várias autoridades locais.
          </p>
          <p>
            “As mudas estão crescendo e estão sendo bem cuidadas pela
            prefeitura. A iniciativa de cuidado com a cidade é maravilhosa, pois
            as árvores melhoram o ambiente, tiram a poeira do ar, além de deixar
            a cidade ainda mais linda”, festeja Mayara Rigatto Correa,
            encarregada administrativa da P. B. Lopes Salto Grande (SP).
          </p>
          <p>
            O Parque Ecológico foi o local escolhido para receber os ipês por
            sediar atividades de educação ambiental, esporte e turismo
            ecológico. Lá foram plantadas 75 mudas de ipês de várias cores.{" "}
          </p>
        </Paragraph>
        <img src={Footerimage} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideTwentySeven;
