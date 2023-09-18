import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import backgroundImage from '../assets/images/background1.png';
import img2 from '../assets/images/img2.jpg';

function Home() {
  const containerStyles = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    filter: 'blur(8px)', 
    zIndex: -1, 
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const overlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const buttonStyles = {
    width: '200px',
  };

  const imageStyles = {
    width: '10%',
  };

  return (
    <div style={containerStyles}>
      <div style={backgroundStyles} />
      <img src={img2} alt="" style={imageStyles} />
      <div className="py-8 px-4 mx-auto text-center lg:py-16" style={overlayStyles}>
        <h1 className="mb-4 text-2xl font-extrabold tracking-normal leading-none text-white md:text-2xl lg:text-3xl text-white">
          Click the button below brah!
        </h1>
        <Link to="/signup" >
        <Button size="xl" gradientDuoTone="purpleToPink" className="mb-4 text-2xl font-bold" style={buttonStyles}>
          Let's Party
        </Button></Link>
      </div>
    </div>
  );
}

export default Home;
