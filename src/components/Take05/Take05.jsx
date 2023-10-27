import React, { useEffect } from "react";
import "./Take05.scss";
import gsap from "gsap";


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
          start: 'top 80%',
          end: 'bottom 10%',
          scrub: true,
          markers: true
      }
  });
  
  tl.to(['.take05', '.take04', '.take06', ".take03", ".take07"], { 
      backgroundColor: '#ffffff',
      ease: 'Power4.inOut',
  });


 
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
