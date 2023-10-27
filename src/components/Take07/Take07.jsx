import React, { useEffect } from 'react';
import "./Take07.scss"
import gsap from 'gsap';

import expanda from "./expanda.png"

const Take07 = () => {
useEffect(()=>{
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.take8',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true
        }
    });
    
    tl.to(['.take05', '.take04', '.take06', ".take03", ".take07"], { 
        backgroundColor: '#000',
                ease: 'Power4.inOut',
    });
  
    gsap.from('#mente',{ 
        x: -800,
        opacity:0,
    scrollTrigger:{
        trigger:'#mente',
        start:'top center',
        end:'bottom center',
        scrub:true,

        onUpdate:(self)=>{
            console.log(self.progress)
        },
    }        
    })
    gsap.from('#mergulhe',{ 
        x: 800,
        opacity:0,
    scrollTrigger:{
        trigger:'#mergulhe',
        start:'top center',
        end:'bottom center',
        scrub:1,

        onUpdate:(self)=>{
            console.log(self.progress)
        },
    }        
    })
},[])

    return (
        <div className="take07">
            

            <h3 id="mergulhe"> Mergulhe no <strong>conhecimento ancestral</strong> que liberta o seu futuro</h3>
            <img id="mente" src={expanda}/>

        </div>
    );
}

export default Take07;
