import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import trevor from '../assets/images/trevor.jpg';

export default function SlidingEvents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <img alt="..." src={img1} />
      <img alt="..." src={img2} />
      <img alt="..." src={img3} />
      <img alt="..." src={trevor} />
    </Slider>
  );
}



