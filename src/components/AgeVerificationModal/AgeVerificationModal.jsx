import React from "react";
import "./AgeVerificationModel.scss";

const AgeVerificationModal = ({ onClose }) => {
  const handleYesClick = () => {
    onClose();
  };

  const handleNoClick = () => {
    window.location.href = "https://www.clickjogos.com.br";
  };

  return (
    <div className="ageVerificationModal">
      <div className="modalContent">
        <h2>Você tem 18 anos ou mais?</h2>
        <button onClick={handleYesClick}>Sim</button>
        <button onClick={handleNoClick}>Não</button>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
