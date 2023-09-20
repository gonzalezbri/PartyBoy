import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.min.css';
import Party1 from '../assets/images/Party1.jpg';
import Party2 from '../assets/images/Party2.png';
import Party3 from '../assets/images/Party3.png';
import Party4 from '../assets/images/Party4.png';
import Party5 from '../assets/images/Party5.png';
import Party6 from '../assets/images/Party6.png';
import Party7 from '../assets/images/Party7.png';
import standing from '../assets/images/standing.png'

const sliderImages = [Party1, Party2, Party3, Party4, Party5, Party6, Party7];

const Slide = ({ image }) => {
  const imgStyle = {
    maxWidth: '25%',
    maxHeight: '100%',
    margin: '0 auto',
    boxShadow: '4px 2px 10px rgba(0, 0, 0, 0.75)',
    borderRadius: '15px',
  };
  

  return (
    <div style={{ flex: '0 0 33.33%', transition: 'transform 0.3s ease' }}>
      <img alt="Slide" src={image} style={imgStyle} />
    </div>
  );
};

export default function CenteredCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);


  const dividerStyles = {
    width: '00px',
    height: '2px',
    background:'#D6A5D2',
    margin: '40px 0', // Adjust the margin as needed
  };
  const standingImageStyles = {
    width: '400px', 
    height: 'auto',
    };


  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
      <img src={standing} alt="standing party boy" style={standingImageStyles} />
      <img src={standing} alt="standing party boy" style={standingImageStyles} />
      <img src={standing} alt="standing party boy" style={standingImageStyles} />
      </div>
      <hr style={dividerStyles} />
      <span className="tracking-wide whitespace-normal underline dark:text-white decoration-pink-300 text-4xl font-bold text-white" style={{ marginTop: '-40px', textShadow: '2px 4px 10px rgba(0, 0, 0, 0.75)' }}>
        Will You Be There?
      </span>
      <hr style={dividerStyles} />
      <div className="mt-10 mb-10 flex items-center overflow-hidden">
        <Carousel
          className="w-full"
          activeIndex={activeIndex}
          onChange={(newIndex) => setActiveIndex(newIndex)}
          perPage={3}
          infinite={true}
        >
          {sliderImages.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

