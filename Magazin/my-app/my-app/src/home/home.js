import React from "react";
import Carousell from "./Carousel/Carousel";
import SlickSlider from "./Slider/Slider";
import BannerHome from "./Banner/Banner";

const Home = () => {
    return(
        <>
            <Carousell />
            <SlickSlider />
            <BannerHome />
        </>
    )
}

export default Home;