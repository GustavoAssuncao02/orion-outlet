import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../Assets/Images/logo.png"
import cart from "../../Assets/Images/Cart.png"
function NavBar() {
    return (
        <div>
            <nav class="navbar bg-black col-12">
                <div class="container-fluid">
                    <a class="navbar-brand d-flex justify-content-between align-items-center w-100">
                        <img src={logo} alt="Logo" width="110" height="76" class="d-inline-block align-text-top" />
                        <div class="me-5 mx-auto">
                        <form class="d-flex" role="search">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                        <img src={cart} alt="Logo" width="40" class="d-inline-block align-text-top me-5" />
                    </a>
                </div>
            </nav>
        </div>

    )
}

export default NavBar