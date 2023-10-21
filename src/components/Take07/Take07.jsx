import React, { useEffect } from 'react';
import "./Take07.scss"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import expanda from "./expanda.png"

const Take07 = () => {
useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
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
            

            <h3 > Mergulhe no <strong>conhecimento ancestral</strong> que liberta o seu futuro</h3>
            <img id="mente" src={expanda}/>

        </div>
    );
}

export default Take07;
