import React from "react";
import { Box, Button } from "@mui/material";
import footerimage from "../images/SlideTwo/bg.png";
import SocialMedia from "./SocialMedia";

const SlideTwo = () => {
  return (
    <>
      <Box
        sx={{
          padding: "30px 20px",
          position: "relative",
          zIndex: "10",
          margin: "0 0 10px",
        }}
      >
        <Box sx={{ fontSize: "16px", lineHeight: "1.6", fontWeight: "400" }}>
          <b>EFICIÊNCIA ENERGÉTICA</b>
          <p>
            "Parabenizo todo o time P. B. Lopes pelos projetos executados em
            prol da sustentabilidade e da eficiência energética na matriz de
            transporte. Os veículos pesados a Gás Natural já são uma realidade
            no país e ações como a demonstração do ônibus 100% abastecido com o
            biometano, realizada em Londrina - tema de matérias da última edição
            da revista eletrônica -, reforçam nosso compromisso com o
            desenvolvimento das cidades por meio de energias mais limpas."
          </p>
        </Box>
        <Box>
          <b>RAFAEL LAMASTRA JR.</b>
          <p>CEO Compagas, Curptpba (PR)</p>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f4f2ec",
          padding: "30px 20px",
          margin: "0 0 10px",
        }}
      >
        <Box sx={{ fontSize: "16px", lineHeight: "1.6", fontWeight: "400" }}>
          <b>LEITURA PRAZEROSA</b>
          <p>
            “Vocês estão de parabéns. Além de um editorial primoroso, a revista
            eletrônica traz conteúdo atual, misturando informação técnica e
            diversidade com maestria. Leitura prazerosa que aproxima quem está
            inserido nesse universo essencial da mobilidade e aqueles que, ao
            lerem a revista, passam a entender de forma clara o papel essencial
            que empresas como a Scania estão desempenhando em busca de
            sustentabilidade para o negócio e o crescimento do país. Já conferi
            o conteúdo dessa nova edição e mal posso esperar para debruçar nas
            matérias que ela trouxe, que mais uma vez reforço, são de extremo
            bom gosto e despertam nos leitores a vontade de lê-las de imediato.
            Parabéns!”"
          </p>
        </Box>
        <Box>
          <b>DANIEL MARTINS.</b>
          <p>Diretor de Operações TCGL, Londrina (PR))</p>
        </Box>
      </Box>
      <Box>
        <Box sx={{ padding: "30px 20px", fontSize: "16px" }}>
          <b>SUCESSO</b>
          <p>“Parabéns à P. B. Lopes Scania. Sucesso sempre!”</p>
          <b>JOSÉ WENCESLAU</b>
          <p>
            "Cliente da N. I. da Silva Transportes Rodoviários, Maringá (PR)
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#f4f2ec",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        <Box>
          <b>SHOW</b>
          <p>
            “Show! Vai me dar ainda mais material para participar de um painel
            sobre gás em congresso.”
          </p>
          <b>LUIZ CARLOS TAONI NETO</b>
          <p>Presidente Executivo da Assobrasc, São Paulo (SP)</p>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.6",
        }}
      >
        <Box>
          <b>GATO PRETO</b>
          <p>
            “Gostei da Crônica do Seu Pedro. Acredita que tem uma música do Tião
            Carreiro e Pardinho que gosto de ouvir, que fala dessa região e da
            Fazenda Gato Preto?”
          </p>
          <b>Caçador do Ivinhema</b>
          <p>“Subi o rio Ivinhema numa canoa de remo</p>
          <p>Fui caçar no Gato Preto um lugar bão que só vendo...”</p>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>Ouça a música:</p>
            <a href="https://www.youtube.com/watch?v=4M7g7njJXJA">
              www.youtube.com/watch?v=4M7g7njJXJA
            </a>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <b>JEAN CARLOS ALVES FERREIRA</b>
            <p>Engenheiro da P. B. Lopes, Londrina (PR)</p>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#f4f2ec",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.6",
        }}
      >
        <Box>
          <b>TUDO</b>
          <p>
            “Tudo que eu queria eu tive nessa PBNews! A revista continua
            interessantíssima e repleta de coisas bonitas de se ver.”
          </p>
          <b>CAMILA VICÊNCIO</b>
          <p>Ex-P. B. Lopes, Londrina (PR)</p>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.6",
        }}
      >
        <Box>
          <b>GOSTEI</b>
          <p>
            “A revista, a cada dia, fica melhor. Gostei muito da matéria sobre a
            mobilidade sustentável, também apreciei a matéria da nossa nova
            filial em Nova Andradina, sem falar naquela receita deliciosa de
            Sangria, nesse calor, muito refrescante!”
          </p>
          <b>EDNEIA VIANNA</b>
          <p>P. B. Lopes – Matriz, Londrina (PR)</p>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#f4f2ec",
          fontSize: "16px",
          lineHeight: "1.6",
          fontWeight: "400",
        }}
      >
        <Box>
          <b>ASSUNTOS IMPORTANTES</b>
          <p>
            “Excelente a 43ª edição da Revista PBNews com assuntos bem
            importantes sobre sustentabilidade e a preocupação socioambiental
            que a Scania e a P. B. Lopes têm no segmento de transporte.
            Parabenizo também pelos esforços empenhados na inauguração de mais
            uma rede de atendimento da P. B. Lopes em Nova Andradina, que supre
            uma demanda de serviços da região e oferece oportunidades de
            empregos, geração de renda e aprendizado aos colaboradores
            contratados".
          </p>
          <b>EVA CRISTINA CHAGAS</b>
          <p>P. B. Lopes – Matriz, Londrina (PR)</p>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "16px",
          lineHeight: "1.6",
          fontWeight: "400",
        }}
      >
        <Box>
          <b>ACESSO E QUALIDADE</b>
          <p>
            “É uma importante ferramenta de comunicação, de fácil acesso e
            qualidade.”
          </p>
          <b>SERGIO GERMANOVIX</b>
          <p>Empresário, Londrina (PR)</p>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#f4f2ec",
          fontSize: "16px",
          lineHeight: "1.6",
          fontWeight: "400",
        }}
      >
        <Box>
          <b>VIDA LONGA E FÉRTIL</b>
          <p>
            “Adorei as reportagens e particularmente as atividades de plantio
            das maravilhosas hortas comunitárias, as distribuições e plantios
            dos ipês amarelos, a apresentação tão necessária, apaziguante e
            alegre da Banda Marcelino Champagnat no Calçadão e a tradicional
            sangria espanhola com a deliciosa receita da saudosa e sempre linda
            e terna Maria Cristina. Um brinde à vida, à fraternidade e ao amor
            em serviço. Vida longa e fértil a todos da P. B. Lopes!”
          </p>
          <b>SONIA JANENE</b>
          <p>Aposentada, Londrina (PR)</p>
        </Box>
      </Box>
      <Box position="relative">
        <Box
          sx={{
            backgroundImage: `url(${footerimage})`,
            backgroundSize: "cover",
            minHeight: "438px",
          }}
        >
          {/* Text and Button on top of the image */}
          <Box
            position="absolute"
            bottom="20px"
            left="50%"
            transform="translateX(-50%)"
            textAlign="center"
          >
            {/* Text */}
            <p
              style={{
                color: "#FFF",
                fontSize: "16px",
                top: "245px",
                lineHeight: "1.4em",
              }}
            >
              Campanha nacional instituída por lei em 2017, o Dezembro Vermelho
              promove a prevenção, assistência, proteção e promoção dos direitos
              humanos das pessoas que vivem com HIV/AIDS e outras infecções
              sexualmente transmissíveis. Importante: ter HIV não é o mesmo que
              ter Aids, pois há muitos soropositivos que vivem anos sem
              apresentar sintomas e sem desenvolver a doença.
            </p>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: "#8A0001",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            // justifyContent:"center",
            flexDirection: "column",
          }}
        >
          <a
            href="https://drauziovarella.uol.com.br/doencas-e-sintomas/aids/"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                width: "300px",
                backgroundColor: "#FFF",
                color: "#8A0001",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              CLIQUE AQUI
            </Button>
          </a>
          <span>E SAIBA MAIS</span>
        <SocialMedia />
        </Box>
      </Box>
    </>
  );
};

export default SlideTwo;
