import React from "react";
import { Box } from "@mui/material";
import Slideimage from "../images/slidefive/slidefivemain.jpg";
import SocialMedia from "./SocialMedia";

const SlideFour = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "16px",
          lineHeight: "1.6",
          fontWeight: "400",
        }}
      >
        <p>
          Dentro da Scania, os valores e princípios estão descritos em uma
          trilha conhecida como Scania Way, que traz entre os pilares a
          responsabilidade, juntamente com conceitos como eliminação de
          desperdício, cliente em primeiro lugar, respeito e espírito de equipe.
        </p>
        <p>
          “The Scania Way é o coração da indústria e nosso foco de buscar
          soluções sustentáveis. Estamos comprometidos em ser parte da solução”,
          informa Sara Tassinari, gerente de portfólio de projetos (PMO) e
          coordenadora do Scania Way.
        </p>
        <p>
          Por meio da implementação de estratégias que visam reduzir a emissão
          de carbono, a indústria promove práticas mais sustentáveis em todos os
          aspectos de suas operações. “Acreditamos que a sustentabilidade não é
          apenas uma responsabilidade empresarial, mas um compromisso global que
          requer o envolvimento de todos.”
        </p>
        <p>
          Para a Scania, a sustentabilidade é um valor fundamental que orienta
          as ações diárias. Por meio de projetos inovadores e ações concretas, a
          Scania une forças entre equipeparceiros e comunidade para promover
          mudanças positivas.
        </p>
      </Box>
      <Box>
        <img src={Slideimage} />
        <Box
          sx={{
            backgroundColor: "#e9eaed",
            padding: "30px 20px",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "bold",
            color: "#5a7174",
          }}
        >
          <b>
            “Eu lembro a primeira vez que ouvi falar do Projeto Ipê Amarelo da
            Rede P. B. Lopes. Fiquei impressionada com a iniciativa, uma boa
            prática valorosa. A PB sai na frente nos cuidados com o planeta”,
            <mark style={{ fontWeight: "400" }}>Sara Tassinari</mark>.
          </b>
        </Box>
      </Box>
      <Box sx={{ marginTop: "100px" }}>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default SlideFour;
