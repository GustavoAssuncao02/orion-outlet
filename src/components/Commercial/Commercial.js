import React from "react";
import { useEffect } from "react";
import "./Commercial.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

function Commercial() {
  const links = [
    {
      label: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=5571996613066&text=Ol%C3%A1%21+Desejo+ver+o+cat%C3%A1logo+com+todos+os+produtos.&type=phone_number&app_absent=0",
    },
    { label: "Instagram", url: "https://www.instagram.com/orionoutlet_/" },
    { label: "Facebook", url: "https://www.facebook.com/oironoutlet3066" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".commercial-reveal", {
      origin: "left",
      distance: "20px",
      duration: 2000,
      delay: 100,
      easing: "cubic-bezier(0, 0, 0, 1)",
      reset: true,
    });
    ScrollReveal().reveal(".commercial-reveal-right", {
      origin: "right",
      distance: "20px",
      duration: 2000,
      delay: 100,
      easing: "cubic-bezier(0, 0, 0, 1)",
      reset: true,
    });
  });

  return (
    <div className="commercial-background-container">
      <div className="commercial-reveal">
        <h1>BEM VINDO A</h1>
        <h3>STREET CLOTHES</h3>
      </div>
      <div
        id="social-midia-text"
        className="d-flex flex-column align-items-end text-white commercial-social-midia-text col-12 commercial-reveal-right"
      >
        <p>Nossas Redes Sociais</p>
        <div className="commercial-social-midias">
          {links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.label === "Whatsapp" ? (
                <IoLogoWhatsapp className="commercial-social-icon-whatsapp" />
              ) : null}
              {link.label === "Instagram" ? (
                <AiFillInstagram className="commercial-social-icon-instagram" />
              ) : null}
              {link.label === "Facebook" ? (
                <FaFacebook className="commercial-social-icon" />
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Commercial;
