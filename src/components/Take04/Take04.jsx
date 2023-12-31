import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Take04.scss";
import realcogu from "./cogu2.png"
import realcogu2 from "./cogu1.png"
// import cogu1 from "./cogu1.png";
// import cogu2 from "./cogu2.png";
// import cogu3 from "./cogu3.png";
// import cogu4 from "./cogu4.png";

const Take04 = () => {
  
  
  
  
  
  useEffect(() => {


      // ... restante do código ...
    
      gsap.fromTo("#faria", 
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#faria",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          ease: "power1.inOut",
          duration: 2,
        }
      );
  
    gsap.fromTo("#momento", 
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#momento",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        ease: "power1.inOut",
        duration: 2,
      }
    );

    gsap.fromTo("#seria", 
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#seria",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        ease: "power1.inOut",
        duration: 2,
      }
    );

    gsap.fromTo("#viveria", 
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#viveria",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        ease: "power1.inOut",
        duration: 2,
      }
    );

    gsap.to("#realcogu", {
      y: 20,
      repeat: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: "#realcogu",
        start: "top center",
        end: "bottom center",
        scrub: false,
      },
      ease: "power1.inOut",
      duration: 2,
    });

    gsap.to("#realcogu2", {
      x: 20,
      repeat: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: "#realcogu2",
        start: "top center",
        end: "bottom center",
        scrub: false,
      },
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);
  useEffect(() => {
    
    
    //criar movimento para os .coguLateral via scrolltrigger com muita suavidade
    
    gsap.fromTo(".coguLateral:nth-child(1)", {
      y: 300,
    }, {
      scrollTrigger: {
        trigger: ".coguLateral:nth-child(1)",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      y: 0,
      duration: 2,
      ease: "power4.inOut",
    });
    




    gsap.utils.toArray("#voce span").forEach((letter, i) => {
      gsap.to(letter, {
        opacity: 0.7,
        color: "#1c223f",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    });
    gsap.to("#faria", {
      color: "#E85747",
      scrollTrigger: {
        trigger: "#faria",
        scrub: true,
        start:"40% center",
        end: "bottom center",
      },
    });
  }, []);
  return (
    <div className="take04" >
      <div data-scroll-section id="fariaDiv">
      <h2 id="faria"  className="flutue" data-speed-scroll="2">
        O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER{" "}
        <div id="voce" data-speed-scroll = "1">
          <span>V</span>
          <span>O</span>
          <span>C</span>
          <span>Ê</span>
          <span>?</span>
        </div>
      </h2>
      <div data-scroll-section>
   <h5 id="momento" className="flutue"  data-scroll data-scroll-speed="1" >    E SE POR UM MOMENTO, EM UM ESPAÇO TEMPO CRIADO NO UNIVERSO, VOCÊ PUDESSE SE PERMITIR ESQUECER TUDO QUE ACONTECE AQUI FORA E FOCASSE APENAS EM VOCÊ?
</h5>
      <h3 id="seria" className="flutue" data-scroll data-scroll-speed="1">QUEM VOCÊ SERIA?</h3>
      <h3 id="viveria" className="flutue" data-scroll data-scroll-speed="1">COMO VIVERIA?</h3>
   </div>
   {/* <img id="cogu1" className="coguLateral" src={cogu1} alt=""  />
      <img id="cogu2" className="coguLateral" src={cogu2} alt="" />
      <img className="coguLateral" id="cogu3" src={cogu3} alt="" />
    <img className="coguLateral" id="cogu4" src={cogu4} alt=""/> */}
      </div>
    <img id="realcogu"src={realcogu} alt="" />
    <img id="realcogu2"src={realcogu2} alt="" />
    </div>
  );
};
export default Take04;
