import React, { useEffect } from 'react';
import "./Take07.scss"
import gsap from 'gsap';

import expanda from "./expanda.png"

const Take07 = () => {
useEffect(()=>{
  
  
// Crie uma timeline separada para a animação de piscar
const blinkingTl = gsap.timeline({ repeat: -1, yoyo: true });

// Adicione a animação de piscar
blinkingTl.to('#mente', { opacity: 0, duration: 0.7 })
          .to('#mente', { opacity: 1, duration: 0.7 });

// Animação de entrada com o scrollTrigger
gsap.fromTo('#mente', 
    { x: -800, opacity: 0 }, 
    { 
        x: 0,
        opacity: 1,
        scale: 1.5,
        scrollTrigger: {
            trigger: '#mente',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            onEnter: () => blinkingTl.play(),
            onLeaveBack: () => blinkingTl.pause(),
            onUpdate: (self) => {
                console.log(self.progress);
            },
        }        
});

    gsap.fromTo('#mergulhe',{
        x: 800,
        opacity:0
    },{ 
        x: 0,
        opacity:1,
    scrollTrigger:{
        trigger:'#mergulhe',
        start:'top center',
        end:'bottom center',
        scrub:1,

        onUpdate:(self)=>{
            console.log(self.progress)
        },
    }        
    })
},[])

    return (
        <div className="take07">
            

            <h3 id="mergulhe"> Mergulhe no <strong>conhecimento ancestral</strong> que liberta o seu futuro</h3>
            <img id="mente" src={expanda}/>

        </div>
    );
}

export default Take07;
