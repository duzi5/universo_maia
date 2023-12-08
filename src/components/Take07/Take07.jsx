import React, { useEffect } from "react";
import "./Take07.scss";
import gsap from "gsap";
import Brain from "./Brain";
import expanda from "./expanda.png";
import ScrollTrigger from "gsap/ScrollTrigger";

const Take07 = () => {
  useEffect(() => {
    const envMenteElement = document.querySelector('#env-mente');
    const menteElement = document.querySelector('#mente');
    const envMenteHeight = envMenteElement.offsetHeight;
    const menteWidth = menteElement.offsetWidth - window.innerWidth;
    
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
        height: 0,
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