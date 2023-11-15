import React, { useEffect } from "react";
import "./Take08.scss";
import CogusAzuis from "./coguTake8.png";
import matrix from "../matrix.png";

import gsap from "gsap";
import poder from "./cogumeloPoderTexto.png"
const Take08 = () => {
  useEffect(() => {

    gsap.fromTo("#poder",{
        x: 800,
        opacity: 0,
        
    }, {
        ease: "sine.inOut",
        duration:2.5,
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#poder",
        start: "top center",
        end: "100% center",
        scrub: 1,

        onUpdate: (self) => {
          console.log(self.progress);
        },
      },
    });
    gsap.fromTo("#medicina",{x:-800, opacity:0}, {
      x: 0,
      duration:2.5,
ease: "sine.inOut",
y: -500,
      opacity: 1,
      scrollTrigger: {
        trigger: "#medicina",
        start: "top center",
        end: "bottom center",
        scrub: 1,

        onUpdate: (self) => {
          console.log(self.progress);
        },
      },
    });
    // gsap.fromTo(['.take08'],{background: "lightblue"},{
    //     backgroundColor: "#9a0f73",
    //     ease:'inOut',
    //     scrollTrigger:{
    //       trigger: '.take08',
    //       start: 'bottom center',
    //       end: 'top center',
    //       scrub:true,
    //     }
    //   })
  }, []);

  return (
    <div className="take08">
      <img id="poder"src={poder} alt="" />

      <h4 id="medicina">
        A MEDICINA ANCESTRAL QUE TE DESPERTA PARA UM AQUI E AGORA MAIS
        CONSCIENTE, COM MENOS ANSIEDADE E MAIS DISPOSIÇÃO PARA VIVER A VIDA.
      </h4>

      {/* <img className="matriz" src={matrix} /> */}
     {/* <img className="cogus-azuis" src={CogusAzuis}></img> */}
    </div>
  );
};

export default Take08;
