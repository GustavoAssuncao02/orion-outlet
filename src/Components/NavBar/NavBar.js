import React from 'react'
import logo from "../../Assets/Images/logo.png"
import cart from "../../Assets/Images/Cart.png"
import info from "../../Assets/Images/info.png"
import Search from "../../Assets/Images/search.png"
import "../NavBar/NavBar.css"

function NavBar() {
    return (
        <div>
            <nav class="navbar bg-black col-12 navbar-expand-lg ">
                <div class="container-fluid col-12">
                    <a class="navbar-brand d-flex justify-content-between align-items-center  w-100 col-12 ">
                        <img id="logo" src={logo} alt="Logo" width="110" height="76" class="d-inline-block align-text-top" />
                        <div class="col-4 bg-">
                            <form id="search-items" class="d-flex bg-dark rounded p-1" role="search">
                                <input class="form-control bg-dark text-light border-0" type="search" placeholder="Digite o que você procura" aria-label="Search" />
                                <img src={Search} class="" alt="Search" width="40" />
                            </form>
                        </div>
                        <div class="">
                            <img src={cart} alt="Logo" width="40" class="d-inline-block align-text-top col-0" />
                            <a id="count-items" class="rounded-circle text-light text-sm bg-success">0</a>
                        </div>
                    </a>
                </div>
            </nav>


            <nav id="secondary-navbar"class="navbar navbar-expand-lg navbar-light bg-light col-12 justify-content-between p-3">
                <div id="navbar-menu" class="">
                    <a class="navbar-brand" href="#">Home</a>
                </div>
                <div id="dropdown"class="">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><p class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    
                </div>
                <a class="navbar-brand" href="#">Promoções</a>
                <div class="">
                    <a class="navbar-brand" href="#">Localizações</a>
                </div>
                <img src={info} alt="Logo" width="40" class="d-inline-block align-text-top col-0" />
            </nav>
        </div>

    )
}

export default NavBar