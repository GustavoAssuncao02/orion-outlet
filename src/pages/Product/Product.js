import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../Product/Product.css";
import NavBar from "../../components/NavBar/NavBar.js";
import Shirt from "../../assets/Images/Products/OakleyWindbreaker/shirt1.png";
import Shirt2 from "../../assets/Images/Products/OakleyWindbreaker/shirt2.png";
import Shirt3 from "../../assets/Images/Products/OakleyWindbreaker/shirt3.png";
import Shirt4 from "../../assets/Images/Products/OakleyWindbreaker/shirt4.png";
import Lineup from "../../components/Lineup/Lineup.js";
import Footer from "../../components/Footer/Footer.js";

function Product() {
    const dropdownOptions = [
        { label: 'P', href: '#' },
        { label: 'M', href: '#' },
        { label: 'G', href: '#' },
        { label: 'GG', href: '#' },
      ];
  return (
    <div>
      <NavBar />
      <div>
        <div className="p-4">
          <div className="row justify-content-center col-12">
            <div className="col-3 small-images">
              <img src={Shirt} alt="OakleyWindbreaker" className="pb-3" />
              <img src={Shirt2} alt="OakleyWindbreaker" className="pb-3" />
              <img src={Shirt3} alt="OakleyWindbreaker" className="pb-3" />
            </div>
            <div className="col-3">
              <img
                src={Shirt4}
                alt="OakleyWindbreaker"
                className="large-image"
              />
            </div>
            <div className="col-4 pt-5 text-center product-catalog">
              <h3>CORTA VENTO OAKLEY</h3>
              <h5 className="pt-2">R$100,00</h5>
              <div className="info-pay">
                <h6>À Vista ou Cartão</h6>
                <h6>Em até 3x sem juros</h6>
              </div>
              <div className="colors pb-5 pt-3">
                <div className="circle m-1 bg-success"></div>
                <div className="circle m-1 bg-secondary"></div>
                <div className="circle m-1 bg-danger"></div>
                <div className="circle m-1 bg-dark"></div>
                <div className="circle m-1 bg-warning"></div>
              </div>
              <div className="size">
              <Dropdown>
              <Dropdown.Toggle variant="light" className="custom-border">
                Categorias
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark">
                {dropdownOptions.map((option, index) => (
                  <Dropdown.Item key={index} href={option.href} className="text-white">
                    {option.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lineup />
      <div className="p-5"></div>
      <Footer />
    </div>
  );
}

export default Product;
