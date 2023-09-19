import React, { useEffect, useState } from "react";
import "./LoadingBar.scss";
const LoadingBar = () => {
  const [progressState, setProgressState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressState((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
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
