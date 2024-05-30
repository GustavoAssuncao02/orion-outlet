import React from 'react';
import "./Home.css";
import NavBar from '../../components/NavBar/NavBar';
import Commercial from '../../components/Commercial/Commercial';
import Carousel from '../../components/Carousel/Carousel';
import Releases from '../../components/Releases/Releases';
import Advertisement from '../../components/Advertisement/Advertisement';
import Location from '../../components/Location/Location';
import MenuCategories from '../../components/MenuCategories/MenuCategories';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Commercial />
      <Carousel />
      <Releases />
      <Advertisement />
      <h1 className=" justify-content-between align-items-center text-center pt-5 pb-5">
        Localização
      </h1>
      <Location />
      <MenuCategories />
      <Footer />
    </div>
  );
}
export default Home;