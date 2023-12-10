import React, { useEffect } from "react";
import "./Take07.scss";
import gsap from "gsap";
import Brain from "./Brain";
import expanda from "./expanda.png";
import ScrollTrigger from "gsap/ScrollTrigger";

const Take07 = () => {
  useEffect(() => {
    let menteWidth = 0;

    const measureElement = () => {
      const menteElement = document.querySelector('#mente');
      const currentWidth = menteElement.offsetWidth - window.innerWidth;
      menteWidth = Math.max(menteWidth, currentWidth);
    };

    // Medir imediatamente
    measureElement();

    // Medir após 1 segundo
    setTimeout(measureElement, 1000);

    // Medir após 2 segundos
    setTimeout(measureElement, 2000);

    // Agendar a animação após todas as medições
    setTimeout(() => {
      const envMenteElement = document.querySelector('#env-mente');
      const envMenteHeight = envMenteElement.offsetHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".take07",
          start: "0% 70%",
          end: "0% 20%",
          scrub: true,
        },
      });

      tl.fromTo(
        "#env-mente",
        {
          height: '0px',
        },
        {
          height: envMenteHeight, // Ajuste a duração conforme necessário
        }
      )
      .fromTo(
        "#mente",
        {
          x: 0,
        },
        {
          x: -menteWidth,
          ease: "none",
        }
      );
    }, 2000);
  }, []);

  return (
    <div className="take07">
      <div id="env-mente">
  
          <h4 id="mente"className="flutue">Esse é o poder do <strong id='destaque'>cogumelo</strong></h4>
      
    
      </div>
    </div>
  );
};

export default Take07;