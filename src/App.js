

import { useEffect, useRef } from "react";
import Header from "./components/Header";
import LoadingScene from './components/LoadingScene/LoadingScene';
import Take02 from './components/Take02/Take02';
import { gsap } from "gsap";


function App() {

  const take02Ref = useRef(null)

  function next() { 
    gsap.to(take02Ref.current, { 
            opacity: 1,
      duration: 1,
      ease: 'power4.out',
      delay: 1
    })
  }




  
  
  
  
  
  
  return (
    <div className="App">
      <LoadingScene  onEnd={()=>next()}/>
      {/* <Header/> */}
      <Take02 ref={take02Ref} />
    </div>
  );
}

export default App;

