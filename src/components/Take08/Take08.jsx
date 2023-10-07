import React from 'react';
import "./Take08.scss"
import CogusAzuis from './CogusAzuis';
import LocomotiveScroll from 'locomotive-scroll';

const Take08 = () => {
    const locomotiveScroll = new LocomotiveScroll();
    
    return (
        <div className='take08'>
         <h2 data-scroll data-scroll-speed="0.5">O poder dos <strong>Cogumelos</strong></h2>
        <h4 data-scroll data-scroll-speed="0.5">A MEDICINA ANCESTRAL QUE TE DESPERTA PARA UM AQUI E AGORA MAIS CONSCIENTE, COM MENOS ANSIEDADE E MAIS DISPOSIÇÃO PARA VIVER A VIDA.</h4>
        <div className="links">
            <a data-scroll data-scroll-speed="0.5">E POR QUE COGUS?</a>
            <a data-scroll data-scroll-speed="0.5">DOSAGENS</a>

            <a data-scroll data-scroll-speed="0.7">EXPERIÊNCIAS</a>
            <a data-scroll data-scroll-speed="0.9">CURA XAMANICA</a>
            <a data-scroll data-scroll-speed="0.2"> O QUE A MEDICINA FALA</a>
        </div>
        <CogusAzuis />
        </div>
    );
}

export default Take08;
