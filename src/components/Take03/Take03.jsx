import React, { useEffect } from "react";
import "./Take03.scss";
import gsap from "gsap";

import { TextPlugin } from "gsap/TextPlugin";
import titulo from "./universoMaiaTitulo.png"
const Take03 = () => {
  useEffect(() => {

    // ... restante do código ...

    gsap.from("#topa", {
      scrollTrigger: {
        trigger: "#topa",
        start: "-30% center+=100",
        end: "80% center",
        toggleActions: "play none reverse none",
        scrub: true,
      },
      x: 1200,
      autoAlpha: 0,
      duration: 1,
      ease: "inOut",
    });
    // gsap.registerPlugin(TextPlugin)
    // gsap.to('.text', {
    //   duration: 10,
    //   text: " NÓS, DO <img className='logo' src={titulo}/>, TE CONVIDAMOS A DESPERTAR PARA UM NOVO MUNDO AGORA MESMO.",
    //   ease: "none",
    //   scrub:true,
    // });


        // gsap.from('#universo', {
        //     autoAlpha: 0,
        //     y: 50,
        //     duration: 1.5,
        //     scrollTrigger: {
        //         trigger: '.reveal-text',
        //         start: "top 80%",
        //         end: "top 20%",
        //         toggleActions: "play none none reverse",
        //         markers: true
        //     },
        // });
 
}, []);

return (
    <div className="take03">
      <h2 id="universo" className="text">
        NÓS, DO <img className="logo" src={titulo}/>, TE CONVIDAMOS A DESPERTAR PARA UM NOVO MUNDO AGORA MESMO.
      </h2>
      <h1 id="topa" className="reveal">TOPA?</h1>
    </div>
);


}
export default Take03