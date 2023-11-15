import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BorboletaCogu from "./BorboletaCogu";
import Maia from "./Maia";
import "./Take02.scss";
import { gsap } from "gsap";





const Take02 = () => {















  useEffect(() => {



    gsap.to(['#maia'],{

      duration: 3,
      filter: ' blur(40px)',
      ease:"power3.inOut",
      scrollTrigger:{
        trigger: "#take02",
        start: "bottom center",
        end: "bottom center",
        scrub: true,
        
      }

    })



    // gsap.from()

//  gsap.to(['#_2-5', '#_2-6'],{
//   duration: 8,
//   scale: 1.4,
//   x:-2

//  }

//  )



    gsap.to("#palpebraBaixo1", {
      duration: 3,
      y: 6,
      yoyo: true,
      repeat:-1
     
    });
    gsap.to("#palpebraCima1", {
      duration: 3,
      y: -6,
      yoyo: true,
      repeat: -1,
     
    });

    gsap.to("#palpebraCima2", {
      duration: 3,
      y: -6,
      yoyo: true,
      repeat: -1,
      
    });
    gsap.to("#palpebraBaixo2", {
      duration: 3,
      y: 6,
      yoyo: true,
      repeat: -1,
      
    });

    // gsap.to("#COGU_CENTRAL", {
    //   duration: 3,
    //   fill: "#dccece",
    //   yoyo: true,
    //   repeat: -1,
    // });

    
    // gsap.to("#COGUMELO_07", {
    //   duration: 3,
    //   fill: "#dccece",
    //   yoyo: true,
    //   repeat: -1,
    // });
    // gsap.to("#maia", {
    //   duration: 3,
    //   yoyo: true
    //   repeat: -1,
    //   ease: "inOut",
    // });
    // gsap.to("#CAMISA", {
    //   scale: 1.0005,
    //   x: -3,
    //   yPercent: 2,
    //   duration: 3,
    //   ease: "inOut",
    //   repeat: -1,
    //   yoyo: true,
    // });

    // gsap.from("#permita", { 
    //     duration: 3,
    //     opacity:0,
    //     ease:'inOut'
    // })

    // gsap.from("#despertar", { 
    //     duration: 3,

    //     yoyo: true,
    //     scrollTrigger:{
    //         trigger: "#despertar",
    //         start: "top center",
    //         end: "bottom center",
    //         scrub: true,

    //     },
    //     ease:'inOut'
    // })
    


    // let tl = gsap.timeline({ repeat: -1, yoyo: true });
    // tl.to("#det9-2", {
    //     duration: 3,
    //     fill: "#44083d",
    //     ease: "power1.inOut"
    // }).to(
    //   "det9-2",{
    //     duration: 3,
    //     fill: "#6f3b82",
    //     ease: "power1.inOut"
    //   }
    // ).to("#det9-2", {
    //     duration: 3,
    //     fill: "#ebcbcb",
    //     ease: "power1.inOut",

    //   })
    // .to("#det9-2", {
    //     duration: 3,
    //     fill: "#44083d",
    //     ease: "power1.inOut",

    //   })





  }, []);

  return (
    <div id="take02" data-scroll-container>
      <div className="msg-start" data-scroll-section>
      <div id="permita" className="central-msg" data-scroll>
        PERMITA-SE
      </div>
      <div  id="despertar" className="central-msg" data-scroll>
        DESPERTAR
      </div>

      </div>



        <Maia />


</div>
  );
};

export default Take02;
