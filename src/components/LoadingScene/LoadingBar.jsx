import React, { useEffect, useState } from "react";
import "./LoadingBar.scss";
import { gsap } from "gsap";

const LoadingBar = (props) => {
  const [progressState, setProgressState] = useState(0);

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

  return (
    <div>
      <div className="container-loading-bar">
        <div
          className="progress-bar"
          style={{
            width: `${progressState}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingBar;
