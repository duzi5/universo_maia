import React, { useEffect } from "react";
import { gsap } from "gsap";

import "./Take04.scss";

const Take04 = () => {
  useEffect(() => {
    gsap.utils.toArray("#voce span").forEach((letter, i) => {
      gsap.to(letter, {
        opacity: 0.7,
        color: "#ba0c54", // Duração da animação
        repeat: -1, // Repetir indefinidamente
        yoyo: true, // Faz a animação ir e voltar
        ease: "power1.inOut", // Suavização da animação
        delay: i * 0.2, // Cria um atraso sequencial para cada letra
      });
    });

    gsap.to("#faria", {
      color:"#5ea1c3",
   
      scrollTrigger: {
        trigger: "#faria",
        scrub:true,
        start: "top center",
        end: "bottom center",

      },
    });
  }, []);

  return (
    <div className="take04">
      <h2 id="faria">
        O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER{" "}
        <div id="voce">
          <span>V</span>
          <span>O</span>
          <span>C</span>
          <span>Ê</span>
          <span>?</span>
        </div>
      </h2>
    </div>
  );
};

export default Take04;
