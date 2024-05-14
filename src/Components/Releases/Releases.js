import React from 'react'
import "../Releases/Releases.css"
import shirt from "../../Assets/Images/Products/shirt4.png";

function Releases() {
  return (
    <div CLASS="pt-5">
      <h1 class=" justify-content-between align-items-center text-center pb-5">LANÇAMENTOS</h1>
      <div class="bg-black">
        <div class="row pb-5">
          <div id="background-container" className=" col">
          </div>
          <div class="col d-flex justify-content-center align-items-center flex-column ">
            <img id="product" src={shirt} />
            <div id="Price" class="text-white">
              <h1>Camiseta Gucci</h1>
              <p class="">R$80,00</p>
              <p class="">ou 2X de R$40,00</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Releases