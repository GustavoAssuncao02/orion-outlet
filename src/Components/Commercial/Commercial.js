import React from "react";
import "./Commercial.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Commercial() {
  return (
    <div className="background-container">
      <div className="text-end text-white">
        <h1>Nossas Redes Sociais</h1>
        <div id="socialMidias">
          <a href="https://api.whatsapp.com/send/?phone=5571996613066&text=Ol%C3%A1%21+Desejo+ver+o+cat%C3%A1logo+com+todos+os+produtos.&type=phone_number&app_absent=0">
            <IoLogoWhatsapp />
          </a>
          <a href="https://www.instagram.com/orionoutlet_/">
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com/oironoutlet3066">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div>
        <h1 id="CommercialText" className="text-white">
          Até 60% de <br></br>desconto
        </h1>
      </div>
    </div>
  );
}

export default Commercial;
