import React from 'react'
import "../Lineup/Lineup.css"
import Shirt2 from "../../assets/Images/Products/shirt2.png";
import Shirt3 from "../../assets/Images/Products/shirt3.png";
import Shirt4 from "../../assets/Images/Products/shirt4.png";


function Lineup() {

    const shirtImages = [
        { image: Shirt2, name: "Camiseta High Azul" },
        { image: Shirt3, name: "Camiseta High Cinza" },
        { image: Shirt4, name: "Camiseta High Branca" },
        { image: Shirt2, name: "Camiseta High Azul" },
        { image: Shirt3, name: "Camiseta High Cinza" },
        { image: Shirt4, name: "Camiseta High Branca" },
        { image: Shirt4, name: "Camiseta High Branca" },
        { image: Shirt4, name: "Camiseta High Branca" },
    ];

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedShirtImages = chunkArray(shirtImages, 4);
    return (
        <div className="carousel-container">
            <h1 className="text-center pt-2 pb-4">DESTAQUES</h1>
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
                                        <div key={shirtIndex} className="col d-flex">
                                            <div className="align-items-start">
                                                <img
                                                    className="items-carousel"
                                                    src={shirt.image}
                                                    alt="shirt"
                                                />
                                                <div className="card-body">
                                                    <p id="product-name" className="card-text">
                                                        {shirt.name}
                                                    </p>
                                                    <div  className="d-flex align-items-start">
                                                        <div className="btn-group">
                                                            <p id="price" className="card-text">R$80,00</p>
                                                        </div>
                                                    </div>
                                                    <p className="card-text">em até 2x sem juros</p>
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
                        id="button-carousel"
                        className="carousel-control-prev-icon"
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
                        id="button-carousel"
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Lineup