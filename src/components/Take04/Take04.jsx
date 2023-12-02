import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Take04.scss";

const Take04 = () => {
  useEffect(() => {
    gsap.utils.toArray("#voce span").forEach((letter, i) => {
      gsap.to(letter, {
        opacity: 0.7,
        color: "#ba1255",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    });
    gsap.to("#faria", {
      color: "#60a1c3",
      scrollTrigger: {
        trigger: "#faria",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);
  return (
    <div className="take04" data-scroll-container>
      <div data-scroll-section>
      <h2 id="faria" data-speed-scroll="2">
        O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER{" "}
        <div id="voce" data-speed-scroll = "1">
          <span>V</span>
          <span>O</span>
          <span>C</span>
          <span>Ê</span>
          <span>?</span>
        </div>
      </h2>
      </div>
    </div>
  );
};
export default Take04;
