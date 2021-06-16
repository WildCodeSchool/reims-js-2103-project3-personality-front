import React from 'react';
import { Carousel } from '3d-react-carousal';
import './Carousel.scss';

function Diapo() {
  const slides = [
    <img className="circular-images" src="https://picsum.photos/800/300/?random" alt="1" />,
    <img className="circular-images" src="https://picsum.photos/800/301/?random" alt="2" />,
    <img className="circular-images" src="https://picsum.photos/800/302/?random" alt="3" />,
    <img className="circular-images" src="https://picsum.photos/800/303/?random" alt="4" />,
    <img className="circular-images" src="https://picsum.photos/800/304/?random" alt="5" />];

  return (
    <Carousel className="carousel" slides={slides} autoplay interval={3000} />
  );
}

export default Diapo;
