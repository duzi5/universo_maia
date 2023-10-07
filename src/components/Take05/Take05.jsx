import React from 'react';
import "./Take05.scss"
import LocomotiveScroll from 'locomotive-scroll';
const Take05 = () => {
    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div className='take05'>
            <h5 data-scroll data-scroll-speed="0.5" >E SE DE REPENTE, POR UM MOMENTO, EM UM ESPAÇO TEMPO CRIADO NO UNIVERSO, VOCÊ PUDESSE SE PERMITIR ESQUECER TUDO QUE ACONTECE AQUI FORA E FOCASSE APENAS EM VOCÊ?</h5>
            <h3 data-scroll data-scroll-speed="0.5">QUEM VOCÊ SERIA?</h3>
            <h3 data-scroll data-scroll-speed="0.5">COMO VIVERIA</h3>
        </div>
    );
}

export default Take05;
