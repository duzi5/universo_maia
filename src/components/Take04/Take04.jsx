import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./Take04.scss"

const Take04 = () => {

  const tl = gsap.timeline({ repeat: -1, yoyo: true }); // repetir infinitamente e alternar a animação
  
  // Piscar alterando a opacidade
  tl.to("#voce", { opacity: 0, duration: 0.2 })
  .to("#voce", { opacity: 1, duration: 0.2 });
  
  // Mover 10px para a direita e depois 10px para a esquerda
  tl.to("#voce", { x: "+=10", duration: 0.5 })
  .to("#voce", { x: "-=10", duration: 0.5 });
  
  
  useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from('#faria', { 
            duration: 3,
            x: -800,
            opacity:0,
            scrollTrigger:{
                trigger: "#faria",
                start: "-30% center",
                end: "70% center",
                scrub: true,
                markers: true,
            },
            ease:'inOut'
        })
        
      },[])
    
    
    
    
      return (
        <div className='take04'>
              <h2 id="faria">O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER <strong  id="voce">VOCÊ?</strong></h2>


        </div>
    );
}

export default Take04;
