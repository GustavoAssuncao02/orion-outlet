import React from "react";
import "./Commercial.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Commercial() {
  const links = [
    { label: "Whatsapp", url: 'https://api.whatsapp.com/send/?phone=5571996613066&text=Ol%C3%A1%21+Desejo+ver+o+cat%C3%A1logo+com+todos+os+produtos.&type=phone_number&app_absent=0'},
    { label: "Instagram", url: 'https://www.instagram.com/orionoutlet_/'},
    { label: "Facebook", url: 'https://www.facebook.com/oironoutlet3066'},
  ];
  return (
    <div className="background-container">
      <div className="text-end text-white">
        <p>Nossas Redes Sociais</p>
        <div className="social-midias">
          {links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.label === "Whatsapp" ? <IoLogoWhatsapp className="social-icon"/> : null}
              {link.label === "Instagram" ? <AiFillInstagram className="social-icon" /> : null}
              {link.label === "Facebook" ? <FaFacebook className="social-icon" /> : null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Commercial;
