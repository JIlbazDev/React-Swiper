import React from "react";
import { Box, Button } from "@mui/material";
import SocialMedia from "./SocialMedia";

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
      backgroundColor: "#0070af",
      color: "#FFF",
    }}
  >
    {children}
  </Box>
);

const SlideTwenty = () => {
  return (
    <Box>
      <Box>
        <Paragraph>
          Os clientes de Presidente Venceslau (SP), Cesar Asugusto Apolinario
          Pinote e Leide Barbosa Silva Pinote com o Scania Zero Km. O casal
          retirou o caminhão na P. B. Lopes Regente Feijó (SP).
        </Paragraph>
        <Box
          sx={{
            backgroundColor: "#34547c",
            padding: "30px 20px",
            color: "#FFF",
            fontSize: "26px",
            lineHeight: "1.35",
          }}
        >
          <b>
            Receber as chaves de um Scania 0 Km é um momento único, de grande
            felicidade! Parabéns a todos os clientes por realizarem excelentes
            negócios com a Rede P. B. Lopes.
          </b>
        </Box>
        <Box sx={{ backgroundColor: "#299fd5" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "30px 0px 0px 0px",
            }}
          >
            <Button
              sx={{
                width: "50%",
                height: "50px",
                backgroundColor: "#0070af",
                color: "#FFF",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "15px",
              }}
            >
              CLIQUE AQUI
            </Button>
            <span>CONFIRA OUTRAS FOTOS DA ENTREGA TÉCNICA</span>
            <SocialMedia />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SlideTwenty;
