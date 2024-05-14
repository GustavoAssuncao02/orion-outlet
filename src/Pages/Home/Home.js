import React from 'react';
import "./Home.css";
import NavBar from '../../Components/NavBar/NavBar';
import Carousel from '../../Components/Carousel/Carousel';
import Commercial from '../../Components/Commercial/Commercial';
import Releases from '../../Components/Releases/Releases';
import Intersection from '../../Components/Intersection/Intersection';
const Home = () => {
  return (
    <><><><><NavBar />
      <Commercial></Commercial></>
      <Carousel /></><Releases></Releases></><Intersection></Intersection></>
  )
}

export default Home