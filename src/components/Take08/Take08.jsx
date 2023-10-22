import React, { useEffect } from "react";
import "./Take08.scss";
import CogusAzuis from "./CogusAzuis";
import matrix from "../matrix.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import poder from "./cogumeloPoderTexto.png"
const Take08 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#poder", {
      x: 800,
      opacity: 0,
      scrollTrigger: {
        trigger: "#poder",
        start: "top center",
        end: "bottom center",
        scrub: 1,

        onUpdate: (self) => {
          console.log(self.progress);
        },
      },
    });
    gsap.from("#medicina", {
      x: -800,
      opacity: 0,
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
    gsap.fromTo(['.take08'],{background: "lightblue"},{
        backgroundColor: "slateblue",
        duration:5,
        ease:'inOut',
        scrollTrigger:{
          trigger: '.take08',
          start: 'bottom center',
          end: 'top center',
          scrub:true,
          markers:true
        }
      })
  }, []);

  return (
    <div className="take08">
      <img id="poder"src={poder} alt="" />

      <h4 id="medicina">
        A MEDICINA ANCESTRAL QUE TE DESPERTA PARA UM AQUI E AGORA MAIS
        CONSCIENTE, COM MENOS ANSIEDADE E MAIS DISPOSIÇÃO PARA VIVER A VIDA.
      </h4>

      <img className="matrix" src={matrix} />
      <CogusAzuis />
    </div>
  );
};

export default Take08;
