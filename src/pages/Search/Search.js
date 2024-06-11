import React from 'react'
import '../Search/Search.css'
import NavBar from '../../components/NavBar/NavBar.js'
import Shirt2 from "../../assets/Images/Products/shirt2.png";
import Shirt3 from "../../assets/Images/Products/shirt3.png";
import Shirt4 from "../../assets/Images/Products/shirt4.png";

function Search() {

    const shirtImages = [
        { image: Shirt2, name: "camiseta Hight Azul" },
        { image: Shirt3, name: "Camiseta High Cinza" },
        { image: Shirt4, name: "Camiseta High Branca" },
        { image: Shirt2, name: "Camiseta High Azul" },
        { image: Shirt3, name: "Camiseta High Cinza" },
        { image: Shirt4, name: "Camiseta High Branca" },
        { image: Shirt2, name: "Camiseta High Azul" },
        { image: Shirt3, name: "Camiseta High Cinza" },
        { image: Shirt4, name: "Camiseta High Branca" },
        { image: Shirt2, name: "Camiseta High Azul" },
        { image: Shirt3, name: "Camiseta High Cinza" },
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

    const chunkedShirtImages = chunkArray(shirtImages, 4);
    const addEmptySpaces = (chunks, size) => {
        return chunks.map(chunk => {
            if (chunk.length < size) {
                const emptyItems = Array(size - chunk.length).fill({ image: "", name: "" });
                return [...chunk, ...emptyItems];
            }
            return chunk;
        });
    };

    const paddedChunkedShirtImages = addEmptySpaces(chunkedShirtImages, 4);

    return (
        <div>
            <NavBar></NavBar>
            <div className="text-center">
                <div className="row align-items-start">
                    <div className="col-2">
                        Filtros
                        <div className='pt-5'>
                            categorias
                            <div className='pt-3'>
                                <div>
                                    <input type="checkbox" id="category1" name="category1" value="Category1" />
                                    <label htmlFor="category1"> Pegar do banco</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category2" name="category2" value="Category2" />
                                    <label htmlFor="category2"> Pegar do banco</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category3" name="category3" value="Category3" />
                                    <label htmlFor="category3"> Pegar do banco</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category4" name="category4" value="Category4" />
                                    <label htmlFor="category4">Pegar do banco</label>
                                </div>
                            </div>
                        </div>
                        <div className='pt-1'>
                            Valor
                            <div className='pt-1 ms-5 me-5'>
                                <label htmlFor="minValue">Min:</label>
                                <input type="number" id="minValue" name="minValue" min="0" className='form-control' />
                                <label htmlFor="maxValue" className='pt-3'>Max:</label>
                                <input type="number" id="maxValue" name="maxValue" min="0" className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        Você procurou por: 
                        <div>
                            <div className="container">
                                <h1 className="text-center pt-2 pb-4"></h1>
                                <div id="carousel" className="">
                                    <div className="">
                                        {paddedChunkedShirtImages.map((row, index) => (
                                            <div
                                                key={index}
                                                className={`pt-4 pb-4 ${index === 0 ? "active" : ""}`}
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
                                                                        <p id="Product-name" className="card-text">
                                                                            {shirt.name}
                                                                        </p>
                                                                        <div id="price" className="d-flex align-items-start">
                                                                            <div className="btn-group">
                                                                                <p className="card-text">R$80,00</p>
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
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Search