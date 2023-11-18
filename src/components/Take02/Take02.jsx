import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BorboletaCogu from "./BorboletaCogu";
import Maia from "./Maia";
import "./Take02.scss";
import { gsap } from "gsap";

const Take02 = () => {
  const [mostrarElemento, setMostrarElemento] = useState(true);

  const [mostrarMaia, setMostrarMaia] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#universo",
        start: "-190% top",
        end: "-140% top",
        markers: true,
        scrub: true,
        onEnter: () => {
          setMostrarElemento(false);
          console.log("Entrou na área do trigger");
        },
        onLeaveBack: () => {
          setMostrarElemento(true);
          console.log("Saiu na área do trigger");
        },
      },
    });

    tl.to(
      "#permita",
      {
        x: "+=80vw",
        zIndex: 4,
      },
      0
    );
    tl.to(
      "#despertar",
      {
        x: "-=60vw",

        zIndex: 5,
      },
      0
    );
    tl.to(["#permita", "#despertar"], {
      opacity: 0,
    });

    gsap.to("#maia", {
      opacity: 0,
      scale: 1.2,
      ease: "linear",
      scrollTrigger: {
        trigger: "#universo",
        start: "-90% 30%",
        end: "30% 90%",
        scrub: true,
        onEnter: () => setMostrarMaia(false),
        onLeaveBack: () => setMostrarMaia(true),
      },
    });
 
    
  }, []);
 useEffect(()=>{
    gsap.to("#camisa", {
      duration: 2,
      fill: "#9027ba",
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "center center",
      scale: 1.02,
    });

    gsap.to("#palpebraBaixo1", {
      duration: 3,
      y: 6,
      yoyo: true,
      repeat: -1,
    });
    gsap.to("#palpebraCima1", {
      duration: 3,
      y: -6,
      yoyo: true,
      repeat: -1,
    });

    gsap.to("#palpebraCima2", {
      duration: 3,
      y: -6,
      yoyo: true,
      repeat: -1,
    });
    gsap.to("#palpebraBaixo2", {
      duration: 3,
      y: 6,
      yoyo: true,
      repeat: -1,
    });
  },[mostrarMaia])

  return (
    <div id="take02">
      {mostrarElemento && (
        <div id="permita" className="central-msg">
          PERMITA-SE
        </div>
      )}
      {mostrarElemento && (
        <div id="despertar" className="central-msg">
          DESPERTAR
        </div>
      )}

      {mostrarMaia && <Maia />}
    </div>
  );
};

export default Take02;
