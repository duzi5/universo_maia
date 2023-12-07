import React from 'react';
import './Marquee.scss'; // Importar o arquivo CSS

const Marquee = ({ text }) => {
    return (
        <div className="marquee">
            <p>{text}</p>
        </div>
    );
};

export default Marquee;
