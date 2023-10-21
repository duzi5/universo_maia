import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./VideoScroll.scss"
import video from "./video.mp4"
gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let duration = videoRef.current.duration;

        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",  // Isso determina quanto você precisa rolar
                scrub: true,
                pin: true,
                onUpdate: self => {
                    if(videoRef.current && !isNaN(videoRef.current.duration)) {
                        videoRef.current.currentTime = self.progress * videoRef.current.duration;
                    }
                }
            },
            x: 0 // Esta é uma animação dummy, a animação real acontece no callback onUpdate
        });

    }, []);

    return (
        <div ref={containerRef} style={{ height: '200vh', background: 'gray' }}>
            <video ref={videoRef} width="100%" preload="auto" muted>
                <source src={video} type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </div>
    );
};

export default ScrollVideo;