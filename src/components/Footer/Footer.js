import React from "react";
import "./Footer.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-black ">
        <div className="container text-center">
          <div className="row align-items-start pt-3">
            <div className="col text-white">
              Social
              <div className="p-4"> 
                <a href="https://api.whatsapp.com/send/?phone=5571996613066&text=Ol%C3%A1%21+Desejo+ver+o+cat%C3%A1logo+com+todos+os+produtos.&type=phone_number&app_absent=0">
                  <IoLogoWhatsapp className="social-midias"/>
                </a>
                <a href="https://www.instagram.com/orionoutlet_/">
                  <AiFillInstagram className="social-midias"/>
                </a>
                <a href="https://www.facebook.com/oironoutlet3066">
                  <FaFacebook className="social-midias" />
                </a>
              </div>
            </div>
            <div className="col text-white">
              Horário de Funcionamento
              <div className="p-4">7h às 17h</div>
            </div>
            <div className="col text-white">
              Contato
              <div className="p-4">(071)99661-3066</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
