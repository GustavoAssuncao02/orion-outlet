import React from "react";
import { useNavigate } from "react-router-dom";
import ShirtBg01 from "../../assets/Images/shirts/bgremove/shirt01bg.webp";
import ShirtBg02 from "../../assets/Images/shirts/bgremove/shirt02-3bg.png";
import ShirtBg03 from "../../assets/Images/shirts/bgremove/shirt03bg.png";
import ShirtBg04 from "../../assets/Images/shirts/bgremove/shirt04bg.png";
import ShirtBg05 from "../../assets/Images/shirts/bgremove/shirt05bg.png";
import ShirtBg06 from "../../assets/Images/shirts/bgremove/shirt06bg.png";
import ShirtBg07 from "../../assets/Images/shirts/bgremove/shirt07bg.png";
import ShirtBg08 from "../../assets/Images/shirts/bgremove/shirt08bg.png";

import "./Carousel.css";

function Carousel() {
  const shirtImages = [
    {
      id: 1,
      image: ShirtBg01,
      name: "Camisetas tamanho grande masculina",
      price: "196,44",
    },
    {
      id: 2,
      image: ShirtBg02,
      name: "Color Blocking Print Tee Pink",
      price: "254,98",
    },
    {
      id: 3,
      image: ShirtBg03,
      name: "Flame PU Patchwork Tee",
      price: "254,98",
    },
    {
      id: 4,
      image: ShirtBg04,
      name: "22 Jersey Mesh Print Tee",
      price: "254,98",
    },
    {
      id: 5,
      image: ShirtBg05,
      name: "13 V-Neck Tee Red",
      price: "254,98",
    },
    {
      id: 6,
      image: ShirtBg06,
      name: "13 V-Neck Tee Blue",
      price: "254,98",
    },
    {
      id: 7,
      image: ShirtBg07,
      name: "Contrast Color Speedway Tee Green",
      price: "254,98",
    },
    {
      id: 8,
      image: ShirtBg08,
      name: "Contrast Color Speedway Tee",
      price: "152,99",
    },
  ];
  const navigate = useNavigate();

  const handleShirtClick = (id) => {
    navigate(`/shirts/${id}`);
  };
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

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
                    <div key={shirtIndex} className="col-3 d-flex">
                      <div className="carousel-custom-card align-items-start">
                        <img
                          className="carousel-custom-image"
                          src={shirt.image}
                          alt="shirt"
                          onClick={() => handleShirtClick(shirt.id)}
                          style={{ cursor: "pointer" }}
                        />
                        <div className="carousel-custom-card-body">
                          <p
                            onClick={() => handleShirtClick(shirt.id)}
                            className="carousel-custom-product-name"
                            style={{ cursor: "pointer" }}
                          >
                            {shirt.name}
                          </p>
                          <div className="carousel-custom-price d-flex align-items-start">
                            <div className="btn-group">
                              <p className="carousel-custom-text">
                                R${shirt.price}
                              </p>
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
