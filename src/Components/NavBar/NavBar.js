import React from 'react'
import logo from "../../Assets/Images/logo.png"
import cart from "../../Assets/Images/Cart.png"
import info from "../../Assets/Images/info.png"
import Search from "../../Assets/Images/search.png"
import "../NavBar/NavBar.css"

function NavBar() {
    return (
        <div>
            <nav className="navbar bg-black col-12 navbar-expand-lg ">
                <div className="container-fluid col-12">
                    <a className="navbar-brand d-flex justify-content-between align-items-center  w-100 col-12 ">
                        <img id="logo" src={logo} alt="Logo" width="110" height="76" className="d-inline-block align-text-top" />
                        <div className="col-4 ">
                            <form id="search-items" className="d-flex bg-dark rounded p-1 " role="search">
                                <input className="form-control bg-dark text-light border-0" type="search" placeholder="Digite o que você procura" aria-label="Search" />
                                <img src={Search} className="" alt="Search" width="50" height="35" />
                            </form>
                        </div>
                        <div className="">
                            <img src={cart} alt="Logo" width="60" className="d-inline-block align-text-top col-0" />
                            <a id="count-items" className="rounded-circle text-light text-sm bg-success">0</a>
                        </div>
                    </a>
                </div>
            </nav>


            <nav id="secondary-navbar"className="navbar navbar-expand-lg navbar-light bg-light col-12 justify-content-between p-3">
                <div id="navbar-menu" className="">
                    <a className="navbar-brand" href="#">Home</a>
                </div>
                <div id="dropdown"className="">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Camisas</a></li>
                            <li><a className="dropdown-item" href="#">Bermudas</a></li>
                            <li><a className="dropdown-item" href="#">Moletons</a></li>
                            <li><a className="dropdown-item" href="#">Copo e Garrafas Termicas</a></li>
                            <li><p className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    
                </div>
                <a className="navbar-brand" href="#">Promoções</a>
                <div className="">
                    <a className="navbar-brand" href="#">Localizações</a>
                </div>
                <img src={info} alt="Logo" width="40" className="d-inline-block align-text-top col-0" />
            </nav>
        </div>

    )
}

export default NavBar