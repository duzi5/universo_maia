import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./bemVindo.png"
import BorboletaCogu from "./BorboletaCogu";
import bemvindo from "./bemVindo.png"
import Maia from "./Maia";
import "./Take02.scss";
import { gsap } from "gsap";
import nuvemImage from "./nuvens.png"
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





// gsap.to("#maia", {
//   opacity: 0,
//   scale: 1.2,
//   ease: "linear",
//   scrollTrigger: {
//         trigger: "#take02",
//         start: "60% center",
//         end: "bottom center",

//         scrub: true,
//         onLeave: () => {
//           setMostrarMaia(false);
//           console.log("Entrou na área do trigger");
//         },
//         onLeaveBack: () => {
//           setMostrarMaia(true);
//           console.log("Saiu na área do trigger");
//         },
//       },
//     });
  }, []);
  useEffect(() => {
    gsap.fromTo(".nuvem", 
      { x: '0%' }, // Posição inicial (direita da tela)
      { 
        x: '100%', // Posição final (esquerda da tela)
        duration: 150, // A duração da animação em segundos
        repeat: -1, // Quantas vezes a animação deve se repetir (-1 para infinito)
        ease: "none", // Tipo de easing para a animação
        stagger: { // Inicia a animação de cada nuvem em momentos diferentes
          amount: 15,
        },
      }
    );
    gsap.to(['#folha1', '#folha2',  '#folha3', '#folha4' ], { 
      duration: 3,
      stagger:0.1,
      y: -10,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "center center",
      scale: 1.02,
    
    })
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
<div className="nuvens">
  {Array.from({ length: 2 }).map((_, i) => (
    <img key={i} src={nuvemImage} alt="nuvem" className={`nuvem nuvem-${i}`} />
  ))}
</div>
<div>
  <img id="bemvindo"src={bemvindo} alt="bem-vindo ao universo maia" />
</div>
      
      

      {mostrarMaia && <Maia />}
    </div>
  );
};

export default Take02;
