import React from 'react'
import logo from "../../Assets/Images/logo.png"
import cart from "../../Assets/Images/Cart.png"
import Search from "../../Assets/Images/search.png"
import Styles from "../NavBar/NavBar.css"
function NavBar() {
    return (
        <div>
            <nav class="navbar bg-black col-12 navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand d-flex justify-content align-items-center  w-100">
                        <img src={logo} alt="Logo" width="110" height="76" class="d-inline-block align-text-top" />
                        <div class="col-4">
                        <form class="d-flex" role="search">
                            <input class="form-control " type="search" placeholder="Digite o que você procura" aria-label="Search" />
                            <img src={Search} alt="Search" width="40"/>
                        </form>
                        </div>
                        <img src={cart} alt="Logo" width="40" class="d-inline-block align-text-top " />
                    </a>
                </div>
            </nav>
        </div>

    )
}

export default NavBar