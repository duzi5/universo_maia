import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Folhas from "./Folhas";
import BorboletaCogu from "./BorboletaCogu";
import Maia from "./Maia";
import "./Take02.scss";
import { gsap } from "gsap";





const Take02 = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Registre o plugin
  
    gsap.from("#permita", {

      opacity: 0,

    });
  }, []);
  













  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#PALPEBRA_BAIXO_1", {
      duration: 3,
      y: 10,
      yoyo: true,
      repeat:-1
     
    });
    gsap.to("#PALPEBRA_CIMA_2", {
      duration: 3,
      y: -10,
      yoyo: true,
      repeat: -1,
     
    });

    gsap.to("#PALPEBRA_CIMA_2-2", {
      duration: 3,
      y: -10,
      yoyo: true,
      repeat: -1,
      
    });
    gsap.to("#PALPEBRA_BAIXO_1-2", {
      duration: 3,
      y: 10,
      yoyo: true,
      repeat: -1,
      
    });

    gsap.to("#COGU_CENTRAL", {
      duration: 3,
      fill: "#dccece",
      yoyo: true,
      repeat: -1,
    });

    
    gsap.to("#COGUMELO_07", {
      duration: 3,
      fill: "#dccece",
      yoyo: true,
      repeat: -1,
    });
    // gsap.to("#maia", {
    //   duration: 3,
    //   yoyo: true
    //   repeat: -1,
    //   ease: "inOut",
    // });
    gsap.to("#CAMISA", {
      scale: 1.0005,
      x: -3,
      yPercent: 2,
      duration: 3,
      ease: "inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.from("#permita", { 
        duration: 3,
        opacity:0,
        ease:'inOut'
    })

    gsap.from("#despertar", { 
        duration: 3,

        yoyo: true,
        scrollTrigger:{
            trigger: "#despertar",
            start: "top center",
            end: "bottom center",
            scrub: true,

        },
        ease:'inOut'
    })
    
    // gsap.to(
    //   "#maia",
    //   {
    //     duration: 4,
    //     yoyo: true,
    //     opacity: 0,
    //     ease: 'inOut'
    //   })

    let tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to("#det9-2", {
        duration: 3,
        fill: "#44083d",
        ease: "power1.inOut"
    }).to(
      "det9-2",{
        duration: 3,
        fill: "#6f3b82",
        ease: "power1.inOut"
      }
    ).to("#det9-2", {
        duration: 3,
        fill: "#ebcbcb",
        ease: "power1.inOut",

      })
    .to("#det9-2", {
        duration: 3,
        fill: "#44083d",
        ease: "power1.inOut",

      })




    gsap.to(['#P3', '#P4', '#P5'],{
        duration: 3,
        y: 10,
        yoyo:true,
        repeat:-1,
        stagger: 1

    })
  }, []);

  return (
    <div id="take02">
      <div id="permita" className="central-msg">
        PERMITA-SE
      </div>
      <div  id="despertar" className="central-msg">
        DESPERTAR
      </div>

        <Folhas />


        <Maia />


</div>
  );
};

export default Take02;
