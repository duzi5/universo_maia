import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LoadingScene from "./components/LoadingScene/LoadingScene";
import Take02 from "./components/Take02/Take02";
import Take03 from "./components/Take03/Take03";
import Take04 from "./components/Take04/Take04";
import Take05 from "./components/Take05/Take05";
import Take06 from "./components/Take06/Take06";
import Take07 from "./components/Take07/Take07";
import Take08 from "./components/Take08/Take08";
// import Take09 from "./components/Take09/Take09";
import InfoPage from './components/InfoPage/InfoPage'; // Supondo que você tenha um componente InfoPage
import VideoScroll from "./components/VideoScrollComponent/VideoScroll";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";

// import { ScrollSmoother } from "gsap/ScrollSmoother";
import Take09 from './components/Take09/Take09-2';
import LocomotiveScroll from 'locomotive-scroll';
import Lenis from '@studio-freight/lenis'
import Take10 from './components/Take10/Take10';


function App() {
  useEffect(() => {
    const lenis = new Lenis()
    
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
    
    // gsap.registerPlugin(ScrollSmoother);
    const scroll = new LocomotiveScroll();

gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<div>
            {/* Seu conteúdo principal aqui */}
            <LoadingScene />
            <Take02 />
            <Take03 />
            <Take04 />
            <Take05 />
            <Take06 />
            <Take07 />
            <Take08 />
            <Take09 />

            <Take10 />
            {/* <VideoScroll/> */}
          </div>} />

          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
