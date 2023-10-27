import React, { useEffect } from "react";
import gsap from "gsap";

import "./Take06.scss"
const Take06 = () => {
  useEffect(()=>{

    gsap.from("#acolha", {
      x: 800,
      opacity: 0,
      ease: 'inOut',
      scrollTrigger: {
        trigger: "#acolha",
        start: "-70% center",
        end: "70% center",
        scrub: true,

      },
  });
  gsap.from("#questione", {
    x: -800,
    opacity: 0,
    ease: 'inOut',
    scrollTrigger: {
      trigger: "#questione",
      start: "-70% center",
      end: "70% center",
      scrub: true,

    },
  });
  gsap.from("#cocrie", {
    ease: 'inOut',
    x: 800,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cocrie",
      start: "-70% center",
      end: "70% center",
      scrub: true,

    },
});
  },[])

  return (
    <div className="take06">
      <h2 id="acolha">ACOLHA-SE</h2>
      <h2 id="questione">QUESTIONE-SE</h2>
      <h2 id="cocrie">VIAJE ENTRE O PASSADO E COCRIE SEU FUTURO</h2>
    </div>
  );
};

export default Take06;
