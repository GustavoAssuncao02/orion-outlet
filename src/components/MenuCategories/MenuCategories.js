import React from "react";
import "./MenuCategories.css";

function MenuCategories() {
  return (
    <div>
      <div>
        <div className="container text-center align-items-top pt-3 pb-2">
          <div className="row align-items-start categories">
            <div className="col">
              Camisas
              <ul>
                <li>Camisa Premium</li>
                <li>Camisa Grife</li>
                <li>Camisa Peruana</li>
                <li>Camisa Stret Wear</li>
                <li>Camisa de Time</li>
                <li>Camisa Regata</li>
              </ul>
            </div>
            <div className="col">
              Bermudas
              <ul>
                <li>Bermuda Jeans</li>
                <li>Bermuda Dri-Fit</li>
                <li>Bermuda Dri-Fit Nacional</li>
                <li>Bermuda Cargo High</li>
                <li>Bermuda Tactel</li>
                <li>Bermuda Brim Lacost</li>
              </ul>
            </div>
            <div className="col">
              Calças
              <ul>
                <li>Calça</li>
                <li>Calça Jeans</li>
                <li>Jogger</li>
              </ul>
            </div>
            <div className="col">
              Inverno
              <ul>
                <li>Suéter</li>
                <li>Moleton Gola Careca</li>
              </ul>
            </div>
            <div className="col">Sobre</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCategories;
