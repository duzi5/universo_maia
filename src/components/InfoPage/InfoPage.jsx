import React, { useEffect, useState } from "react";
import gsap from "gsap";

import "./InfoPage.scss";
import pqcogu from "./porqueCoguTitulo.png";
import terapia from "./terapiaCogu.png";
import universo from "./universoMaiaTitulo.png";
import medicina from "./medicinaTradicional.png";
import dosagem from "./dosagens.png";
import cura from "./curaAncestral.png";
import cogu from "./cogu.svg";

const Carousel = ({ slides, onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button onClick={previousSlide}>Anterior</button>
      <div className="slides">
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
      </div>
      <button onClick={nextSlide}>Próximo</button>
    </div>
  );
};
const Slide = ({ slide }) => {
  return <div className="slide">{slide.content}</div>;
};

const TextSlide = ({ slide }) => {
  return (
    <Slide slide={slide}>
      <p>{slide.text}</p>
    </Slide>
  );
};

export const InfoPage = () => {
  return (
    <div className="info-page">
      <div className="horizontal-scroll">
        <div className="content2">
          {/* <img src={universo} alt="" /> */}
          <h1>Porquê Cogumelos?</h1>
          <section>
            <p>
              Imagine-se navegando nas ondas da mente, onde os cogumelos são
              como o barco que nos leva a destinos inexplorados do nosso próprio
              ser. Cogumelar-se é como abrir uma porta mágica para uma realidade
              alternativa, um reino de cores vibrantes e padrões intricados.
              Nesse passeio lisérgico, nossas mentes se expandem como galáxias
              em crescimento, e a consciência se estende como uma tapeçaria
              cósmica. Os cogumelos são as chaves do labirinto psicodélico,
              revelando segredos profundos, provocando risos e lágrimas, e nos
              lembrando da imensa maravilha que é a nossa própria existência.
              Uma jornada onde o 'eu' se funde com o universo, e tudo se torna
              possível no incrível espaço da mente.
              <br />
              <br />
              Aquele que se permite cogumelar vive um profundo impacto em sua
              vida. Após essa dança psicodélica com a mente, acontece um aumento
              notável na empatia, uma apreciação mais profunda pela natureza e
              um senso ampliado de conexão com os outros. Você passa a ver o
              mundo com novos olhos, encontrando beleza nas pequenas coisas e
              gratidão pela jornada da vida. A ansiedade e o estresse se
              dissolvem como névoa da manhã, substituídos por uma sensação de
              paz interior e clareza. As relações pessoais se fortalecem à
              medida que a comunicação se torna mais aberta e sincera.
              Cogumelar-se pode ser uma jornada de autodescoberta e cura, uma
              experiência que transcende as palavras e deixa uma marca indelével
              na alma, lembrando-nos que a vida é uma celebração psicodélica de
              crescimento e transformação.
            </p>
          </section>

          <section>
            <h2>Cura Ancestral</h2>
            <p>
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
            <h3>Os primeiros Cogumelados:</h3>
            <p>
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
            <h3>Expansão da Consciência e Cura Espiritual:</h3>
            <p>
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
            <h3>E hoje em dia, como tá esse lance todo?</h3>
            <p>
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
          </section>
          <section>
            <h2>Medicina Tradicional</h2>
            <p>
              A visão da medicina tradicional sobre o uso de cogumelos no
              tratamento de doenças é profundamente enraizada na história de
              várias culturas ao redor do mundo. Os cogumelos, em particular os
              psicodélicos, têm sido usados por séculos para promover a saúde e
              curar uma variedade de doenças, tanto físicas quanto mentais,
              podemos destacar :
            </p>
            <h3>Cogus para transtornos mentais:</h3>
            <p>
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
            <h3>Gogu na melhora de condições físicas:</h3>
            <p>
              Dor crônica: A psilocibina pode reduzir a percepção de dor em
              pacientes com dor crônica, embora seja importante notar que ela
              não trata a causa subjacente da dor.
              <br />
              <br />
              Enxaquecas: Alguns relatos indicam que os cogumelos psilocibínicos
              podem ajudar a prevenir enxaquecas, embora mais pesquisas sejam
              necessárias.
              <br />
              <br />
              Cluster Headaches: Cogumelos psilocibínicos foram explorados como
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
          </section>
          <section>
            <h2>Dosagem</h2>
            <p>
              Quando o assunto é dosar os cogumelos psicodélicos, é como mexer
              nos botões do som: cada um tem seu estilo. A quantidade que você
              vai usar varia de acordo com a experiência que você quer ter e
              como seu corpo se sintoniza com a viagem. O truque é encontrar a
              dosagem que combina com o que você busca, levar em conta o lugar
              onde você tá e como a sua mente tá naquele dia. Dá uma olhada nas
              dicas gerais pra te guiar nessa jornada:
              <br />
              <br />
              Exploração Sutil: Alguns buscam uma jornada leve e espiritual,
              buscando uma conexão mais profunda com a espiritualidade e a
              consciência. Isso pode ser alcançado com uma quantidade mínima de
              cogumelos, geralmente menos de um terço de um grama. Essas
              quantidades não levam a experiências alucinatórias, mas podem
              oferecer maior clareza mental e sensibilidade espiritual.
              <br />
              <br />
              Jornada Espiritual Moderada: Para aqueles que buscam uma
              experiência mais profunda e significativa, em que a ligação com o
              divino ou o eu interior é o foco, uma dosagem que varia entre 1 e
              2 gramas de cogumelos secos pode ser apropriada. Essa quantidade
              permite uma exploração espiritual mais profunda, levando a
              insights e conexões espirituais.
              <br />
              <br />
              Viagem Profunda para a Alma: Para alcançar estados espirituais
              profundos de expansão da consciência, que frequentemente resultam
              em conexões com o divino ou o universo, doses de 2 a 3,5 gramas ou
              mais de cogumelos secos são comuns. Essas doses podem resultar em
              experiências espirituais intensas, fornecendo uma oportunidade
              para questionamentos profundos e transformação pessoal.
              <br />
              <br />
              Dosagem Elevada ou Terapêutica: Para experiências altamente
              psicodélicas e terapêuticas, onde a introspecção profunda é
              desejada, doses de 3,5 a 5 gramas ou mais podem ser usadas. Essas
              doses podem levar a estados de consciência profundamente alterados
              e experiências de transformação pessoal. É crucial ter um ambiente
              seguro e orientação adequada ao usar doses elevadas.
              <br />
              <br />
              Olha, a sensibilidade espiritual é tipo uma música que varia de
              pessoa pra pessoa, e como a galera reage às doses dos cogumelos é
              um lance bem pessoal. Então, a pegada é começar de boa, com uma
              dose mais leve, e depois aumentar se sentir a necessidade. E ó, o
              local onde a mágica rola é fundamental, então ter um
              Terapeuta/Guia espiritual experiente é uma baita ajuda pra dar um
              norte e estar lá pra dar uma força na experiência.
            </p>
          </section>
          <section>
            <h2>Terapia com Cogumelos</h2>
            <p>
              A jornada de despertar da consciência, especialmente quando
              envolve o uso de substâncias como cogumelos psicodélicos, é uma
              experiência profundamente pessoal e espiritual. Ter uma Terapeuta
              Holística ou espiritual que acompanhe esse processo pode ser de
              inestimável importância. Aqui estão algumas razões pelas quais
              essa orientação é valiosa:
              <br />
              <br />
              <strong>Navegação Segura:</strong> Ter o acompanhamento de uma
              Terapeuta Especializada pode fornecer um espaço seguro e acolhedor
              para a experiência. Isso é crucial, pois o uso de cogumelos
              psicodélicos pode desencadear uma ampla gama de emoções e
              experiências. Ter alguém experiente ao seu lado pode ajudar a
              garantir que a jornada seja segura e controlada.
              <br />
              <br />
              <strong>Apoio Emocional:</strong> O despertar da consciência pode
              trazer à tona questões emocionais profundas e, às vezes, traumas
              não resolvidos. Ter essa especialista para fornecer apoio
              emocional durante esses momentos desafiadores, ajuda a pessoa a
              enfrentar e superar o que for necessário.
              <br />
              <br />
              <strong>Orientação Espiritual:</strong> O uso de cogumelos
              frequentemente leva a experiências espirituais profundas e
              transcendentais. Um guia com uma perspectiva espiritual pode
              ajudar a interpretar essas experiências, oferecer orientação e
              ajudar a pessoa a integrar os insights obtidos em sua vida
              cotidiana.
              <br />
              <br />
              <strong>Integração: </strong>Após a experiência com cogumelos, a
              integração dos insights e mudanças na consciência é essencial. A
              Terapeuta vai ajudar a pessoa a entender e aplicar esses insights
              em sua vida, promovendo o crescimento pessoal e espiritual
              contínuo.
              <br />
              <br />
              <strong>Cuidado Individualizado:</strong> Cada pessoa é única, e
              suas necessidades espirituais e terapêuticas também são únicas.
              Uma mentora vai adaptar a orientação e o suporte para atender às
              necessidades individuais, tornando a jornada de despertar da
              consciência verdadeiramente personalizada.
              <br />
              <br />
              <strong>Ética e Segurança:</strong> Um guia vai ajudar a garantir
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
          </section>
          {/* <img id="cogu" src={cogu} alt="" srcset="" /> */}
        </div>
      </div>
    </div>
  );
};

// export default InfoPage;
