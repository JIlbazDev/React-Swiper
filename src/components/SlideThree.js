import React from "react";
import { Box } from "@mui/material";
import SlideImage from "../images/SlideThree/image5.jpg";
import groupimage from "../images/SlideThree/image6.jpg";
import groupImageTwo from "../images/SlideThree/image7.jpg";
import groupImageThree from "../images/SlideThree/image8.jpg";
import groupImagefour from "../images/SlideThree/image9.jpg";
import groupImagefive from "../images/SlideThree/image10.jpg";
import SocialMedia from "./SocialMedia";

const SlideThree = () => {
  const Data = [
    "A Revista PBNews encerra a série de reportagens sobre as boas práticas ambientais adotadas pela Rede P. B. Lopes, apresentando uma das iniciativas mais relevantes da empresa: o Ipê Amarelo.",
    "Criado em junho de 2008 para comemorar o Dia Mundial do Meio Ambiente, o Ipê Amarelo nasceu com a missão de conscientizar colaboradores, clientes e comunidade sobre a importância e o cuidado na preservação do meio ambiente, por meio de ações que reforçavam a importância de plantar e preservar árvores.",
    "“Tudo começou literalmente com uma semente . O Henrique  (diretor José Henrique de Souza Gomes)  recebeu uma  mala direta  com sementes e o convite para  plantar uma árvore . Junto a isso, meu pai sempre se empenhou em arborizar  a Fazenda Dona Amélia  Replantou  matas ciliares, recuperou   nascentes, criou alamedas , então quando o Projeto Ipê Amarelo germinou, o solo já estava  rico em experiência ”, conta a diretora da Rede P. B. Lopes,  Daniela de Andrade Lopes Gomes  ",
    "AÇÕES EM ESCALA",
    "Em parceria com o  Grupo View  , agência de publicidade que atendia a PB, o projeto foi batizado com o nome da árvore símbolo  do Brasil. “Aos poucos fomos escalando ações  por meio de palestras em escolas , criando viveiros para produção de mudas, fomentando o  envolvimento dos funcionários  e aplicando o conceito dos Rs  - Repensar, Recusar, Reduzir, Reaproveitar, Reutilizar, Reciclar e Recuperar.”     ",
  ];

  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          position: "relative",
          zIndex: "10",
          backgroundColor: "#80b93e",
          color: "#FFF",
          fontSize: "20px",
          lineHeight: "1.35",
        }}
      >
        <b>
          Projeto Ipê Amarelo, programa socioambiental da Rede P. B. Lopes,
          completa 15 anos com muitas histórias, premiações e milhares pessoas
          impactadas
        </b>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ccc",
          letterSpacing: "-0.25px",
          paddingBottom: "10px",
          paddingTop: "10px",
          color: "#666 !important",
        }}
      >
        <span>Texto: Emilia Miyazaki | Fotos: Rede P. B. Lopes</span>
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "16px",
          lineHeight: "1.6",
          fontWeight: "400",
          backgroundColor: "#fbf4d7",
        }}
      >
        <p>
          A Revista PBNews encerra a série de reportagens sobre as boas práticas
          ambientais adotadas pela Rede P. B. Lopes, apresentando uma das
          iniciativas mais relevantes da empresa: o Ipê Amarelo.
        </p>
        <p>
          Criado em junho de 2008 para comemorar o Dia Mundial do Meio Ambiente,
          o Ipê Amarelo nasceu com a missão de conscientizar colaboradores,
          clientes e comunidade sobre a importância e o cuidado na preservação
          do meio ambiente, por meio de ações que reforçavam a importância de
          plantar e preservar árvores.
        </p>

        <p>
          “Tudo começou literalmente com uma semente . O Henrique (diretor José
          Henrique de Souza Gomes) recebeu uma mala direta com sementes e o
          convite para plantar uma árvore . Junto a isso, meu pai sempre se
          empenhou em arborizar a Fazenda Dona Amélia Replantou matas ciliares,
          recuperou nascentes, criou alamedas , então quando o Projeto Ipê
          Amarelo germinou, o solo já estava rico em experiência ”, conta a
          diretora da Rede P. B. Lopes, Daniela de Andrade Lopes Gomes{" "}
        </p>
      </Box>
      <Box>
        <img src={SlideImage} />
      </Box>
      <Box
        sx={{
          padding: "30px 20px",
          fontSize: "16px",
          lineHeight: "1.6",
          fontWeight: "400",
          backgroundColor: "#fbf4d7",
        }}
      >
        <b>AÇÕES EM ESCALA</b>
        <p>
          Em parceria com o Grupo View , agência de publicidade que atendia a
          PB, o projeto foi batizado com o nome da árvore símbolo do Brasil.
          “Aos poucos fomos escalando ações por meio de palestras em escolas ,
          criando viveiros para produção de mudas, fomentando o envolvimento dos
          funcionários e aplicando o conceito dos Rs - Repensar, Recusar,
          Reduzir, Reaproveitar, Reutilizar, Reciclar e Recuperar.”{" "}
        </p>
      </Box>
      <Box>
        <img src={groupimage} />
        <Box
          sx={{
            padding: "30px 20px",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "1.6",
            backgroundColor: "#fbf4d7",
          }}
        >
          <p>
            A educação ambiental entrou efetivamente na vida dos colaboradores
            por meio do voluntariado . Movidos pelo espírito da cidadania , eles
            passaram a dedicar parte do seu tempo a diversas atividades como
            plantio de ipês, blitz para a distribuição de mudas e informativos,
            entre outras ações.
          </p>
          <p>
            “Com a evolução dos trabalhos criamos um herói, o ‘Super Amarelo’ .
            Não queríamos restringir a ação somente à empresa, queríamos
            envolver o cliente e a comunidade onde estávamos inseridos.”{" "}
          </p>
        </Box>
      </Box>

      <Box>
        <Box>
          <img src={groupImageTwo} />
        </Box>
        <Box
          sx={{
            padding: "30px 20px",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "1.6",
            backgroundColor: "#fbf4d7",
          }}
        >
          <p>
            Os desdobramentos do projeto resultaram em boas práticas como a
            criação de hortas gincanas com prêmios em escolas nos três estados
            de atuação da PB; apresentações teatrais ; projetos comunitários
            para a produção de sabão com óleo de cozinha; e a fabricação de
            ecobags a partir de banners da empresa.{" "}
          </p>
          <p>
            A parceria com o poder público viabilizou a revitalização de parques
            e praças plantio de mudas em ruas e avenidas , além da limpeza e
            recuperação de fundos de vale e outras áreas degradadas de várias
            cidades.{" "}
          </p>
        </Box>
      </Box>

      <Box>
        <Box>
          <img src={groupImageThree}></img>
        </Box>
        <Box
          sx={{
            padding: "30px 20px",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "1.6",
            backgroundColor: "#fbf4d7",
          }}
        >
          <b>RECONHECIMENTO NACIONAL</b>
          <p>
            A relevância do Projeto Ipê Amarelo ganhou projeção nacional em 2012
            , com o recebimento do Prêmio de Responsabilidade Social e
            Sustentabilidade no Varejo , concedido pelo Centro de Excelência em
            Varejo da Fundação Getúlio Vargas (GVcev).{" "}
          </p>
          <p>
            “Esta premiação mostrou que estávamos no caminho certo e nos deu
            ânimo para continuar. Em todos esses anos, passamos por processos de
            aprendizado muito importantes”, relembra Daniela Lopes. “Gostei
            muito da fase das escolas, onde podíamos falar de assuntos
            diferentes. Em uma das edições do programa, vivíamos um grande surto
            de casos de dengue . Pegamos o gancho para falar sobre saúde e como
            fazer o descarte correto do lixo. Foi uma fase muito gostosa e
            criativa.”
          </p>
        </Box>
      </Box>

      <Box>
        <Box>
          <img src={groupImagefour} />
        </Box>
        <Box
          sx={{
            padding: "30px 20px",
            fontSize: "16px",
            lineHeight: "1.6",
            fontWeight: "400",
            backgroundColor: "#fbf4d7",
          }}
        >
          <b>CONSCIÊNCIA AMBIENTAL</b>
          <p>
            Com 15 anos de história , o Projeto Ipê Amarelo segue em atividade
            com novas diretrizes, mas a premissa de plantar ou distribuir mudas
            de árvores para cada caminhão vendido continua presente.
          </p>
          <p>
            Além da doação de mudas, dentre as ações consolidadas, a PB mantém
            um viveiro de ipês em Maringá (PR); hortas nas filiais para promoção
            de hábitos saudáveis; pontos de coleta de lixo eletrônico; e
            diversas promoções solidárias como as campanhas de agasalho, fraldas
            geriátricas, material escolar e coleta de tampinhas plásticas.
          </p>

          <p>
            “O pensamento de ‘Mudar o mundo a partir de mim’ é algo presente em
            nossa organização, totalmente em sintonia com uma das premissas da
            Scania, que é ‘Fazer o correto a partir de mim’. Então se eu fizer a
            minha parte e você fizer a sua, sucessivamente, as coisas vão
            acontecer”, analisa a diretora com otimismo.
          </p>
          <p>
            A Rede P. B. Lopes realiza diversas condutas de sustentabilidade,
            obrigatórias e espontaneamente. “É uma questão conceitual. O que
            fazemos é uma gota no oceano, mas se cada um fizer um pouco,
            poderemos mudar o mundo. É o caso do Bosque dos Ipês, um projeto
            realizado em parceria com clientes. É uma ação realizada com o mesmo
            empenho e dedicação e, principalmente, com amor.
          </p>
        </Box>
      </Box>

      <Box>
        <Box>
          <img src={groupImagefive}></img>
        </Box>
        <Box>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideThree;
