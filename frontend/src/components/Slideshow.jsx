import React from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.min.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import trevor from '../assets/images/trevor.jpg';

const sliderImages = [img1, img2, img3, trevor];

const Slide = ({ image, index }) => {
  return (
    <div key={index} className="flex justify-center items-center h-72">
      <img alt={`Slide ${index}`} src={image} className="max-w-full max-h-full" />
    </div>
  );
};

export default function SlidingEvents() {
  return (
    <Carousel className='mt-10 mb-10'>
      {sliderImages.map((image, index) => (
        <Slide key={index} image={image} />
      ))}
    </Carousel>
  );
}
