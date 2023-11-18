import React, { useEffect } from "react";
import { gsap } from "gsap";

import "./Take04.scss";

const Take04 = () => {
  
  // Piscar alterando a opacidade
  
  // useEffect(() => {
  //   gsap.to('#faria', {duration: 1, scrambleText: "THIS IS NEW TEXT"});//or customize things:

  //   gsap.to('#faria', {
  //     duration: 1, 
  //     scrambleText: {
  //       text: "O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER <strong>VOCÊ?</strong>", 
  //       chars: "XO", 
  //       revealDelay: 0.5, 
  //       speed: 0.3, 
  //       newClass: "myClass"
  //     }
  //   });


  
    // Mover 10px para a direita e depois 10px para a esquerda
    // gsap.fromTo("#faria",{x: -800,
    //   opacity: 0,}, {
    //   x:0,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: "#faria",
    //     start: "-30% center",
    //     end: "70% center",
    //     scrub: true,

    //     onUpdate: (self) => {
    //       console.log(self.progress);
    //     },
    //   },
    //   ease: "linear",
    // });
  // }, []);
  useEffect(()=>{
    gsap.utils.toArray('#voce span').forEach((letter, i) => {
      gsap.to(letter, {

        opacity:0.7,
        color: '#ba0c54',// Duração da animação
        repeat: -1, // Repetir indefinidamente
        yoyo: true, // Faz a animação ir e voltar
              ease: "power1.inOut", // Suavização da animação
        delay: i * 0.2 // Cria um atraso sequencial para cada letra
      });
    });

    gsap.to('#faria', {
      y: 200,
      duration: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#faria',
        start: 'top center',
        end: '50% center',
        scrub: true,
        markers: true
      }
    })





  },[])

  return (
    <div className="take04">
      <h2 id="faria">
        O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER <div id="voce">
  <span>V</span><span>O</span><span>C</span><span>Ê</span><span>?</span>
</div>
      </h2>
    </div>
  );
};

export default Take04;
