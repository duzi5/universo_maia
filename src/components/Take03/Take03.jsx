import React, { useEffect } from 'react';
import "./Take03.scss"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Take03 = () => {

    
    useEffect(()=>{
        ScrollTrigger.refresh();

        gsap.from('#universo', {
            scrollTrigger: {
                trigger: '#universo',
                start: 'top center+=100',
                end: '80% center',
                toggleActions: 'play none reverse none',
                scrub:true,
                
            },
            x:-1200,
            opacity:0,
            duration: 1,
            ease: 'inOut'
        })
        
        ScrollTrigger.refresh();

    gsap.from('#topa', {
        scrollTrigger: {
            trigger: '#topa',
            start: '-30% center+=100',
            end: '80% center',
            toggleActions: 'play none reverse none',
            scrub:true,

        },
        x:1200,
        opacity:0,
        duration: 1,
        ease: 'inOut'
    })
    
},[])

    return (
        <div  className='take03'>
            <h2 id="universo" >NÓS, DO UNIVERSO MAIA, 

TE CONVIDAMOS A DESPERTAR PARA UM NOVO MUNDO AGORA MESMO.</h2>
<h1 id="topa">TOPA?</h1>
        </div>
    );
}

export default Take03;
