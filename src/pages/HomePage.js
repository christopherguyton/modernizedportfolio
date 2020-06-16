import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/MainCarousel';


function HomePage(props) {
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} homeDescription={props.homeDescription} /> 
        <Carousel />
        </div>
    );
}

export default HomePage;
