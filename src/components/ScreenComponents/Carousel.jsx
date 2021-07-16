import React from 'react';
import { Carousel } from '3d-react-carousal';
import carouselCeline1 from '../../pictures/carousel-celine-1.jpg';
import carouselCeline2 from '../../pictures/carousel-celine-2.jpg';
import carouselCeline3 from '../../pictures/carousel-celine-3.jpg';
import carouselCeline4 from '../../pictures/carousel-celine-4.jpg';
import carouselCeline5 from '../../pictures/carousel-celine-5.jpg';

import './Carousel.scss';

function Diapo() {
  const slides = [
    <img className="circular-images" src={carouselCeline1} alt="1" />,
    <img className="circular-images" src={carouselCeline2} alt="2" />,
    <img className="circular-images" src={carouselCeline3} alt="3" />,
    <img className="circular-images" src={carouselCeline4} alt="4" />,
    <img className="circular-images" src={carouselCeline5} alt="5" />];

  return (
    <div className="carousel-container">
      <p>Mes images favorites :</p>
      <Carousel className="carousel" slides={slides} autoplay interval={3000} />
    </div>
  );
}

export default Diapo;
