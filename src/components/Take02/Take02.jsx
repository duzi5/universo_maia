import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Folhas from "./Folhas";
import BorboletaCogu from "./BorboletaCogu";
import Maia from "./Maia";
import "./Take02.scss";
import { gsap } from "gsap";
import Take02Teste from "../Take02Teste";
gsap.registerPlugin(ScrollTrigger);





const Take02 = () => {
  const frenteRef = useRef(null);
  const atrasRef = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;

          if (frenteRef.current && atrasRef.current) {
              frenteRef.current.style.transform = `translate3d(0, ${scrollTop * 0.5}px, 0)`;
              atrasRef.current.style.transform = `translate3d(0, ${scrollTop * 0.2}px, 0)`;
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  useEffect(() => {
    gsap.to("#PALPEBRA_BAIXO_1", {
      duration: 3,
      y: 10,
      yoyo: true,
     
    });
    gsap.to("#PALPEBRA_CIMA_2", {
      duration: 3,
      y: -10,
      yoyo: true,
     
    });

    gsap.to("#PALPEBRA_CIMA_2-2", {
      duration: 3,
      y: -10,
      yoyo: true,
      
    });
    gsap.to("#PALPEBRA_BAIXO_1-2", {
      duration: 3,
      y: 10,
      yoyo: true,
      
    });

    gsap.to("#COGU_CENTRAL", {
      duration: 3,
      fill: "#fff",
      yoyo: true,
      repeat: -1,
    });

    gsap.to("#det9-2", {
      duration: 3,
      fill: "#fff",
      yoyo: true,
      repeat: -1,
    });
    gsap.to("#COGUMELO_07", {
      duration: 3,
      fill: "#fff",
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
        x: "+=800",
        yoyo: true,
        scrollTrigger:{
            trigger: "#permita",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
        },
        ease:'inOut'
    })

    gsap.from("#despertar", { 
        duration: 3,
        x: "-=800",
        yoyo: true,
        scrollTrigger:{
            trigger: "#despertar",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
        },
        ease:'inOut'
    })
    
    gsap.to(
      "#maia",
      {
        duration: 4,
        yoyo: true,
        opacity: 0,
        ease: 'inOut'
      })






    // gsap.to(['#P3', '#P4', '#P5'],{
    //     duration: 3,
    //     y: 10,
    //     yoyo:true,
    //     repeat:-1,
    //     stagger: 1

    // })
  }, []);

  return (
    <div id="take02" className="parallax-container">
      <h2 id="permita" className="central-msg">
        PERMITA-SE
      </h2>
      <h2  id="despertar" className="central-msg">
        DESPERTAR
      </h2>

        <Folhas />


        <Maia />


</div>
  );
};

export default Take02;
