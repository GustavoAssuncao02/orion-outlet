import React from "react";
import Shirt2 from "../../assets/Images/Products/shirt2.png";
import Shirt3 from "../../assets/Images/Products/shirt3.png";
import Shirt4 from "../../assets/Images/Products/shirt4.png";

import "./Carousel.css";

function Carousel() {
  const shirtImages = [
    { image: Shirt2, name: "Camiseta High Azul" },
    { image: Shirt3, name: "Camiseta High Cinza" },
    { image: Shirt4, name: "Camiseta High Branca" },
    { image: Shirt2, name: "Camiseta High Azul" },
    { image: Shirt3, name: "Camiseta High Cinza" },
    { image: Shirt4, name: "Camiseta High Branca" },
  ];

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Alterando para 4 imagens por linha
  const chunkedShirtImages = chunkArray(shirtImages, 4);

  return (
    <div className="carousel-custom-container">
      <h1 className="carousel-custom-title text-center pt-2 pb-4">DESTAQUES</h1>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedShirtImages.map((row, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="container ps-3">
                <div className="row">
                  {row.map((shirt, shirtIndex) => (
                    <div key={shirtIndex} className="col-3 d-flex"> {/* Ajustado para 4 colunas */}
                      <div className="carousel-custom-card align-items-start">
                        <img
                          className="carousel-custom-image"
                          src={shirt.image}
                          alt="shirt"
                        />
                        <div className="carousel-custom-card-body">
                          <p className="carousel-custom-product-name">
                            {shirt.name}
                          </p>
                          <div className="carousel-custom-price d-flex align-items-start">
                            <div className="btn-group">
                              <p className="carousel-custom-text">R$80,00</p>
                            </div>
                          </div>
                          <p className="carousel-custom-text">
                            em até 2x sem juros
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-custom-button carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-custom-button carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
