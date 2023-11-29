import React from 'react';

const Music = () => {
    return (
       <>
         <iframe 
        width="100%" 
        height="166" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1441645684&color=%2324025f&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
      </iframe>
      <div 
        style={{
          fontSize: "10px", 
          color: "#cccccc", 
          lineBreak: "anywhere", 
          wordBreak: "normal", 
          overflow: "hidden", 
          whiteSpace: "nowrap", 
          textOverflow: "ellipsis", 
          fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif", 
          fontWeight: "100"
        }}>
        <a 
          href="https://soundcloud.com/vegaslive" 
          title="Vegas" 
          target="_blank" 
          style={{ color: "#cccccc", textDecoration: "none" }}>
          Vegas
        </a>
        {" · "}
        <a 
          href="https://soundcloud.com/vegaslive/vegas-universo-paralello-2023" 
          title="Vegas - Universo Paralello #2023" 
          target="_blank" 
          style={{ color: "#cccccc", textDecoration: "none" }}>
          Vegas - Universo Paralello #2023
        </a>
      </div>
      
       </>
    );
}

export default Music;
