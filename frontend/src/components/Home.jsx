import React from 'react';
import { Button } from 'flowbite-react';
import backgroundImage from '../assets/images/background1.png'; // Import your background image
import img2 from '../assets/images/img2.jpg'
function Home() {
    const containerStyles = {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the container height to cover the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white', // Text color
    };

    const backgroundStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    filter: 'blur(8px)', // Apply the blur effect to the background image
    zIndex: -1, // Place the background behind the content
    };



    const overlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the overlay color and opacity as needed
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    textAlign: 'center',
    };

    const buttonStyles = {
    width: '200px', // Adjust the width to make the button bigger
    };

  
  const imageStyles = {
    width: '10%', // Make the image 10% of its original size
  };

  return (
    <div style={containerStyles}>
      <img  src={backgroundImage} alt="Background" style={backgroundStyles} />
      <img
          src={img2}
          alt=""
          className="scale-10" style={imageStyles}
          // Make the image 10% of its original size
        />
      <div className="py-8 px-4 mx-auto text-center lg:py-16" style={overlayStyles}>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-4xl dark:text-white">
          Click the button below to create your event!
        </h1>
        <Button size="xl" gradientDuoTone="purpleToPink" className="mb-4 text-2xl font-bold" style={buttonStyles}>
          Let's Party
        </Button>
      </div>
    </div>
  );
}

export default Home;


