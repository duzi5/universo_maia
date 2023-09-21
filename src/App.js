

import { useEffect, useRef } from "react";
import Header from "./components/Header";
import LoadingScene from './components/LoadingScene/LoadingScene';
import Take02 from './components/Take02/Take02';
import { gsap } from "gsap";


function App() {

 

  function next() { 
    gsap.to("#take02", { 
            opacity: 1,
      duration: 1,
      ease: 'power4.out',
      delay: 1
    })
  }




  
  
  
  
  
  
  return (
    <div className="App">
      <LoadingScene className="loading" onEnd={()=>next()}/>
      {/* <Header/> */}
      <Take02 id="take02" />
    </div>
  );
}

export default App;

