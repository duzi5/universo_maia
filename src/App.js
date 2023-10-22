
import LoadingScene from "./components/LoadingScene/LoadingScene";
import Take02 from "./components/Take02/Take02";
import Take03 from "./components/Take03/Take03";
import Take04 from "./components/Take04/Take04";
import Take05 from "./components/Take05/Take05";
import Take06 from "./components/Take06/Take06";
import Take07 from "./components/Take07/Take07";
import Take08 from "./components/Take08/Take08";
import Take09 from "./components/Take09/Take09";
import VideoScroll from "./components/VideoScrollComponent/VideoScroll";
import { useEffect } from "react";
function App() {
  const slides = document.querySelectorAll('.selling-card');
  const OPTIONS = { dragFree: true, loop: true }
  
  useEffect(() => {

 }, []);
  
  
  return (
    <div className="App">
      {/* <LoadingScene /> */}
      <Take02 />
      <Take03 />
      <Take04 />
      <Take05 />
      <Take06 />
      <Take07 />
      <Take08 />
      <Take09 />
      <VideoScroll/>
    </div>
  );
}

export default App;
