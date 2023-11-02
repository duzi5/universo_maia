import React, { useEffect } from "react";
import "./Take05.scss";
import {gsap} from "gsap";


const Take05 = () => {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.from("#momento", {
    //   x: 800,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: "#momento",
    //     start: "-70% center",
    //     end: "70% center",
    //     scrub: true,

    //   },
    //   ease: "inOut",
    // });
    // gsap.from("#seria", {
    //     x: -800,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: "#seria",
    //         start: "-70% center",
    //         end: "70% center",
    //         scrub: true,

    //     },
    //     ease: "inOut",
    // });
    // gsap.from("#viveria", {
    //   x: 800,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: "#viveria",
    //     start: "-70% center",
    //     end: "70% center",
    //     scrub: true,

    //   },
    //   ease: "inOut",
    // });


    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.take05',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true
      }
    });
    
    // Animação inicial do fundo para branco
    tl.fromTo(['.take05', '.take04', '.take06', ".take03", ".take07"], 
      { backgroundColor: '#000' }, // estado inicial
      { backgroundColor: '#ffffff', ease: 'Power4.inOut' } // estado final
    );
    
    // Para alternar de volta para preto (ou cinza) durante o mesmo scroll
    gsap.fromTo(['.take05', '.take04', '.take06', ".take03", ".take07"], 
      { backgroundColor: '#ffffff' }, // estado inicial (branco novamente para garantir que o fromTo funcione)
      { scrollTrigger:{
        trigger: '.take06',
        start: 'top center',
        end: 'top center',
        scrub: true,
        
      },backgroundColor: '#000', ease: 'Power4.inOut' }, // estado final
 // começa meio caminho de volta para sobrepor a animação anterior
    );
    
    // Nota: O -=0.5 é para que a segunda animação comece antes de a primeira terminar,
    // criando um efeito de crossfade entre as cores.
    
    // Para alternar de volta para preto (ou cinza) durante o mesmo scroll
  //   gsap.fromTo(['.take05', '.take04', '.take06', ".take03", ".take07"], 
  //   { backgroundColor: '#ffffff',
    
  // }, // estado inicial (branco novamente para garantir que o fromTo funcione)
  // { backgroundColor: '#000',
  // ease:'linear',
  //     scrollTrigger: {
  //       trigger: 'take08',
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: true,
  //       markers: true
  //     }, }, // estado final // começa meio caminho de volta para sobrepor a animação anterior
  //   );
    
    // Nota: O -=0.5 é para que a segunda animação comece antes de a primeira terminar,
    // criando um efeito de crossfade entre as cores.
    

 
  },[])
 
  return (    <div className="take05">
      <h5 id="momento">
        E SE DE REPENTE, POR UM MOMENTO, EM UM ESPAÇO TEMPO CRIADO NO UNIVERSO,
        VOCÊ PUDESSE SE PERMITIR ESQUECER TUDO QUE ACONTECE AQUI FORA E FOCASSE
        APENAS EM VOCÊ?
      </h5>
      <h3 id="seria">QUEM VOCÊ SERIA?</h3>
      <h3 id="viveria">COMO VIVERIA?</h3>
    </div>
  );
};

export default Take05;
