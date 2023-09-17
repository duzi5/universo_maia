import React, { useEffect, useState } from 'react';
import "./LoadingBar.scss"
const LoadingBar = () => {
    
    const [progressState, setProgressState ] = useState(0)
    
 
  useEffect(()=>{
    const interval = setInterval(()=>{
        setProgressState((prevProgressState)=> prevProgressState + 1)
    }, 100)
    
  } ,[progressState])
    
    




    
    return (
        <div>
            <div className="container-loading-bar">
                <div className="progress-bar" style={{
                    width: `${progressState}%`
                }}>
                                        
                </div>
            </div>
        </div>
    );
}

export default LoadingBar;
