import React, { useEffect, useState } from "react";
import "./Take05.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Take05 = () => {




  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".take05",
  //       start: "0% center",
  //       end: "95% center",
  //       scrub: true,
  //     },
  //   });

  //   // Animação inicial do fundo para branco
  //   tl.fromTo(
  //     [".take05", ".take04", ".take06", ".take07", "body"],
  //     { backgroundColor: "#E85747" }, // Estado inicial
  //     { backgroundColor: "#4b3b3b", ease: "Power4.inOut" } // Estado final
  //   );

  //   // Para alternar de volta para preto (ou cinza) durante o mesmo scroll
  //   gsap.to(
  //     [".take05", ".take04", ".take06", ".take07", "body"],
  //     // Estado inicial (branco novamente para garantir que o fromTo funcione)
  //     {
  //       scrollTrigger: {
  //         trigger: ".take06",
  //         start: "top center",
  //         end: "20% center",
  //         scrub: true,
  //       },
  //       backgroundColor: "#000",
  //       ease: "Power4.inOut",
  //     } // Estado final
  //   );
  // }, []);

  return (
    <div className="take05" data-scroll-container>
   <div data-scroll-section>
   <h5 id="momento" data-scroll data-scroll-speed="1" >    E SE DE REPENTE, POR UM MOMENTO, EM UM ESPAÇO TEMPO CRIADO NO UNIVERSO, VOCÊ PUDESSE SE PERMITIR ESQUECER TUDO QUE ACONTECE AQUI FORA E FOCASSE APENAS EM VOCÊ?
</h5>
      <h3 id="seria" data-scroll data-scroll-speed="1">QUEM VOCÊ SERIA?</h3>
      <h3 id="viveria" data-scroll data-scroll-speed="1">COMO VIVERIA?</h3>
   </div>
    </div>
  );
};

export default Take05;
