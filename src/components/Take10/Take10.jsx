import React, { useEffect } from "react";
import "./Take10.scss";
import { GiBrain } from "react-icons/gi";
import folha1 from "./folha1.svg"
import folha2 from "./folha2.svg"
import folha3 from "./folha3.svg"
import folha4 from "./folha4.svg"
import folha5 from "./folha5.svg"
import folha6 from "./folha6.svg"
import { gsap } from "gsap";


const Take10 = () => {

useEffect(()=>{
    document.querySelectorAll('.folha').forEach(e=>{
        gsap.fromTo(e,{
            y:0
        },{
            yPercent: 100,
            scrollTrigger: {
                trigger: "#take10",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        })
    })
},[])



  return (
    <div id="take10" className="take10">
      <div className="terapy-texts">
      <GiBrain id="brain" />
    <img className="folha" src={folha1} alt="" />
    <img className="folha" src={folha2} alt="" />
    <img className="folha" src={folha3} alt="" />

        <h1>Desbloqueie a Magia da Vida e Transforme-se !</h1>
        <p>
          Você está pronto para uma jornada de transformação? Bem-vindo à
          Imersão/Mentoria Particular "A Magia da Vida", um Protocolo
          Visionário, desenvolvido e aperfeiçoado nos últimos 14 anos por Amanda
          Baragiola, Mentora Esotérica e Alquimista, Kin 179.
          <br />
          Este é o segredo que muitos buscam para quebrar crenças limitantes,
          acessar sua ancestralidade e desbloquear uma vida abundante, tudo
          através da Magia Natural, Medicina Natural, Autoconhecimento Místico e
          Esotérico.
          <br />
        </p>
        <h2>Essa jornada você vai viver:</h2>
        <p>
          <strong>Uma Imersão de 4 horas:</strong> Este é o ponto de partida,
          uma viagem guiada para reconectar-se com sua essência, traçando um
          caminho que une o passado ao futuro. Nossa mentora, Amanda, irá guiar
          você no processo de cura de traumas ancestrais que podem estar
          impedindo você de avançar.
          <br />
          <strong>7 Sessões de 2 horas cada:</strong> Distribuídas ao longo de 4
          meses, essas sessões aprofundam a sua jornada, permitindo que você
          explore as dimensões do "eu sou", "eu sinto", "eu faço", "eu amo", "eu
          falo", "eu vejo" e "eu sei". É uma oportunidade para desbloquear o
          potencial que está adormecido dentro de você.
          <br />
          <strong> Doses de Cogumelo:</strong>
          O Psilocybe cubensis é uma ferramenta poderosa nesse processo.
          Recomendamos um mínimo de 5g para os 4 meses de Mentoria Imersiva.
          Para aqueles que já conhecem os benefícios dos cogumelos, recomendamos
          10g para o mesmo período.
          <br />
          <strong>Leitura Energética:</strong>
          Leitura Energética: Você receberá uma análise energética exclusiva
          baseada no Método de Autoconhecimento por Alquimia da Amanda
          Baragiola. Isso fornecerá clareza sobre os bloqueios energéticos que
          precisam ser superados.
          <br />
          <strong>Acesso Exclusivo: </strong> Acesso Exclusivo: Você se tornará
          um membro do Grupo de Pupilos, um ambiente para aprender sobre a Lei
          do Tempo e outros Protocolos de Magia Natural. Além disso, terá acesso
          ao Instagram Privado do Universo Místico de Bara, onde conteúdo
          estimulante e fora da caixinha aguarda por você.
          <br />
          Nossos pupilos anteriores tiveram suas vidas transformadas por essa
          jornada, e agora é a sua vez de embarcar nessa experiência única. Tudo
          isso está ao seu alcance por apenas R$ 1.550,00, mais o custo dos
          Cogumelos necessários para a sua experiência.
          <br />
          As mentorias e a imersão podem ser realizadas tanto presencialmente
          quanto online, adaptadas para atender às suas necessidades
          individuais, porque sabemos que cada jornada é única. E lembre-se, o
          Protocolo "A Magia da Vida" não depende dos Cogumelos, mas se você
          deseja potencializar sua jornada de cura e autoconhecimento, essa é
          uma opção incrível.
          <br />
          Agora é o momento de desbloquear a magia em sua vida. Junte-se a nós
          nesta jornada transformadora. Seja o autor da sua própria história!
          <br />
          Para outros Métodos de Autoconhecimento por meio da Magia Natural e
          Alquimia Energética, indicamos Amanda Baragiola, ela tem vários
          formatos desconstruídos de atendimento pra elevar tua mente, seja
          cogumelando-se ou não. Você encontra ela em diversas plataformas,
          sempre como @AmandaBaragiola!
        </p>
      </div>
    </div>
  );
};

export default Take10;
