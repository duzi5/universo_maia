import React from "react";
import "./Take11.scss";
import { IoLogoWhatsapp } from "react-icons/io";

const Take11 = () => {
  return (
    <div id="take11">
      <IoLogoWhatsapp id="whats" />
      <h2>CONECTE-SE COM NOSSA COMUNIDADE:</h2>
      <div className="contain">
        <div className="universo-maia contato">
          <h3>Universo Maia</h3>
          <p>
            Dois amigos unidos para trazer informação de qualidade e
            conhecimento sobre essa medicina ancestral que desperta para uma
            vida mais consciente e desperta. @universomaiassa / (71)9.8218-7183
          </p>
        </div>
        <div className="amanda contato">
          <h3>Amanda Baragiola</h3>
          <p>
            Mentora Esotérica e Alquimista, com o propósito de expandir a
            compreensão sobre o quanto o autoconhecimento por meio da Magia e
            Medicina Naturais nos conectam com o presente, para um aqui e agora
            menos ansioso , com menos vícios e mais respeito. @amandabaragiola
          </p>
        </div>
      </div>
    </div>
  );
};

export default Take11;
