import React, { useEffect } from "react";
import "./Take07.scss";
import gsap from "gsap";
import Brain from "./Brain";
import expanda from "./expanda.png";
import ScrollTrigger from "gsap/ScrollTrigger";

const Take07 = () => {
  useEffect(() => {
      const menteElement = document.getElementById("mente");

      if (menteElement) {
        const width = window.innerWidth;
        console.log(width); // Isto irá imprimir a largura do elemento no console

        gsap.fromTo(
          "#mente",
          {
            x: 0
          },
          {
            x: -width,
            ease: "none",
            scrollTrigger: {
              trigger: "#mente",
              start: "0% 50%",
              end: "100% 50%",
              scrub: true,
              pin:"mente",
              pinSpacing: true
            },
          }
        );
      }
  }, []);

  return (
    <div className="take07">
      <div id="env-mente">
        <div>
          <h4 id="mente"className="flutue">Esse é o poder do <strong id='destaque'>cogumelo</strong></h4>
      
        </div>
      </div>
    </div>
  );
};

export default Take07;