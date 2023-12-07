import React, { useEffect } from "react";
import "./Take03.scss";
import gsap from "gsap";

import { TextPlugin } from "gsap/TextPlugin";
import titulo from "./universoMaia.png"
import Scraps from "../Scraps/Scraps";
const Take03 = () => {
  useEffect(() => {

    const tl = gsap.timeline({ scrollTrigger:{
      trigger: "#topa",
      start: "-200% center",
      end: "50% center",
      scrub: true,
    }})
    

    // Animação de rotação
    gsap.set(".letter", { display: "inline-block" }); // Configura os spans para se comportarem como blocos inline

    tl.to(".letter", {
      rotateY: 720,
      color:"#817665",
      rotateZ: 720,
      stagger:0.1// Repete infinitamente// Faz a animação de ida e volta
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
            y: 50,
            x:0,
          },{
              autoAlpha: 1,
              y:0,
              x:"5%",
            scrollTrigger: {
                trigger: '#universo',
                start: "top 80%",
                end: "top 20%",
                scrub: 1,

            },
        });
 
}, []);

return (
  <div id="take03Container" className= "data-scroll-container">
      <div className="take03" id="take03" data-scroll-section>
    <div className="frases">
        <h2 id="universo" className="text">
        NÓS, DO <img className="logo" src={titulo} data-scroll />, TE CONVIDAMOS A DESPERTAR PARA UM NOVO MUNDO AGORA MESMO.
      </h2>
      <h1 id="topa" className="reveal" data-scroll>
  {Array.from("TOPA?").map((letter, index) => (
    <span key={index} className="letter">{letter}</span>
  ))}
</h1>  
    </div>

    <Scraps />

  </div>
  
  
  
  </div>
);


}
export default Take03