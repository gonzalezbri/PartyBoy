import React from 'react';
import backgroundImage from '../assets/images/background1.png'; 

function CreateEvent() {
  const containerStyles = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    };

    const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    filter: 'blur(8px)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
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
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto', 
    };
    
  return (
    <div style={containerStyles}>
      <img src={backgroundImage} alt="Background" style={backgroundStyles} />
      <div style={overlayStyles}>
        <h1 className="text-2xl text-white">
          Click the button below to create your event!
        </h1>
      </div>
    </div>
  );
}

export default CreateEvent;