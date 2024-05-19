import Logo from "../../assets/Images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar bg-black col-12 navbar-expand-lg ">
        <div className="container-fluid col-12">
          <a className="navbar-brand d-flex justify-content-between align-items-center  w-100 col-12 ">
            <img
              id="logo"
              src={Logo}
              alt="Camisa"
              width="110"
              height="76"
              className="d-inline-block align-text-top"
            />
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
              <a className="rounded-circle text-light text-sm count">0</a>
            </div>
          </a>
        </div>
      </nav>

      <nav
        id="secondary-navbar"
        className="navbar navbar-expand-lg navbar-light bg-light col-12 justify-content-between p-3"
      >
        <div id="navbar-menu" className="">
          <a className="navbar-brand" href="http://localhost:3000/">
            Home
          </a>
        </div>
        <div id="dropdown" className="">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Camisas
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bermudas
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Moletons
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Copo e Garrafas Termicas
                </a>
              </li>
              <li>
                <p className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </div>
        <a className="navbar-brand" href="#">
          Promoções
        </a>
        <div className="">
          <a className="navbar-brand" href="http://localhost:3000/location">
            Localizações
          </a>
        </div>
        <IoIosInformationCircleOutline className="d-inline-block align-text-top col-0" />
      </nav>
    </div>
  );
}

export default NavBar;
