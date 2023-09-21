import React, { useEffect, useState, useRef } from "react";
import "./LoadingBar.scss";
import { gsap } from "gsap";

const LoadingBar = (props) => {
  const [progressState, setProgressState] = useState(0);
  const progressBarRef = useRef(null)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressState((prev) => {
       
        console.log('progress', prev)
        if (prev >= 100) {
          clearInterval(interval);
          props.onProgressComplete()
          return 100;
        }
        
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    progressBarRef.current.style.width =`${progressState}%`
  }, [progressState])



  return (
    <div>
      <div className="container-loading-bar">
        <div
          className="progress-bar" ref={progressBarRef}
        ></div>
      </div>
    </div>
  );
};

export default LoadingBar;
