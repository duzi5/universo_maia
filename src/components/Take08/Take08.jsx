import React, { useEffect, useState, useRef } from "react";
import "./Take08.scss";
import CogusAzuis from "./coguTake8.png";
import matrix from "../matrix.png";
import { TbMushroomFilled } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";
import gsap, { random } from "gsap";
import poder from "./cogumeloPoderTexto.png";
import { InfoPage } from "../InfoPage/InfoPage";
import { FaCaretSquareDown } from "react-icons/fa";

const Take08 = () => {
  const [showText, setShowText] = useState({
    porqueCogumelos: false,
    curaAncestral: false,
    medicinaTradicional: false,
    comoCogumelar: false,
    coguComTerapia: false,
  });
  const [rotateIcon, setRotateIcon] = useState({
    curaAncestral: false,
    medicinaTradicional: false,
    comoCogumelar: false,
    coguComTerapia: false,
  });

  const toggleText = (section) => {
    setShowText(prevState => {
      const newShowText = { ...prevState, [section]: !prevState[section] };
      setRotateIcon(prevRotate => ({
        ...prevRotate, 
        [section]: !prevRotate[section]
      }));
      return newShowText;
    });
  }
  const curaAncestralRef = useRef();
  const medicinaTradicionalRef = useRef();
  const comoCogumelarRef = useRef();
  const coguComTerapiaRef = useRef();




  useEffect(() => {
    // Função para atualizar a rotação do ícone
    const updateIconRotation = (iconId, shouldRotate) => {
      const iconElement = document.getElementById(iconId);
      if (iconElement) {
        if (shouldRotate) {
          iconElement.classList.add("rotate");
          iconElement.classList.remove("rotate-back");
        } else {
          iconElement.classList.add("rotate-back");
          iconElement.classList.remove("rotate");
        }
      }
    };
  
    // Atualizando a rotação de cada ícone
    updateIconRotation("ancestralIcon", rotateIcon.curaAncestral);
    updateIconRotation("tradicionalIcon", rotateIcon.medicinaTradicional);
    updateIconRotation("cogumelarIcon", rotateIcon.comoCogumelar);
    updateIconRotation("terapiaIcon", rotateIcon.coguComTerapia);
  
  }, [rotateIcon]);










  useEffect(() => {
    gsap.fromTo(
      "#poder",
      {
        opacity: 0,
      },
      {
        ease: "sine.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: "#poder",
          start: "top center",
          end: "100% center",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      "#medicina",
      { opacity: 0 },
      {
        ease: "sine.inOut",

        opacity: 1,
        scrollTrigger: {
          trigger: "#medicina",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
    // gsap.fromTo(
    //   [".take08"],
    //   { background: "lightblue" },
    //   {
    //     backgroundColor: "#9a0f73",
    //     ease: "inOut",
    //     scrollTrigger: {
    //       trigger: ".take08",
    //       start: "bottom center",
    //       end: "top center",
    //       scrub: true,
    //     },
    //   }
    // );

    document.querySelectorAll(".star").forEach((star) => {
      let x = gsap.utils.random(0, window.innerWidth);
      let y = gsap.utils.random(
        0,
        document.getElementById("take08").offsetHeight
      );
      gsap.fromTo(
        star,
        {
          opacity: 1,
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(
            0,
            document.getElementById("take08").offsetHeight
          ),
        },
        {
          opacity: 1,
          x: x,
          y: y,
          duration: 100,
          repeat: -1,
          stagger: gsap.utils.random(1, 100),
        }
      );
    });
  }, []);

  return (
    <div id="take08" className="take08">
      <FaBookOpen id="book" />
      <div className="stars-container">
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
        <span className="star">
          <TbMushroomFilled />
        </span>
      </div>

      <div id="env-poder">
        {" "}
        <img id="poder" src={poder} alt="O poder dos cogumelos" />
      </div>

      <h4 id="medicina">
        A MEDICINA ANCESTRAL QUE TE DESPERTA PARA UM AQUI E AGORA MAIS
        CONSCIENTE, COM MENOS ANSIEDADE E MAIS DISPOSIÇÃO PARA VIVER A VIDA.
      </h4>
      <div id="intro" className="text-camp">
        <h1 id="porque">Porquê Cogumelos?</h1>
        <p id="text" className="text">
          Imagine-se navegando nas ondas da mente, onde os cogumelos são como o
          barco que nos leva a destinos inexplorados do nosso próprio ser.
          Cogumelar-se é como abrir uma porta mágica para uma realidade
          alternativa, um reino de cores vibrantes e padrões intricados. Nesse
          passeio lisérgico, nossas mentes se expandem como galáxias em
          crescimento, e a consciência se estende como uma tapeçaria cósmica. Os
          cogumelos são as chaves do labirinto psicodélico, revelando segredos
          profundos, provocando risos e lágrimas, e nos lembrando da imensa
          maravilha que é a nossa própria existência. Uma jornada onde o 'eu' se
          funde com o universo, e tudo se torna possível no incrível espaço da
          mente.
          <br />
          Aquele que se permite cogumelar vive um profundo impacto em sua vida.
          Após essa dança psicodélica com a mente, acontece um aumento notável
          na empatia, uma apreciação mais profunda pela natureza e um senso
          ampliado de conexão com os outros. Você passa a ver o mundo com novos
          olhos, encontrando beleza nas pequenas coisas e gratidão pela jornada
          da vida. A ansiedade e o estresse se dissolvem como névoa da manhã,
          substituídos por uma sensação de paz interior e clareza. As relações
          pessoais se fortalecem à medida que a comunicação se torna mais aberta
          e sincera. Cogumelar-se pode ser uma jornada de autodescoberta e cura,
          uma experiência que transcende as palavras e deixa uma marca indelével
          na alma, lembrando-nos que a vida é uma celebração psicodélica de
          crescimento e transformação.
        </p>
      </div>
      <div id="btns-texts">
        <div className="text-camp">
          <h1 onClick={() => toggleText("curaAncestral")}>
            Entenda a Cura Ancestral 

          </h1>
          <div
            className={`collapsible-section ${
              showText.curaAncestral ? "expanded" : ""
            }`}
            ref={curaAncestralRef}
          >
            <p className="text">
              {" "}
              Vamos mergulhar nas origens profundas do cogumelar nos rituais
              xamânicos da antiguidade. O uso dessa medicina natural é bem raiz
              e está conectada com a cura espiritual, expandir a mente e
              derrubar os muros de traumas e ideias chatas. Essa tradição tem
              rodado o globo há séculos, e várias tribos zumbi-das-praias
              levavam essa onda muito a sério, incluindo ela no kit de
              ferramentas das crenças e tratamentos deles. Os xamãs eram tipo os
              "xerifes espirituais" dessa parada e esses cogumelos eram o trunfo
              para abrir a porta das dimensões e liberar aquele conhecimento
              profundo e regar as plantinhas da cura, sacou?
            </p>
            <br/>
            <h3>Os primeiros Cogumelados:</h3>
            <br/>
            <p className="text">
              Vamos fazer uma viagem no tempo para descobrir as raízes de
              cogumelar-se! Historicamente, os nossos antepassados cogumelados
              já conheciam os truques dessas maravilhas da natureza. Os Mayas,
              os Astecas e culturas indígenas em todos os cantos do planeta já
              estavam na onda dos cogumelos, e não estamos falando dos
              comestíveis para pizzas! O exemplo mais famoso? Cogumelos
              psicodélicos, tipo o Psilocybe cubensis, eram o barato dos xamãs
              das Américas.
              <br />
              <br />
              Os xamãs, que eram como os "chefões espirituais" dessas turmas,
              usavam essas belezinhas em rituais de cura e para fazer aquela
              ponte com o lado espiritual da vida. Eles viam os cogumelos como
              guias cósmicos que davam insights profundos, tipo um GPS para a
              alma. Os cogumelos eram a estrela do show e cercados de muita
              festa, com rituais, música, dança e tudo mais. Os xamãs botavam fé
              que, com a ajuda dos cogumelos, eles podiam dar uma de Neo e
              entrar na Matrix espiritual, sacando lições e até curando doenças,
              traumas emocionais e aqueles pensamentos chatos que limitam a
              nossa mente.
            </p>
            <br/>
            <h3>Expansão da Consciência e Cura Espiritual:</h3>
            <br/>
            <p className="text">
              Os cogumelos psicodélicos, aqueles que são carregados com
              ingredientes mágicos como a psilocibina, têm esse poder de abrir
              portas secretas na mente. Quando você está nessa viagem com
              consciência e uma galera experiente pra dar uma mão, é como dar um
              salto profundo no mundo interno. Aí, é onde a mágica acontece - é
              tipo um abraço da mente, daqueles que só trazem amor, compreensão
              e um superboost na cura.
              <br />
              <br />
              Muita gente que já embarcou nessa onda afirma que rola um esquema
              de conexão total. Com a natureza, com o próximo, e mais
              importante, consigo mesmo. A mente fica tão aberta que até rola
              uma vibe espiritual, uma harmonia com o cosmos e tudo mais. Os
              xamãs botam fé nisso, saca? Eles não usam esses cogumelos só pra
              tratar corpo, mas também pra lidar com uns pepinos emocionais e
              espirituais, tipo traumas, bad vibes da depressão e aqueles
              pensamentos limitantes que a mente arrasta
            </p>
            <br/>
            <h3>E hoje em dia, como tá esse lance todo?</h3>
            <br/>
            <p className="text">
              Nos dias de hoje, a ciência tá botando as lupas nos cogumelos
              psicodélicos, especialmente quando se trata de tratar uns
              perrengues emocionais, tipo depressão, ansiedade e o famigerado
              TEPT. A estrela da festa é a psilocibina, o ingrediente secreto
              dos cogumelos, que mostrou um potencial incrível pra curar
              corações feridos e fazer a gente crescer. E isso tudo rolando em
              ambientes terapêuticos bem controlados.
              <br />
              <br />
              Agora, saca só, essa parada toda da jornada com cogumelos tá
              voltando com tudo na cultura ocidental. É tipo uma festa de
              ressurgimento, e tem muita gente botando fé nesses cogumelos sob a
              supervisão de terapeutas e modernos xamãs.
              <br />
              <br />
              Então, é isso: esses cogumelos têm lá suas raízes na cura xamânica
              ancestral, mas agora tão ganhando um upgrade no mundo de hoje. A
              missão é a mesma - expandir a mente, superar traumas e quebrar as
              crenças chatas. É a prova de que as tradições antigas podem se
              reinventar, trazendo uma dose de sabedoria ao nosso mundo maluco e
              em constante mutação.
            </p>
          </div>
        </div>
        <div className="text-camp">
          <h1 onClick={() => toggleText("medicinaTradicional")}>
            Como a Medicina Tradicional interage? 
          </h1>
          <div
            className={`collapsible-section ${
              showText.medicinaTradicional ? "expanded" : ""
            }`}
            ref={curaAncestralRef}
          >
            {/* Conteúdo da seção */}

            <p className="text medicinaTradicional">
              A visão da medicina tradicional sobre o uso de cogumelos no
              tratamento de doenças é profundamente enraizada na história de
              várias culturas ao redor do mundo. Os cogumelos, em particular os
              psicodélicos, têm sido usados por séculos para promover a saúde e
              curar uma variedade de doenças, tanto físicas quanto mentais,
              podemos destacar :
            </p>
            <br/>
            <h3>Cogus para transtornos mentais:</h3><br/>
            <p className="text">
              Depressão: Pesquisas iniciais sugerem que a psilocibina pode ser
              eficaz no tratamento da depressão resistente a outros tratamentos.
              Ela pode ajudar a criar uma experiência espiritual ou
              introspectiva que promove o bem-estar mental.
              <br />
              <br />
              Transtorno de estresse pós-traumático (TEPT): Estudos iniciais
              indicam que a psilocibina pode ser eficaz no tratamento de TEPT,
              ajudando os pacientes a enfrentar e processar traumas passados.
              <br />
              <br />
              Transtorno de ansiedade e transtorno obsessivo-compulsivo (TOC):
              Pesquisas sugerem que a psilocibina pode ajudar a aliviar sintomas
              de ansiedade e TOC, embora sejam necessários mais estudos
              <br />
              <br />
              Dependência de substâncias: Alguns estudos indicam que a
              psilocibina pode ser útil no tratamento da dependência de álcool,
              tabaco e outras drogas, ajudando as pessoas a enfrentar suas
              dependências
            </p>
            <br/>
            <h3>Gogu na melhora de condições físicas:</h3><br/>
            <p className="text">
              Dor crônica:<br/> A psilocibina pode reduzir a percepção de dor em
              pacientes com dor crônica, embora seja importante notar que ela
              não trata a causa subjacente da dor.
              <br />
              <br />
              Enxaquecas: <br/>Alguns relatos indicam que os cogumelos psilocibínicos
              podem ajudar a prevenir enxaquecas, embora mais pesquisas sejam
              necessárias.
              <br />
              <br />
              Cluster Headaches:<br/> Cogumelos psilocibínicos foram explorados como
              uma opção para aliviar as dores de cabeça em aglomerados, um tipo
              extremamente doloroso de cefaleia.
              <br />
              <br />
              Essas práticas estão encontrando reconhecimento e apoio
              significativos na comunidade científica contemporânea, com o
              respaldo de renomados pesquisadores e psiquiatras, o que só soma
              na nossa luta para expandir a comunidade cogumelada mundo à fora.
              <br />
              <br />
              Uma figura proeminente na defesa do uso terapêutico dos cogumelos
              é o psiquiatra Stanislav Grof, cujo trabalho em psicoterapia
              psicodélica tem sido influente. Grof defende que o uso responsável
              de substâncias psicodélicas, como a psilocibina encontrada nos
              cogumelos, pode levar à cura de traumas emocionais profundos, além
              de promover a expansão da consciência e o crescimento pessoal.
              <br />
              <br />
              Outro pesquisador notável é Roland Griffiths, um
              psicofarmacologista da Universidade Johns Hopkins, que conduziu
              extensos estudos sobre os efeitos terapêuticos da psilocibina. Seu
              trabalho tem destacado a eficácia da psilocibina no tratamento da
              depressão, ansiedade e dependência de substâncias, além de
              promover experiências espirituais profundas e duradouras que podem
              levar a mudanças positivas na saúde mental.
              <br />
              <br />
              Robin Carhart-Harris, diretor do Centro de Pesquisa de Psicodelia
              no Imperial College de Londres, também é uma autoridade respeitada
              na pesquisa sobre psicodélicos. Seus estudos têm demonstrado que a
              psilocibina pode promover a reestruturação cognitiva, a
              ressignificação de experiências traumáticas e a melhoria da saúde
              mental geral.
            </p>
          </div>
        </div>
        <div className="text-camp">
          <h1 onClick={() => toggleText("comoCogumelar")}>
            Como cogumelar-se? 
          </h1>
          {showText.comoCogumelar && (
            <div className="comoCogumelar" ref={comoCogumelarRef}>
              {" "}
              <p className="text">
                Quando o assunto é dosar os cogumelos psicodélicos, é como mexer
                nos botões do som: cada um tem seu estilo. A quantidade que você
                vai usar varia de acordo com a experiência que você quer ter e
                como seu corpo se sintoniza com a viagem. O truque é encontrar a
                dosagem que combina com o que você busca, levar em conta o lugar
                onde você tá e como a sua mente tá naquele dia. Dá uma olhada
                nas dicas gerais pra te guiar nessa jornada:
                <br />
                <br />
                Exploração Sutil: Alguns buscam uma jornada leve e espiritual,
                buscando uma conexão mais profunda com a espiritualidade e a
                consciência. Isso pode ser alcançado com uma quantidade mínima
                de cogumelos, geralmente menos de um terço de um grama. Essas
                quantidades não levam a experiências alucinatórias, mas podem
                oferecer maior clareza mental e sensibilidade espiritual.
                <br />
                <br />
                Jornada Espiritual Moderada: Para aqueles que buscam uma
                experiência mais profunda e significativa, em que a ligação com
                o divino ou o eu interior é o foco, uma dosagem que varia entre
                1 e 2 gramas de cogumelos secos pode ser apropriada. Essa
                quantidade permite uma exploração espiritual mais profunda,
                levando a insights e conexões espirituais.
                <br />
                <br />
                Viagem Profunda para a Alma: Para alcançar estados espirituais
                profundos de expansão da consciência, que frequentemente
                resultam em conexões com o divino ou o universo, doses de 2 a
                3,5 gramas ou mais de cogumelos secos são comuns. Essas doses
                podem resultar em experiências espirituais intensas, fornecendo
                uma oportunidade para questionamentos profundos e transformação
                pessoal.
                <br />
                <br />
                Dosagem Elevada ou Terapêutica: Para experiências altamente
                psicodélicas e terapêuticas, onde a introspecção profunda é
                desejada, doses de 3,5 a 5 gramas ou mais podem ser usadas.
                Essas doses podem levar a estados de consciência profundamente
                alterados e experiências de transformação pessoal. É crucial ter
                um ambiente seguro e orientação adequada ao usar doses elevadas.
                <br />
                <br />
                Olha, a sensibilidade espiritual é tipo uma música que varia de
                pessoa pra pessoa, e como a galera reage às doses dos cogumelos
                é um lance bem pessoal. Então, a pegada é começar de boa, com
                uma dose mais leve, e depois aumentar se sentir a necessidade. E
                ó, o local onde a mágica rola é fundamental, então ter um
                Terapeuta/Guia espiritual experiente é uma baita ajuda pra dar
                um norte e estar lá pra dar uma força na experiência.
              </p>
            </div>
          )}
        </div>
        <div className="text-camp">
          <h1 onClick={() => toggleText("coguComTerapia")}>
            Cogu com Terapia 
          </h1>
          <div
            className={`collapsible-section ${
              showText.coguComTerapia ? "expanded" : ""
            }`}
            ref={curaAncestralRef}
          >
            <p className="text">
              A jornada de despertar da consciência, especialmente quando
              envolve o uso de substâncias como cogumelos psicodélicos, é uma
              experiência profundamente pessoal e espiritual. Ter uma Terapeuta
              Holística ou espiritual que acompanhe esse processo pode ser de
              inestimável importância. Aqui estão algumas razões pelas quais
              essa orientação é valiosa:
              <br />
              <br />
              <strong>Navegação Segura:</strong><br/> Ter o acompanhamento de uma
              Terapeuta Especializada pode fornecer um espaço seguro e acolhedor
              para a experiência. Isso é crucial, pois o uso de cogumelos
              psicodélicos pode desencadear uma ampla gama de emoções e
              experiências. Ter alguém experiente ao seu lado pode ajudar a
              garantir que a jornada seja segura e controlada.
              <br />
              <br />
              <strong>Apoio Emocional:</strong><br/> O despertar da consciência pode
              trazer à tona questões emocionais profundas e, às vezes, traumas
              não resolvidos. Ter essa especialista para fornecer apoio
              emocional durante esses momentos desafiadores, ajuda a pessoa a
              enfrentar e superar o que for necessário.
              <br />
              <br />
              <strong>Orientação Espiritual:</strong><br/> O uso de cogumelos
              frequentemente leva a experiências espirituais profundas e
              transcendentais. Um guia com uma perspectiva espiritual pode
              ajudar a interpretar essas experiências, oferecer orientação e
              ajudar a pessoa a integrar os insights obtidos em sua vida
              cotidiana.
              <br />
              <br />
              <strong>Integração: </strong><br/>Após a experiência com cogumelos, a
              integração dos insights e mudanças na consciência é essencial. A
              Terapeuta vai ajudar a pessoa a entender e aplicar esses insights
              em sua vida, promovendo o crescimento pessoal e espiritual
              contínuo.
              <br />
              <br />
              <strong>Cuidado Individualizado:</strong><br/> Cada pessoa é única, e
              suas necessidades espirituais e terapêuticas também são únicas.
              Uma mentora vai adaptar a orientação e o suporte para atender às
              necessidades individuais, tornando a jornada de despertar da
              consciência verdadeiramente personalizada.
              <br />
              <br />
              <strong>Ética e Segurança:</strong> <br/>Um guia vai ajudar a garantir
              que a jornada seja conduzida de maneira ética e segura, com foco
              na promoção da saúde e do bem-estar.
              <br />
              <br />
              Em resumo, ter uma Terapeuta acompanhando o processo de despertar
              da consciência com cogumelos pode proporcionar uma experiência
              mais rica, segura e significativa. A orientação profissional, o
              suporte emocional e a integração cuidadosa das experiências podem
              ajudar a pessoa a explorar o potencial transformador dessas
              substâncias de maneira mais eficaz e benéfica para sua jornada
              espiritual e de crescimento pessoal.
            </p>
          </div>
        </div>
      </div>
      {/* <div id="env-cogus">
        <img className="cogus-azuis" src={CogusAzuis}></img>
      </div> */}
      {/* <Mandala /> */}
      {/* <img className="matriz" src={matrix} /> */}
    </div>
  );
};

export default Take08;