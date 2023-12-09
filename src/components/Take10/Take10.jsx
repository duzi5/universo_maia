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

        <h1>Tá afim de ir mais além, e unir os cogus com terapia esotérica?</h1>
        <p id="amandaPresentation">
          Conheça <span>Amanda baragiola</span>, autora do "A magia da Vida", um Método de autoconhecimento inovador que une estudos ancestrais e universais para um despertar guiado e direcionado.
          <br />
        
        
        </p>
        <h2>como é o magia da vida:</h2>
        <p>
          <strong>Uma Imersão de 4 horas:</strong><br/> Este é o ponto de partida,
          uma viagem guiada para reconectar-se com sua essência, traçando um
          caminho que une o passado ao futuro. Nossa mentora, Amanda, irá guiar
          você no processo de cura de traumas ancestrais que podem estar
          impedindo você de avançar.
          <br />
          <strong>7 Sessões de 2 horas cada:</strong><br/> Distribuídas ao longo de 4
          meses, essas sessões aprofundam a sua jornada, permitindo que você
          explore as dimensões do "eu sou", "eu sinto", "eu faço", "eu amo", "eu
          falo", "eu vejo" e "eu sei". É uma oportunidade para desbloquear o
          potencial que está adormecido dentro de você.
          <br />
          <strong> Doses de Cogumelo:</strong><br/>
          O Psilocybe cubensis é uma ferramenta poderosa nesse processo.
          Recomendamos um mínimo de 5g para os 4 meses de Mentoria Imersiva.
          Para aqueles que já conhecem os benefícios dos cogumelos, recomendamos
          10g para o mesmo período.
          <br />
          <strong>Leitura Energética:</strong><br/>
      Você receberá uma análise energética exclusiva
          baseada no Método de Autoconhecimento por Alquimia da Amanda
          Baragiola. Isso fornecerá clareza sobre os bloqueios energéticos que
          precisam ser superados.
          <br />
        
      
          Para saber se é o seu momento de embarcar nessa jornada entre em contato com Amanda baragiola para agendar um encontro online.
          São 4 meses de Mentoria Particular por apenas R$1.550,00.
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
