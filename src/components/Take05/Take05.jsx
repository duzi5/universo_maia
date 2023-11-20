import React, { useEffect, useState } from "react";
import "./Take05.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Take05 = () => {
  const fullText =
    "E SE DE REPENTE, POR UM MOMENTO, EM UM ESPAÇO TEMPO CRIADO NO UNIVERSO, VOCÊ PUDESSE SE PERMITIR ESQUECER TUDO QUE ACONTECE AQUI FORA E FOCASSE APENAS EM VOCÊ?";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [finished, setFinished] = useState(false);
  function disableScroll() {
    document.documentElement.style.overflow = 'hidden';
  }
  
  function enableScroll() {
    document.documentElement.style.overflow = '';
  }
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#momento",
      start: "top center",
      scrub: true,
      onEnter: () => setAnimate(true),
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    disableScroll()
    if (animate && text.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
        // Não defina setFinished aqui, pois o texto ainda está sendo escrito
      }, 100); // Velocidade da digitação
    } else if (text.length === fullText.length) {
      // Defina setFinished como true apenas quando o texto estiver completo
      setFinished(true);
      enableScroll()

    }
  
    return () => clearTimeout(timeoutId);
  }, [text, animate, fullText]);

  
  useEffect(() => {
    const tl2 = gsap.timeline();
    finished && ( tl2
        .to("#seria", {
          opacity: 1,
          duration: 3,
        })
        .to("#viveria", {
          opacity: 1,
          duration: 3,
        }));
    console.log(finished);
  }, [finished])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".take05",
        start: "0% center",
        end: "95% center",
        scrub: true,
      },
    });

    // Animação inicial do fundo para branco
    tl.fromTo(
      [".take05", ".take04", ".take06", ".take03", ".take07", "body"],
      { backgroundColor: "#000" }, // estado inicial
      { backgroundColor: "#ffffff", ease: "Power4.inOut" } // estado final
    );

    // Para alternar de volta para preto (ou cinza) durante o mesmo scroll
    gsap.to(
      [".take05", ".take04", ".take06", ".take03", ".take07", "body"],
      // estado inicial (branco novamente para garantir que o fromTo funcione)
      {
        scrollTrigger: {
          trigger: ".take06",
          start: "top center",
          end: "20% center",
          scrub: true,
        },
        backgroundColor: "#000",
        ease: "Power4.inOut",
      } // estado final
    );
  }, []);

  return (
    <div className="take05">
      <h5 id="momento">{text}</h5>
      <h3 id="seria">QUEM VOCÊ SERIA?</h3>
      <h3 id="viveria">COMO VIVERIA?</h3>
    </div>
  );
};

export default Take05;
