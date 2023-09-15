import React from 'react';
import Maia from './MAIA.svg';
import P1 from './1.svg';
import P2 from './2.svg';
import P3 from './3.svg';
import "./Header.scss"
const Header = () => {
    return (
        <div>
          
            <img id='maia' src={Maia} />
            <img id="P1" src={P1} />
            <img id="P2"src={P2} />///////
            <img id="P3"src={P3} />
        </div>
    );
};

export default Header;