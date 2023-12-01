import React, { useEffect } from "react";
import "./Take07.scss";
import gsap from "gsap";
import Brain from "./Brain";
import expanda from "./expanda.png";
import ScrollTrigger from "gsap/ScrollTrigger";
const Take07 = () => {
  useEffect(() => {
    // Crie uma timeline separada para a animação de piscar
    const blinkingTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".env-mente",
        start:"top 100%",
        end: "bottom 80%",
        scrub: true,


      },
    });

    // blinkingTl.fromTo(
    //   "#env-mente",
    //   { height:0 },
    //   { ease: "power1", height:'19vh', alignItems:'center', margin: 'auto' }
    // );
    gsap.fromTo(
      "#mente",
      {
        x: () => `${window.innerWidth}px`,
      },
      {
        x: `-${document.getElementById("mente").offsetWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: "#env-mente",
          start: "40% 80%",
          end: "100% 65%",
          scrub: true,
        },
      }
    );

    //   gsap.to('#destaque',{ 
    //     fontSize: '+=140%',
    //     color:"#B90F55",
    //     scrollTrigger:{
    //         trigger: "#mente",
    //         start: "top 60%",
    //         end: "top 30%",
    //         scrub: true
    //     }
    //   });


    const tl2 = gsap.timeline({     scrollTrigger: {
        trigger: "#mergulhe",
        start: "0% 30%",
        end: "100% 60%",
        scrub: true,

      }})
    tl2.fromTo(
      "#mergulhe",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.inOut",
      }
    );
    // tl2.to('#env-mente', {
    //     height:0,
        
    // }, "+=10")
  }, []);

  return (
    <div className="take07">
      <div id="env-mente">
        <div id="mente">
        <h4 id="mente">EXPANDA SUA <strong id='destaque'>MENTE</strong></h4>

        </div>
      </div>

      <h4 scrollamount="40" id="mergulhe">
        {" "}
        Mergulhe no <strong>conhecimento ancestral</strong> que liberta o seu futuro
      </h4>
    </div>
  );
};

export default Take07;
