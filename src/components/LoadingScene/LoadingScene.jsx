import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./LoadScene.scss";
import LoadingBar from "./LoadingBar";
import whitebutterfly from "./borboletaCogu.svg";
export default (props) => {


 
  const scene1Ref = useRef(null)
  function handleProgressComplete(){
    gsap.to(scene1Ref.current, {
      duration: 2,
      ease: "elastic",
      onComplete: () => {
        scene1Ref.current.style.display = 'none'
        console.log('zzz')
        props.onEnd()
      }
    });
  }
  useEffect(() => {



    // var canvas = document.getElementById("canvas");
    // var ctx = canvas.getContext("2d");
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;

    // var texts = "0123456789".split("");
    // var fontSize = 16;
    // var columns = canvas.width / fontSize;
    // var drops = [];
    // for (var x = 0; x < columns; x++) {
    //   drops[x] = 1;
    // }









    // function draw() {
    //   ctx.fillStyle = "rgba(0, 0, 0,0.5)";
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
    //   ctx.fillStyle = "#4ef1f9";
    //   ctx.font = fontSize + "px arial";

    //   for (var i = 0; i < drops.length; i++) {
    //     var text = texts[Math.floor(Math.random() * texts.length)];
    //     ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    //     if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
    //       drops[i] = 0;
    //     }
    //     drops[i]++;
    //   }

    //   requestAnimationFrame(draw);
    // }

    // gsap.to(".borboleta1", {
    //   duration: 10,
    //   ease: "inOut",
    //   repeat: -1,
    //   scale: 3,
    //   opacity: 0.3,
    //   x: 200,
    //   y: 400,
    //   yoyo: true,
    // });
    gsap.to("#initial",{ 
        duration: 1,
        ease: "linear",
        xPercent: 2,

        
        })
    // draw();
  }, []);

  return (
    <div className="scene scene1" ref={scene1Ref}>
      <div className="conteudo">
        <h5 id="initial"> Você está pronto para viver uma nova realidade?</h5>
        <img className="borboleta1" src={whitebutterfly} />
      {/* <canvas id="canvas"></canvas> */}
      <LoadingBar onProgressComplete={() => handleProgressComplete()} />
      </div>
    </div>
  );
};
