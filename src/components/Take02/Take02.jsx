import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BorboletaCogu from "./BorboletaCogu";
import Maia from "./Maia";
import "./Take02.scss";
import { gsap } from "gsap";

const Take02 = () => {
  const [mostrarElemento, setMostrarElemento] = useState(true);

  const [mostrarMaia, setMostrarMaia] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#take02",
        start: "top top",
        end: "bottom top",

        scrub: true,
        onEnter: () => {
          setMostrarElemento(false);
          console.log("Entrou na área do trigger");
        },
        onLeaveBack: () => {
          setMostrarElemento(true);
          console.log("Saiu na área do trigger");
        },
      },
    });
    
    // Animação para 'permita' vindo da esquerda para o centro

    // Animação para 'despertar' vindo da direita para o centro
// gsap.fromTo('#permita',{
//   opacity:1,
// },{
//   opacity:1,
//   scrollTrigger:{
//     scrub:true,
//     pin:true,
//   }
// })

    gsap.to("#maia", {
      opacity: 0,
      scale: 1.2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#take02",
        start: "60% center",
        end: "bottom center",

        scrub: true,
        onLeave: () => {
          setMostrarMaia(false);
          console.log("Entrou na área do trigger");
        },
        onLeaveBack: () => {
          setMostrarMaia(true);
          console.log("Saiu na área do trigger");
        },
      },
    });
  }, []);
  useEffect(() => {
    gsap.to("#camisa", {
      duration: 2,
      fill: "#9027ba",
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "center center",
      scale: 1.02,
    });

    gsap.to("#palpebraBaixo1", {
      duration: 3,
      y: 6,
      yoyo: true,
      repeat: -1,
    });
    gsap.to("#palpebraCima1", {
      duration: 3,
      y: -6,
      yoyo: true,
      repeat: -1,
    });

    gsap.to("#palpebraCima2", {
      duration: 3,
      y: -6,
      yoyo: true,
      repeat: -1,
    });
    gsap.to("#palpebraBaixo2", {
      duration: 3,
      y: 6,
      yoyo: true,
      repeat: -1,
    });
  }, [mostrarMaia]);

  return (
    <div id="take02" >

        <div id="permita" className="central-msg">
          PERMITA-SE
        </div>
      
      

      {mostrarMaia && <Maia />}
    </div>
  );
};

export default Take02;
