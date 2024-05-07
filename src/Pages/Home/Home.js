import React from 'react';
import "./Home.css";
import NavBar from '../../Components/NavBar/NavBar';
import Carousel from '../../Components/Carousel/Carousel';
import Commercial from '../../Components/Commercial/Commercial';
const Home = () => {
  return (
    <><><NavBar />
    <Commercial></Commercial></>
    <Carousel /></>
  )
}

export default Home