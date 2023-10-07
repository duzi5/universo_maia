import React from "react";
import "./Take06.scss";
import LocomotiveScroll from "locomotive-scroll";
const Take06 = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="take06">
      <h2 data-scroll data-scroll-speed="0.6">
        ACOLHA-SE
      </h2>
      <h2 data-scroll data-scroll-speed="0.2">
        QUESTIONE-SE
      </h2>
      <h2 data-scroll data-scroll-speed="0.4">
        VIAJE ENTRE O PASSADO E COCRIE SEU FUTURO
      </h2>
    </div>
  );
};

export default Take06;
