import React, { useEffect } from "react";
import gsap from "gsap";

import "./Take06.scss"
const Take06 = () => {
useEffect(() => {
  // ... restante do código ...

  gsap.fromTo("#mergulhe", 
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#mergulhe",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      ease: "power1.inOut",
      duration: 2,
    }
  );
}, []);

  return (
    <div className="take06" data-scroll-container>

      <div className="content">
      <h2 id="mergulhe" className="flutue">Mergulhe com a gente nesse conhecimento</h2>
      <h4 id="medicina">
       Mas antes, deixa eu te falar quem somos. 
       Dois amigos unidos pelo sonho de mostrar um mundo melhor, mais leve e como essa medicina ancestral te conecta com essa realidade.
      </h4>
      </div>

    </div>
  );
};

export default Take06;
