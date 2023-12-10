import React from "react";
import "./Take11.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import Marquee from "../Marquee/Marquee";

const Take11 = () => {
  return (
    <div id="take11">
      <IoLogoWhatsapp id="whats" />
      <h1>CONECTE-SE COM NOSSA COMUNIDADE:</h1>
      <div className="contain">
        <div className="universo-maia contato">
          <h3>Universo Maia</h3>
          <p>
            Dois amigos unidos para trazer informação de qualidade e
            conhecimento sobre essa medicina ancestral que desperta para uma
            vida mais consciente.<br/>
             <a href="http://www.instagram.com/universomaiassa">@universomaiassa</a> / (71)9.8218-7183
          </p>
        </div>
        <div className="amanda contato">
          <h3>Amanda Baragiola</h3>
          <p>
            Mentora Esotérica e Alquimista, com o propósito de expandir a
            compreensão sobre o quanto o autoconhecimento por meio da Magia e
            Medicina Naturais nos conectam com o presente.<br/> <a href="http>//www.instagram.com/amandabaragiola ">@amandabaragiola </a>/ (71)9.8270-5439
          </p>
        </div>
        <Marquee text="No Brasil o cogumelo é descriminalizado. Para maiores informações busque suas referências e mantenha-se atualizado." />
      </div>
    </div>
  );
};

export default Take11;
