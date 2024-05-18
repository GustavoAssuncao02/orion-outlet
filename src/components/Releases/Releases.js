import React from 'react'
import "./Releases.css"
import shirt from "../../assets/Images/Products/shirt4.png"
 
function Releases() {
  return (
    <div className="pt-5">
      <h1 className=" justify-content-between align-items-center text-center pb-5">LANÇAMENTOS</h1>
      <div className="bg-black">
        <div className="row col-12 pb-5">
          <div id="background-container" className=" col">
          </div>
          <div className="col d-flex justify-content-center align-items-center flex-column ">
            <img id="product" alt="Camisa" src={shirt} />
            <div id="Price" className="text-white">
              <h1>Camiseta Gucci</h1>
              <p className="">R$80,00</p>
              <p className="">ou 2X de R$40,00</p> 
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Releases