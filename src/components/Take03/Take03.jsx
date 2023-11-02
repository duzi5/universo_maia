import React, { useEffect } from "react";
import "./Take03.scss";
import gsap from "gsap";

import { TextPlugin } from "gsap/TextPlugin";
import titulo from "./universoMaiaTitulo.png"
const Take03 = () => {
  useEffect(() => {

    // ... restante do código ...

    gsap.fromTo("#topa", { x: 1200,
      autoAlpha: 0,
},{
      x: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#topa",
        start: "-30% center+=100",
        end: "80% center",
        scrub: true,
      },
     
    });
    // gsap.registerPlugin(TextPlugin)
    // gsap.to('.text', {
    //   duration: 10,
    //   text: " NÓS, DO <img className='logo' src={titulo}/>, TE CONVIDAMOS A DESPERTAR PARA UM NOVO MUNDO AGORA MESMO.",
    //   ease: "none",
    //   scrub:true,
    // });


        gsap.fromTo('#universo', {
            autoAlpha: 0,
            y: 50,},{
              autoAlpha: 1,
            scrollTrigger: {
                trigger: '#universo',
                start: "top 80%",
                end: "top 20%",
                scrub: 1,

            },
        });
 
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