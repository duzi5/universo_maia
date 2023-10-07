import React from 'react';
import { gsap } from 'gsap';


import LocomotiveScroll from 'locomotive-scroll';
import "./Take04.scss"
const Take04 = () => {
    const locomotiveScroll = new LocomotiveScroll();
    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // repetir infinitamente e alternar a animação

    // Piscar alterando a opacidade
    tl.to("#voce", { opacity: 0, duration: 0.2 })
      .to("#voce", { opacity: 1, duration: 0.2 });

    // Mover 10px para a direita e depois 10px para a esquerda
    tl.to("#voce", { x: "+=10", duration: 0.5 })
      .to("#voce", { x: "-=10", duration: 0.5 });
    return (
        <div className='take04'>
              <h2 data-scroll data-scroll-speed="0.5" >O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER <strong data-scroll data-scroll-speed="0.4" id="voce">VOCÊ?</strong></h2>


        </div>
    );
}

export default Take04;
