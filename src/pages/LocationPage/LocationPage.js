import React from 'react'
import "./LocationPage.css"
import NavBar from '../../components/NavBar/NavBar';
import Location from '../../components/Location/Location';
import Footer from "../../components/Footer/Footer";
import MenuCategories from '../../components/MenuCategories/MenuCategories';


function LocationPage() {
    return (
        <><NavBar></NavBar>
            <Location></Location>
            <MenuCategories></MenuCategories>
            <Footer></Footer>
            <div>

            </div>
        </>
    )
}

export default LocationPage