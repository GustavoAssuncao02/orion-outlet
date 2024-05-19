import React from "react";
import Logo from "../../assets/Images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import "./NavBar.css";

function NavBar() {
  const dropdownOptions = [
    { label: "Camisas", href: "https://github.com/" },
    { label: "Bermudas", href: "https://github.com/" },
    { label: "Moletons", href: "https://github.com/" },
    { label: "Copo e Garrafas Termicas", href: "https://github.com/" },
    { label: "Something else here", href: "https://github.com/" },
  ];

  const info = `
Página inicial Orion Outlet, para mais informações, entre em contato com nossa loja via Whatsapp: (71 99661-3066)
`;

  return (
    <div>
      <nav className="navbar bg-black col-12 navbar-expand-lg">
        <div className="container-fluid col-12">
          <a
            className="navbar-brand d-flex justify-content-between align-items-center w-100 col-12"
          >
            <a href="http://localhost:3000/">
            <img
              src={Logo}
              alt="Camisa"
              width="110"
              height="76"
              className="d-inline-block align-text-top logo"
            /></a>
            <div className="col-4">
              <form
                className="d-flex bg-dark rounded-pill p-2 search-items"
                role="search"
              >
                <input
                  className="form-control bg-dark text-light border-0"
                  type="search"
                  placeholder="Digite o que você procura"
                  aria-label="Search"
                />
                <button type="submit" className="button-search">
                  <FaSearch className="search-icon" />
                </button>
              </form>
            </div>
            <div className="cart-section">
              <FaCartShopping className="d-inline-block align-text-top col-0 cart" />
              <a
                href="https://github.com/"
                className="rounded-circle text-light text-sm count"
              >
                0
              </a>
            </div>
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light col-12 justify-content-between secondary-navbar">
        <a href="http://localhost:3000/" className="ms-5 navbar-options">
          Home
        </a>
        <div> 
          <Dropdown>
            <Dropdown.Toggle variant="light" className="navbar-category">
              Categorias
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark">
              {dropdownOptions.map((option, index) => (
                <Dropdown.Item key={index} href={option.href} className="text-white dropdown-option">
                  {option.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <a href="https://github.com/" className="navbar-options">
          Promoções
        </a>
        <a href="http://localhost:3000/location" className="navbar-options">
          Localizações
        </a>
        <Tooltip title={info}>
          <Button sx={{ m: 1 }}>
            <IoIosInformationCircleOutline className="me-4 info"/>
          </Button>
        </Tooltip>
      </nav>
    </div>
  );
}

export default NavBar;
