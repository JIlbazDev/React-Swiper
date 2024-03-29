import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/slidethertyfive/28.noticias1_1.jpg";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#eee",
    }}
  >
    {children}
  </Box>
);

const SlideThertyFive = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          <p>
            Localizada no vale chileno ao lado da cordilheira dos Andes, a
            capital Santiago foi o destino da Convenção da Associação Brasileira
            dos Concessionários Scania (Assobrasc), evento que reuniu todos os
            titulares entre 21 e 25 de setembr
          </p>
          <p>
            A P. B. Lopes marcou presença com seus diretores: Daniela e José
            Henrique de Souza Gomes, e Antonio Zapatosni. “Foram vários dias de
            trabalho e passeio. Um bom tempo de convivência juntos para
            conversar, descontrair e trocar ideias”, relata Daniela de Andrade
            Lopes Gomes.
          </p>
        </Paragraph>
        <img src={footerimage} />
        <Paragraph>
          <b>FOCO NO CLIENTE</b>
          <p>
            Entre experiências de criação de vinhos e passeios, o grupo também
            se reuniu com a direção da Scania, que apresentou a visão
            estratégica para o próximo biênio 2024/2025. “O presidente Simone
            Montagna trouxe uma importante mensagem com a premissa de , ou Foco
            no Cliente.”
          </p>
          <p>
            A proposta é colocar o cliente em 1º lugar durante toda a
            experiência dele com a marca. “O cliente passa por vários pontos de
            contato com o produto: na área de comercialização, serviços,
            revenda, contratos de manutenção, pós venda. Tudo isso faz parte da
            história do cliente junto à marca e ela tem que ser vitoriosa, com
            satisfação realmente percebida.
          </p>
        </Paragraph>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideThertyFive;
