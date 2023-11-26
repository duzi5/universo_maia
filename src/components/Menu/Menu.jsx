import React, { useEffect, useRef } from "react";
import { TiHome } from "react-icons/ti";
import { FaBookOpen } from "react-icons/fa";
import { GiSlicedMushroom, GiBrain } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Menu.scss";

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    // Configuração do ScrollTrigger para cada seção
    const sections = ["take02", "take08", "take09", "take10"];

    sections.forEach((sectionId) => {
      ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateMenuHighlight(sectionId),
        onEnterBack: () => updateMenuHighlight(sectionId),
      });
    });

    function updateMenuHighlight(sectionId) {
      menuItemsRef.current.forEach((item) => {
        gsap.fromTo(item,
            
           {borderLeft: "none"} ,{
          backgroundColor: item.dataset.target === sectionId ? "#ba1255" : "transparent",
          borderLeft: item.dataset.target === sectionId ? "black 10px solid" : "transparent",
          borderRight: item.dataset.target === sectionId ? "black 10px solid" : "transparent",

          duration: 0.5, // Duração da transição

          ease: "power1.inOut" // Efeito de transição suave
        });
      });
    }
  }, []);

  const scrollToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="menu" ref={menuRef}>
      <ul>
        <li data-target="take02" onClick={() => scrollToSection("take02")} className="icon" ref={el => menuItemsRef.current[0] = el}><TiHome /></li>
        <li data-target="take08" onClick={() => scrollToSection("take08")} className="icon" ref={el => menuItemsRef.current[1] = el}><FaBookOpen /></li>
        <li data-target="take09" onClick={() => scrollToSection("take09")} className="icon" ref={el => menuItemsRef.current[2] = el}><GiSlicedMushroom /></li>
        <li data-target="take10" onClick={() => scrollToSection("take10")} className="icon" ref={el => menuItemsRef.current[3] = el}><GiBrain /></li>
        <li className="icon" ref={el => menuItemsRef.current[4] = el}><IoLogoWhatsapp /></li>
      </ul>
    </div>
  );
};

export default Menu;
