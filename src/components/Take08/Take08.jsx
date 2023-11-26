import React, { useEffect } from "react";
import "./Take08.scss";
import CogusAzuis from "./coguTake8.png";
import matrix from "../matrix.png";
import { TbMushroomFilled } from "react-icons/tb";

import gsap, { random } from "gsap";
import poder from "./cogumeloPoderTexto.png";
import { InfoPage } from "../InfoPage/InfoPage";
import Mandala from "./Mandala";
const Take08 = () => {
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
      let y = gsap.utils.random(0, document.getElementById('take08').offsetHeight);
      gsap.fromTo(
        star,
        {
          opacity: 1,
          x: gsap.utils.random(0,window.innerWidth),
          y: gsap.utils.random(0,document.getElementById('take08').offsetHeight)
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
      <div id="intro">
        <h1 id="porque">Porquê Cogumelos?</h1>
        <p id="intro-text">
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
        <button className="btn">Entenda a Cura Ancestreal</button>
        <button className="btn">Como a Medicina Tradicional interage?</button>
        <button className="btn">Como cogumelar-se?</button>
        <button className="btn">Cogu com Terapia</button>
      </div>
      <div id="env-cogus">
        <img className="cogus-azuis" src={CogusAzuis}></img>
      </div>
      {/* <Mandala /> */}
      {/* <img className="matriz" src={matrix} /> */}
    </div>
  );
};

export default Take08;
