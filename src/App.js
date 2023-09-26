

import { useEffect, useRef } from "react";
import Header from "./components/Header";
import LoadingScene from './components/LoadingScene/LoadingScene';
import Take02 from './components/Take02/Take02';
import { gsap } from "gsap";
import Take03 from "./components/Take03/Take03";


function App() {

 

  // function next() { 
  //   gsap.to("#take02", { 
  //           opacity: 1,
  //     duration: 1,
  //     ease: 'power4.out',
  //     delay: 1
  //   })
  // }




  
  
  
  
  
  
  return (
    <div className="App">
      <LoadingScene className="loading" />
   
      <Take02 className="take02" />
      <Take03 className="take03"/>
    </div>
  );
}

export default App;

