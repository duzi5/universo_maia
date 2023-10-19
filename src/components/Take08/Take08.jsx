import React from 'react';
import "./Take08.scss"
import CogusAzuis from './CogusAzuis';
import LocomotiveScroll from 'locomotive-scroll';
import matrix from "../matrix.png"
const Take08 = () => {
    const locomotiveScroll = new LocomotiveScroll();
    
    return (
        <div className='take08'>
         <h2 data-scroll data-scroll-speed="0.5">O poder dos <strong>Cogumelos</strong></h2>

        <h4 data-scroll data-scroll-speed="0.5">A MEDICINA ANCESTRAL QUE TE DESPERTA PARA UM AQUI E AGORA MAIS CONSCIENTE, COM MENOS ANSIEDADE E MAIS DISPOSIÇÃO PARA VIVER A VIDA.</h4>

         <img className='matrix' src={matrix}/>
        <CogusAzuis />
        </div>
    );
}

export default Take08;
