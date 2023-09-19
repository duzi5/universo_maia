import React, { useEffect } from 'react';
import BorboletaCogu from './BorboletaCogu';
import FolhasCamada1 from './FolhasCamada1';
import FolhasCamada2 from './FolhasCamada2';
import FolhasCamada3 from './FolhasCamada3';
import Maia from './Maia';
import "./Take02.scss"
import { gsap } from 'gsap';







const Take02 = () => {

    useEffect(()=>{
        gsap.to('#PALPEBRA_BAIXO_1',{
            duration: 3,
            y: 10,
            yoyo:true,
            repeat:-1,
        })
        gsap.to('#PALPEBRA_CIMA_2',{
            duration: 3,
            y: -10,
            yoyo:true,
            repeat:-1,
        })

        gsap.to('#PALPEBRA_CIMA_2-2',{
            duration: 3,
            y: -10,
            yoyo:true,
            repeat:-1,
        })
        gsap.to('#PALPEBRA_BAIXO_1-2',{
            duration: 3,
            y: 10,
            yoyo:true,
            repeat:-1,
        })

        gsap.to('#COGU_CENTRAL', { 
            duration: 3,
            fill: '#fff',
            yoyo:true,
            repeat: -1
        })

        gsap.to('#det9-2', {
            duration: 3,
            fill: '#fff',
            yoyo:true,
            repeat: -1
        })
        gsap.to('#COGUMELO_07', {
            duration: 3,
            fill: '#fff',
            yoyo:true,
            repeat: -1
        })






    },[])





    return (
        <div>
            <FolhasCamada1 />
            <FolhasCamada2 />
            <FolhasCamada3 />
            <Maia />
        </div>
    );
}

export default Take02;
