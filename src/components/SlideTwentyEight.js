import React from "react";
import { Box } from "@mui/material";
import footerimage from "../images/SlideTwentyEight/22.socioambiental1_1.jpg";
import  footer from "../images/SlideTwentyEight/22.socioambiental1_122.jpg"

const Paragraph = ({ children }) => (
  <Box
    sx={{
      padding: "10px 20px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontWeight: "400",
      margin: "-3px 0px",
    }}
  >
    {children}
  </Box>
);
const SlideTwentyEight = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "30px 20px",
          backgroundColor: "#39a349",
          margin: "-3px 0px",
          fontSize: "26px",
          lineHeight: "1.35",
          color: "#FFF",
        }}
      >
        <b>
          Projetada para o lazer e descanso, o espaço é uma homenagem a Rodrigo
          de Andrade Lopes
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
        <span>Texto: Milton Antunes | Fotos: Rede P. B. Lopes</span>
      </Box>
      <Box>
        <Paragraph>
          <p>
            A Campanha das Tampinhas fomentada pela Rede P. B. Lopes conquistou
            clientes e colaboradores, mudou hábitos e está beneficiandoquatro
            entidades assistenciais – duas no Paraná e outras duas no estado de
            São Paulo. Outra vantagem gigante é a redução do impacto do plástico
            no meio ambiente, uma vez que todo o material arrecadado é doado
            para entidades que posteriormente encaminham para empresas de
            reciclagem.
          </p>
          <p>
            Cálculos indicam que o plástico demora entre 400 e 500 anos para se
            decompor. Emtrês anos de campanha foram recolhidos pela Rede P. B.
            Lopes 1.484,810 kg de tampinhas. Isso representa quase uma tonelada
            e meia de plástico que retornou para a indústria da reciclagem e se
            transformou em novos produtos – ao invés de ir para aterros e
            lixões.
          </p>
        </Paragraph>
        <img src={footerimage} />
        <Paragraph>
          <b>LONDRINA</b>
          <p>
            Na P. B. Lopes Londrina (PR), as últimas doações somaram 388 kg. O
            conteúdo arrecadado é destinado ao Projeto Ninho, que atende
            gestantes carentes, fornecendo às mães um kit para os bebês com
            banheira, mamadeira, chupeta, roupas etc. A filial, que desde o
            início da campanha já havia enviado 766,350 kg, atingiu a marca
            total de1.154,350 kg.
          </p>
          <p>
            A iniciativa criou uma corrente do bem. “É uma excelente campanha,
            que cuida do meio ambiente e, ao mesmo tempo, cuida das pessoas que
            estão chegando ao mundo”, informa Glaucia de Oliveira Geromel,
            gerente administrativa contábil da P. B. Lopes Londrina (PR).
          </p>
        </Paragraph>
        <Box
          sx={{
            padding: "10px 20px",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "400",
            margin: "-3px 0px",
            backgroundColor: "#ebdd20",
          }}
        >
          <b>MARINGÁ</b>
          <p>
            O material coletado pela P. B. Lopes Maringá é destinado ao Projeto
            Tampinha Solidária, de Curitiba (PR), mantido pela Associação das
            Acácias da Emiliano Perneta (AAEP). O objetivo da ONG é obter
            recursos com a comercialização das tampinhas para adquirir fraldas
            geriátricas e depois destiná-las a lares de idosos carentes,
            previamente selecionados e registrados.
          </p>
          <p>
            Desde dezembro de 2020 até agosto de 2022 a filial já tinha
            arrecadado e doado 64,100 kg. As últimas doações somaram mais 43,260
            kg,totalizando 107,360 kg. O material foi enviado para Curitiba (PR)
            com o apoio da empresa Rumo Logística, parceira na campanha.
          </p>
          <p>
            “É um simples gesto, que gera grandes resultados”, analisa Patrícia
            Peres Sartori Belmonte, assistente comercial da filial de Maringá.
            “É como plantar árvore: o plantio é simples, mas depois que cresce,
            sua sombra protege e seus frutos alimenta quem precisa.”{" "}
          </p>
        </Box>
        <Box
          sx={{
            padding: "10px 20px",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "400",
            margin: "-3px 0px",
            backgroundColor: "#bfe0f1",
          }}
        >
          <b>SALTO GRANDE</b>
          <p>
            Na P. B. Lopes Salto Grande, o material arrecadado é doado à Apae de
            Ourinhos (SP), entidade que presta atendimento às pessoas com
            deficiência mental, autismo e famílias. A Apae repassa o material ao
            Projeto Tampinha Legal, programa socioambiental da indústria de
            transformação do plástico que recebe, vende e depois destina os
            recursos para as entidades.
          </p>
          <p>
            Os colaboradores começaram a juntar tampinhas de plástico em abril
            de 2021 e já tinham coletados 8 kg. Na última doação, foram mais
            3,500 kg, totalizando 11,500 kg.
          </p>
          <p>
            “É uma prática que começa no dia a dia, abandonando a hábito de
            jogar as tampinhas plásticas fora e passando a guardá-las, para
            destinar à campanha. A ação social do projeto é voltada
            exclusivamente em fazer o bem ao próximo”, festeja Mayara Rigatto
            Correa, encarregada administrativa da filial de Salto Grande.
          </p>
        </Box>
        <Box
          sx={{
            padding: "10px 20px",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "400",
            margin: "-3px 0px",
            backgroundColor: "#e5eeac",
          }}
        >
          <b>REGENTE FEIJÓ</b>
          <p>
            Na P. B. Lopes Regente Feijó, a campanha já havia arrecadado 207,500
            kg de tampinhas plásticas, que foram doados à Sabesp, Companhia de
            Saneamento de São Paulo, que comercializa o material e depois
            repassa os valores ao Hospital de Esperança de Presidente Prudente
            (SP). O hospital utiliza os recursos para adquirir suplementos
            alimentícios, destinados aos pacientes com câncer.
          </p>
          <p>
            Na última doação, o material coletado somou 4,100 kg, totalizando
            211,600 kg desde o início da campanha. Além disso, foram coletadas e
            doadas duas garrafas pet cheias de lacres de latinhas.{" "}
          </p>
          <p>
            “Estamos incentivando a reciclagem, exercendo a boa cidadania e não
            estamos deixando estas tampinhas irem para aterros e rios”, informa
            Eliana Cristina de Souza, supervisora administrativa da filial. “E
            ainda contribuímos para o bem maior, a saúde do nosso planeta, e
            beneficiando pessoas que precisam de uma mão amiga em um momento
            difícil.”
          </p>
        </Box>
        <img src={footer} />
      </Box>
    </Box>
  );
};

export default SlideTwentyEight;
