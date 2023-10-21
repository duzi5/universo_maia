import React from 'react';
import "./Take08.scss"
import CogusAzuis from './CogusAzuis';
import matrix from "../matrix.png"
const Take08 = () => {
    
    return (
        <div className='take08'>
         <h2>O poder dos <strong>Cogumelos</strong></h2>

        <h4>A MEDICINA ANCESTRAL QUE TE DESPERTA PARA UM AQUI E AGORA MAIS CONSCIENTE, COM MENOS ANSIEDADE E MAIS DISPOSIÇÃO PARA VIVER A VIDA.</h4>

         <img className='matrix' src={matrix}/>
        <CogusAzuis />
        </div>
    );
}

export default Take08;
