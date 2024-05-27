import React, { useState } from "react";
import "./Releases.css";
import shirtNormal from "../../assets/Images/Products/corta-vento-oakley.jpg";
import shirtHover from "../../assets/Images/Products/corta-vento-oakley-2.jpg";
function Releases() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="pt-5">
      <h1 className="justify-content-between align-items-center text-center pb-5">
        LANÇAMENTOS
      </h1>
      <div className="bg-black">
        <div className="row col-12 pb-5">
          <div className="col background-container-releases"></div>
          <div className="col d-flex justify-content-center align-items-center flex-column ">
            <img
              className="pt-5 product"
              alt="Camisa"
              src={hovered ? shirtHover : shirtNormal} 
              onMouseEnter={() => setHovered(true)} 
              onMouseLeave={() => setHovered(false)}
            />
            <div className="text-white price">
              <h1>Corta Vento Oakley</h1>
              <p className="">R$80,00</p>
              <p className="">ou 2X de R$40,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Releases;
