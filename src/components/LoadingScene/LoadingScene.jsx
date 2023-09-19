import { gsap } from "gsap";
import { useEffect } from "react";
import "./LoadScene.scss";
import LoadingBar from "./LoadingBar";
import whitebutterfly from "./borboletaCogu.svg";
export default () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#initial", { duration: 2, ease: "elastic", opacity: 1 });

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var texts = "0123456789".split("");
    var fontSize = 16;
    var columns = canvas.width / fontSize;
    var drops = [];
    for (var x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = "rgba(47, 34, 34, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#4ef1f9";
      ctx.font = fontSize + "px arial";

      for (var i = 0; i < drops.length; i++) {
        var text = texts[Math.floor(Math.random() * texts.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      requestAnimationFrame(draw);
    }

    gsap.to(".borboleta1", {
      duration: 10,
      fill: "red",
      ease: "easeInOut",
      repeat: -1,
      scale: 3,
      opacity: 0.3,
      x: 2000,
      y: 4000,
      yoyo: true,
    });
    gsap.from("#initial",{ 
        duration: 4,
        ease: "inOut",
        opacity: 0,
        xPercent: 2,
        yPercent: 3,
        repeat: -1,
        
        })
    draw();
  }, []);

  return (
    <div className="scene scene1">
      <div className="conteudo">
        <h5 id="initial"> Você está pronto para viver uma nova realidade?</h5>
        <LoadingBar />
        <img className="borboleta1" src={whitebutterfly} />
      </div>
      <canvas id="canvas"></canvas>
    </div>
  );
};
