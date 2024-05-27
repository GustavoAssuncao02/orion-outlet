import React, { useEffect } from "react";
import "./Advertisement.css";
import session5 from "../../assets/Images/Commercial/teste1.png";
import ScrollReveal from "scrollreveal";

function Advertisement() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "20px",
      duration: 2500,
      delay: 100,
      easing: "cubic-bezier(0, 0, 0, 1)",
      reset: true,
    });
  }, []);

  return (
    <div className="background-container-Advertisement">
      <img src={session5} alt="homem" className="reveal-right" />
    </div>
  );
}

export default Advertisement;
