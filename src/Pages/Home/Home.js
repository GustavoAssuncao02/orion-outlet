import React from 'react';
import "./Home.css";
import NavBar from '../../Components/NavBar/NavBar';
import Carousel from '../../Components/Carousel/Carousel';
import Commercial from '../../Components/Commercial/Commercial';
import Releases from '../../Components/Releases/Releases';
const Home = () => {
  return (
    <><><><NavBar />
      <Commercial></Commercial></>
      <Carousel /></><Releases></Releases></>
  )
}

export default Home