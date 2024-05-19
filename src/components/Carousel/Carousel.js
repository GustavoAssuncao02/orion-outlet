import React from "react";
import shirt1 from "../../assets/Images/Products/shirt1.png";
import "./Carousel.css";
function Carousel() {
  return (
    <div>
      <div className="pt-2"></div>
      <h1 className=" justify-content-between align-items-center text-center pb-2">
        DESTAQUES
      </h1>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">

          <div className="carousel-item active ">
            <div className="container">
              <div className="row">
                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>

                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>

                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>

                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>

                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>

                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>

                <div className="col d-flex">
                  <div className="align-items-start">
                    <img id="items-carousel" alt="Camisa" src={shirt1} />
                    <div className="card-body">
                      <p id="Product-name" className="card-text">
                        Camiseta High
                      </p>
                      <div id="price" className="d-flex align-items-start">
                        <div className="btn-group">
                          <p className="card-text">R$80,00</p>
                        </div>
                      </div>
                      <p className="card-text">ou 2X de R$40,00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            id="button-carousel"
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            id="button-carousel"
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
