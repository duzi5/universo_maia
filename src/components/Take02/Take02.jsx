import React, { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BorboletaCogu from "./BorboletaCogu";
import FolhasFrente from "./FolhasFrente";
import FolhasFundo from "./FolhasFundo";
import FolhasMeio from "./FolhasMeio";
import Maia from "./Maia";
import "./Take02.scss";
import { gsap } from "gsap";
import Take02Teste from "../Take02Teste";
gsap.registerPlugin(ScrollTrigger);





const Take02 = () => {
  useEffect(() => {
    gsap.to("#PALPEBRA_BAIXO_1", {
      duration: 3,
      y: 10,
      yoyo: true,
      repeat: -1,
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

    gsap.to("#permita", { 
        duration: 3,
        x: "+=800",
        yoyo: true,
        repeat:-1,
        // scrollTrigger:{
        //     trigger: "#permita",
        //     start: "top center",
        //     end: "bottom center",
        //     scrub: true,
        //     markers: true,
        // },
        ease:'inOut'
    })

    gsap.to("#despertar", { 
        duration: 3,
        x: "-=800",
        yoyo: true,
        repeat:-1,
        // scrollTrigger:{
        //     trigger: "#despertar",
        //     start: "top center",
        //     end: "bottom center",
        //     scrub: true,
        //     markers: true,
        // },
        ease:'inOut'
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
    <div id="take02">
      <h2 id="permita" className="central-msg">
        PERMITA-SE
      </h2>
      <h2 id="despertar" className="central-msg">
        DESPERTAR
      </h2>
      <Maia />
  <FolhasFrente/>
    <FolhasMeio/>
    <FolhasFundo/>
      {/* <Take02Teste/> */}
    </div>
  );
};

export default Take02;
