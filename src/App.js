import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LoadingScene from "./components/LoadingScene/LoadingScene";
import Take02 from "./components/Take02/Take02";
import Take03 from "./components/Take03/Take03";
import Take04 from "./components/Take04/Take04";
import Take06 from "./components/Take06/Take06";
import Take07 from "./components/Take07/Take07";
import Take08 from "./components/Take08/Take08";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import Take09 from "./components/Take09/Take09";
import InfoPage from './components/InfoPage/InfoPage'; // Supondo que você tenha um componente InfoPage
import VideoScroll from "./components/VideoScrollComponent/VideoScroll";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";

// import { ScrollSmoother } from "gsap/ScrollSmoother";
import Take09 from './components/Take09/Take09-3';
import LocomotiveScroll from 'locomotive-scroll';
import Lenis from '@studio-freight/lenis'
import Take10 from './components/Take10/Take10';
import Menu from './components/Menu/Menu';

import Take11 from './components/Take11/Take11';
import Take12 from './components/Take12/Take12';
import Music from './Music';
import Whatsapp from './components/Whatsapp/Whatsapp';
// import Scraps from './components/Scraps/Scraps';

function App() {
  useEffect(() => {
    const handleFocus = (event) => {
      if (event.target.tagName === 'IFRAME') {
        event.preventDefault();
      }
    };
  
    window.addEventListener('focus', handleFocus, true);
  
    return () => {
      window.removeEventListener('focus', handleFocus, true);
    };
  }, []);

  setInterval(() => {
    ScrollTrigger.refresh();
  }, 3000);
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
      <div className="App ">
          <Menu/>
        <Routes>
          <Route path="/" element={<div>
            {/* Seu conteúdo principal aqui */}
            <LoadingScene />
            <Take02 />
            <Take03 />

          {/* <Scraps/> */}
              <Take04 />
         
            <Take07 />
            <Take06 />
            <Take08 />
            <Take09 />
            <Take10 />
            <Take11 />
            {/* <Music/> */}
            <Take12 />
            <Whatsapp/>
            {/* <VideoScroll/> */}
          </div>} />

          {/* <Route path="/info" element={<InfoPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
