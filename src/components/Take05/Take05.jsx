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
 

    </div>
  );
};

export default Take05;
