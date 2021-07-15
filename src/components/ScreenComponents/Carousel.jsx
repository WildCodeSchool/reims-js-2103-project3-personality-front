import React from 'react';
import { Carousel } from '3d-react-carousal';
import './Carousel.scss';

function Diapo() {
  const slides = [
    <img className="circular-images" src="" alt="1" />,
    <img className="circular-images" src="" alt="2" />,
    <img className="circular-images" src="" alt="3" />,
    <img className="circular-images" src="" alt="4" />,
    <img className="circular-images" src="" alt="5" />];

  return (
    <div className="carousel-container">
      <p>Mes images favorites :</p>
      <Carousel className="carousel" slides={slides} autoplay interval={3000} />
    </div>
  );
}

export default Diapo;
